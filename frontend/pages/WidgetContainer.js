import WeatherWidget from "./WeatherWidget";

export default function WidgetContainer() {
  return (
    <div className="flex flex-wrap justify-between items-start gap-1">
      <WeatherWidget date="2024-09-12" maxTemp={25} minTemp={15} />
      <WeatherWidget date="2024-09-13" maxTemp={27} minTemp={17} />
      <WeatherWidget date="2024-09-14" maxTemp={30} minTemp={20} />
      <WeatherWidget date="2024-09-15" maxTemp={28} minTemp={18} />
      <WeatherWidget date="2024-09-16" maxTemp={26} minTemp={16} />
      <WeatherWidget date="2024-09-17" maxTemp={29} minTemp={19} />
      <WeatherWidget date="2024-09-17" maxTemp={29} minTemp={19} />
    </div>
  );
}
