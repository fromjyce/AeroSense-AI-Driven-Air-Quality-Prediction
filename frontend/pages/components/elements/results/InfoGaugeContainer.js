import GaugeContainer from "./GaugeContainer";
import InfoDisplay from "./InfoDisplay";

export default function InfoGaugeContainer({ 
  stationId, 
  city, 
  datetime, 
  date, 
  startDatetime, 
  endDatetime, 
  startDate, 
  endDate 
}) {
  const value = 150;
  const stationName = "";

  return (
    <div className="flex flex-col h-full gap-y-4">
      <div className="h-[30%] rounded-lg shadow-lg bg-white">
        <InfoDisplay 
          date={date} 
          datetime={datetime} 
          city={city} 
          stationName={stationName} 
          startDate={startDate} 
          endDate={endDate} 
          startDatetime={startDatetime} 
          endDatetime={endDatetime} 
        />
      </div>
      <div className="rounded-lg shadow-lg bg-white">
        <div className="h-[70%] gauge-main-container p-4">
          <GaugeContainer value={value} />
        </div>
      </div>
    </div>
  );
}
