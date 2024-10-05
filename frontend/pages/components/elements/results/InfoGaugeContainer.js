import GaugeContainer from "./GaugeContainer";
import InfoDisplay from "./InfoDisplay";

export default function InfoGaugeContainer() {
  const value = 150;
  const date ="";
  const datetime = "";
  const city = "";
  const stationName = "Tirupati - APPCB, Andhra Pradesh";
  const startDate = "";
  const endDate = "";
  const startDatetime = "2024-10-10T18:00:00";
  const endDatetime = "2024-10-10T18:00:00";

  return (
    <div className="flex flex-col h-full gap-y-4">
      <div className="rounded-lg shadow-lg bg-white">
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
        <div className="gauge-main-container p-4">
          <GaugeContainer value={value} />
        </div>
      </div>
    </div>
  );
}
