import WeatherWidget from "./WeatherWidget";

export default function WidgetContainer() {
  return (
    <div className="flex flex-wrap justify-between items-start gap-4">
      {/* Example Weather Widgets */}
      <WeatherWidget date="12" maxTemp={25} minTemp={15} />
      <WeatherWidget date="13" maxTemp={27} minTemp={17} />
      <WeatherWidget date="14" maxTemp={30} minTemp={20} />
      <WeatherWidget date="15" maxTemp={28} minTemp={18} />
      <WeatherWidget date="16" maxTemp={26} minTemp={16} />
      <WeatherWidget date="17" maxTemp={29} minTemp={19} />
      <WeatherWidget date="18" maxTemp={29} minTemp={19} />
    </div>
  );
}

