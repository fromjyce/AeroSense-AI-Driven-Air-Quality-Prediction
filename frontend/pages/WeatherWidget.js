export default function WeatherWidget({ date, maxTemp, minTemp }) {
  const weatherDate = new Date(date);
  const options = { weekday: 'short' };
  const day = weatherDate.toLocaleDateString('en-US', options);
  const dateNum = weatherDate.getDate();

  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg w-32 h-40"> 
      <p className="text-sm">{day}</p>
      <p className="text-3xl font-bold">{dateNum}</p>
      <p className="text-sm">
        {maxTemp}°<sup>C</sup> / {minTemp}°<sup>C</sup>
      </p>
    </div>
  );
}
