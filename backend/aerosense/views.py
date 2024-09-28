from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import random
import numpy as np

# Mock function to simulate pollutant concentration data generation
def generate_random_pollutant_concentrations():
    return [round(random.uniform(10.0, 150.0), 2) for _ in range(8)]  # Generate 8 random concentrations

# Function to calculate pollutant concentrations for a given range (date/hour/datetime)
def get_pollutant_data_for_range(start, end, step, number):
    data = []
    current = start
    while current <= end:
        concentrations = generate_random_pollutant_concentrations()
        data.append({
            'timestamp': current,
            'concentrations': concentrations,
            'model_used': number
        })
        current += step  # Increment by step (e.g., 1 day or 1 hour)
    return data

@csrf_exempt
def predict_view(request):
    if request.method == 'POST':
        try:
            # Parse the JSON payload
            data = json.loads(request.body)

            # Extract the required fields from the payload
            number = data.get('number')
            city = data.get('city')
            start_date = data.get('startDate')
            end_date = data.get('endDate')
            start_hour = data.get('startHour')
            end_hour = data.get('endHour')
            start_datetime = data.get('startDateTime')
            end_datetime = data.get('endDateTime')
            station_id = data.get('stationId')
            datetime = data.get('datetime')

            # Error handling for missing required data
            if not number or (not city and not station_id):
                return JsonResponse({'success': False, 'message': 'Number and City or Station ID are required'}, status=400)

            response_data = {
                'success': True,
                'number': number,
                'city': city,
                'station_id': station_id
            }

            # Handle logic for no range scenario
            if not end_date and not end_hour and not end_datetime:
                if start_date:
                    # Single date prediction
                    response_data['concentrations'] = generate_random_pollutant_concentrations()
                    response_data['message'] = f"Pollutant concentrations for {start_date}"
                elif start_hour:
                    # Single hour prediction
                    response_data['concentrations'] = generate_random_pollutant_concentrations()
                    response_data['message'] = f"Pollutant concentrations for {start_hour}"
                elif start_datetime:
                    # Single datetime prediction
                    response_data['concentrations'] = generate_random_pollutant_concentrations()
                    response_data['message'] = f"Pollutant concentrations for {start_datetime}"
            else:
                # Handle range scenario (both start and end present)
                if start_date and end_date:
                    # Range of dates
                    response_data['data'] = get_pollutant_data_for_range(start_date, end_date, step=1, number=number)
                    response_data['message'] = f"Pollutant concentrations from {start_date} to {end_date}"
                elif start_hour and end_hour:
                    # Range of hours
                    response_data['data'] = get_pollutant_data_for_range(start_hour, end_hour, step=1, number=number)
                    response_data['message'] = f"Pollutant concentrations from {start_hour} to {end_hour}"
                elif start_datetime and end_datetime:
                    # Range of datetimes
                    response_data['data'] = get_pollutant_data_for_range(start_datetime, end_datetime, step=1, number=number)
                    response_data['message'] = f"Pollutant concentrations from {start_datetime} to {end_datetime}"

            return JsonResponse(response_data)

        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'message': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=500)

    return JsonResponse({'success': False, 'message': 'Only POST requests are allowed'}, status=405)