# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import tensorflow as tf


def load_model(model_number):
    model_paths = {
        1: 'models/city_day.h5',
        2: 'models/city_hourly.h5',
        3: 'models/station_day.h5',
        4: 'models/city_hourly.h5',
    }
    return tf.keras.models.load_model(model_paths[model_number])

def make_prediction(model, features):
    features = tf.convert_to_tensor(features)
    predictions = model.predict(features)
    return predictions.flatten()

@csrf_exempt
def predict_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            number = data.get('number')
            city = data.get('city')
            start_date = data.get('startDate')
            end_date = data.get('endDate')
            station_id = data.get('stationId')
            datetime = data.get('datetime')
            response_message = ''
            response_data = {
                'success': True,
                'number': number,
                'city': city,
                'start_date': start_date,
                'end_date': end_date,
                'station_id': station_id,
                'datetime': datetime,
            }
            if 1 <= number <= 6:
                response_data['city'] = city
                if number in (1, 4):
                    model = load_model(1)
                else:
                    model = load_model(2)
            elif 7 <= number <= 12:
                response_data['station_id'] = station_id
                if number in (7, 10):
                    model = load_model(3)
                else:
                    model = load_model(4)


            features = [number, city, start_date, end_date, station_id, datetime]
            predictions = make_prediction(model, features)
            response_data['message'] = response_message
            response_data['predictions'] = predictions.tolist()

            return JsonResponse(response_data)

        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'message': 'Invalid JSON'}, status=400)

    return JsonResponse({'success': False, 'message': 'Only POST requests are allowed'}, status=405)