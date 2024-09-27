import IndiaAQIDisplay from "./IndiaAQIDisplay";
import MetroAQIWidgetContainer from "./MetroAQIWidgetContainer";

export default function CitiesAQIWidgetContainer() {
  return (
    <div className="flex flex-row h-full align-items items-center">
      <div className="first-half flex-shrink-0">
        <IndiaAQIDisplay />
      </div>
      <div className="second-half flex-grow ml-3">
        <MetroAQIWidgetContainer />
      </div>
    </div>
  );
}
