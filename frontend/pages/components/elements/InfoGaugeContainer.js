import GaugeContainer from "./GaugeContainer";

export default function InfoGaugeContainer() {
  const value = 150;
    return (
      <div className="flex flex-col h-full gap-y-3">
        <div className="bg-orange-500">
        You can achieve the layout with two vertically stacked divs by using Tailwind's flex and height utilities. Here's how you can structure it with a gap between the top and bottom sections
        </div>
        <div className="rounded-lg shadow-lg bg-white">
            <div className="gauge-main-container p-4">
          <GaugeContainer value={value}/>
          </div>
        </div>
      </div>
    );
  }
  