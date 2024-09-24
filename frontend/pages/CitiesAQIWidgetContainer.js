import IndiaAQIDisplay from "./IndiaAQIDisplay";
import MetroAQIWidgetContainer from "./MetroAQIWidgetContainer";

export default function CitiesAQIWidgetContainer() {
  return (
    <div className="flex flex-col h-full">
      <div className="first-half flex-grow-0">
        <h3 className="text-3xl font-bold mb-4 oswald_card_title">Metro Cities - Air Quality Index</h3>
        <IndiaAQIDisplay />
      </div>
      <div className="second-half flex-grow">
        <MetroAQIWidgetContainer />
      </div>
    </div>
  );
}