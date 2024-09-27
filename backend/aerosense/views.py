from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt  # Use this for development purposes only; consider a more secure approach for production
def predict_view(request):
    if request.method == 'POST':
        try:
            # Parse the JSON payload
            data = json.loads(request.body)

            # Extracting values from the payload
            number = data.get('number')
            city = data.get('city')
            start_date = data.get('startDate')
            end_date = data.get('endDate')
            station_id = data.get('stationId')
            datetime = data.get('datetime')

            # Initialize response data
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

            # Logic to determine the response message based on 'number'
            if 1 <= number <= 6:
                response_data['city'] = city  # Ensure city is set
                if number in (1, 4):
                    response_message = 'You have to use model one'
                else:
                    response_message = 'You have to use model two'
            elif 7 <= number <= 12:
                response_data['station_id'] = station_id  # Ensure station_id is set
                if number in (7, 10):
                    response_message = 'You have to use model three'
                else:
                    response_message = 'You have to use model four'

            # Add response message to the response data
            response_data['message'] = response_message
            
            return JsonResponse(response_data)

        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'message': 'Invalid JSON'}, status=400)

    return JsonResponse({'success': False, 'message': 'Only POST requests are allowed'}, status=405)
