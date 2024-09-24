import PredictCard from "./elements/PredictCard";
import WeatherForecast from "./elements/WeatherForecast";

export default function Dashboard() {

  return (
    <div className="dashboard-section flex justify-between gap-8 p-8">
      <div id="predict" className="first-card w-[32%] p-4 shadow-lg flex flex-col items-start">
        <PredictCard />
      </div>

      <div className="second-card w-[68%] p-4 shadow-lg flex flex-col items-start justify-center">
       <WeatherForecast/>
      </div>
    </div>
  );
}
