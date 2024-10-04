import Link from "next/link";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import SuggRules from "./components/SuggRules";

export default function Results() {
  return (
    <div className="results-section h-screen flex flex-col px-4 sm:px-6 md:px-8">
      <div className="flex justify-center items-center h-16 sm:h-20 mb-4">
        <h1 className="results-title text-center text-2xl sm:text-3xl md:text-4xl font-bold questrial">
          Stay Ahead: AQI Predictions & Strategies
        </h1>
      </div>
      <div className="top-section h-[50%] sm:h-[55%] md:h-[60%] bg-orange-500 mb-4 sm:mb-6">
      </div>
      <div className="bottom-section h-[40%] sm:h-[35%] md:h-[40%] mb-4 sm:mb-6">
        <SuggRules />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link href="/#predict" passHref>
            <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mr-2 sm:mr-4 back-button">
              <ArrowCircleLeftOutlinedIcon className="w-6 sm:w-8 h-6 sm:h-8" />
            </button>
          </Link>
          <span className="text-lg sm:text-xl questrial predict-text">Try Predicting Again?</span>
        </div>
        <span className="text-lg sm:text-xl questrial small-tag-line">Predicting a Cleaner Tomorrow.</span>
      </div>
    </div>
  );
}
