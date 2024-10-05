import InfoGaugeContainer from "../elements/results/InfoGaugeContainer";
import BarPieChartContainer from "../elements/results/BarPieChartContainer";

export default function ResultCharts() {
    return (
      <div className="flex h-full gap-x-4">
        <div className="w-[40%]">
          <InfoGaugeContainer />
        </div>
        <div className="w-[60%] rounded-lg shadow-lg bg-white p-4">
          <BarPieChartContainer />
        </div>
      </div>
    );
  }
  