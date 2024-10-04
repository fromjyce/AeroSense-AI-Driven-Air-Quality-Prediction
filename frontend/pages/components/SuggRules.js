import AISuggestionsContainer from "./elements/AISuggestionsContainer";

export default function SuggRules() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 h-full">
      <div className="w-full md:w-[70%] flex flex-col">
        <AISuggestionsContainer />
      </div>
      <div className="w-full md:w-[30%] flex flex-col justify-center">
        <img
          src="/misc/cpcb_rules.png"
          alt="CBCP Rules"
          className="rounded-lg rules-image shadow-lg"
        />
      </div>
    </div>
  );
}
