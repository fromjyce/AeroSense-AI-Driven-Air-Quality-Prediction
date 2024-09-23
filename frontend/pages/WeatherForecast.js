import CurrentWeather from "./CurrentWeather";
import WidgetContainer from "./WidgetContainer";


export default function WeatherForecast() {

  return (
    <>
      <h3 className="text-3xl font-bold text-left oswald_card_title">Weather Forecast</h3>
      <div className="flex flex-col h-full">
        <div className="flex justify-between p-4 border-b h-[35%]">
          <CurrentWeather />
        </div>
        <div className="grid grid-cols gap-4 p-4 items-center flex-grow">
          <WidgetContainer />
        </div>
      </div>
    </>
  );
}
