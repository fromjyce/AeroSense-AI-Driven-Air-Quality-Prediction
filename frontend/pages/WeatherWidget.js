export default function WeatherWidget({ date, maxTemp, minTemp }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 w-30 h-40">
      <p className="text-3xl font-bold">{date}</p>
      <p className="text-xl">
        {maxTemp}°<sup>C</sup> / {minTemp}°<sup>C</sup>
      </p>
    </div>
  );
}
