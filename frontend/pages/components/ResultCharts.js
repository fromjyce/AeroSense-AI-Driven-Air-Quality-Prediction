import InfoGaugeContainer from "./elements/InfoGaugeContainer";
import BarPieChartContainer from "./elements/results/BarPieChartContainer";

export default function ResultCharts() {
    return (
      <div className="flex h-full gap-x-4">
        <div className="w-[40%] h-full">
          <InfoGaugeContainer />
        </div>
        <div className="w-[60%] bg-orange-500 h-full">
          <BarPieChartContainer />
        </div>
      </div>
    );
  }
  