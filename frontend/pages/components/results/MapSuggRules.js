import AISuggestionsContainer from "../elements/results/AISuggestionsContainer";
import MapContainer from "../elements/results/MapContainer";

const markers = [
  { lat: 13.0843, lng: 80.2705, title: 'Chennai' },
];

export default function MapSuggRules() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 h-full">
      <div className="w-full md:w-[25%] flex flex-col">
      <MapContainer markers={markers} />
      </div>
      <div className="w-full md:w-[50%] flex flex-col">
        <AISuggestionsContainer />
      </div>
      <div className="w-full md:w-[25%] flex flex-col justify-center">
        <img
          src="/misc/cpcb_rules.png"
          alt="CBCP Rules"
          className="rounded-lg rules-image shadow-lg"
        />
      </div>
    </div>
  );
}
