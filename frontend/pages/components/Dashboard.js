import PredictCard from "./elements/PredictCard";
import CitiesAQIWidgetContainer from "./elements/CitiesAQIWidgetContainer";

export default function Dashboard() {

  return (
    <div className="dashboard-section flex justify-between gap-8 p-8">
      <div id="predict" className="first-card w-[32%] p-4 shadow-lg flex flex-col items-start">
        <PredictCard />
      </div>

      <div className="second-card w-[68%] p-4 shadow-lg flex flex-col items-start justify-center">
      <h3 className="text-3xl font-bold mb-4 oswald_card_title">Metro Cities - Air Quality Index</h3>
       <CitiesAQIWidgetContainer />
      </div>
    </div>
  );
}
