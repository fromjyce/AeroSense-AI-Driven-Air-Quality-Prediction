import BarChartContainer from "../../widgets/BarChartContainer";
import PieChartContainer from "../../widgets/PieChartContainer";

/*'PM2.5','PM10', 'NO', 'NO2', 'NOx', 'CO', 'SO2', 'O3', 'Benzene'*/

export default function BarPieChartContainer() {
  return (
    <div>
      <h2 className="text-2xl font-semibold oswald gauge-project-text mb-8">
        Air Quality Pollutant Analysis
      </h2>
      <div className="flex">
        <div className="w-2/3">
          <PieChartContainer />
        </div>
        <div className="w-1/3 pollutant-paragraph">
          <p className="poppins">
          Monitoring key air pollutants like PM2.5, PM10, NO, NO2, NOx, CO, SO2, O3, and Benzene is essential for assessing air quality and its health impacts. Understanding these concentrations allows us to make informed decisions and promote cleaner air for everyone. Stay aware of these levels to mitigate their effects and ensure a healthier environment.          </p>
        </div>
      </div>
    </div>
  );
}
  