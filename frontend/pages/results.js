import Link from "next/link";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

export default function Results() {
  return (
    <div className="results-section h-screen flex flex-col px-8">
      <div className="flex justify-center items-center h-20 mb-4">
        <h1 className="results-title text-center text-4xl font-bold questrial">
          Stay Ahead: AQI Predictions & Strategies
        </h1>
      </div>
      <div className="top-section h-[55%] bg-orange-500 p-4 mb-4">
        {/* Content for the top section */}
      </div>
      <div className="bottom-section h-[45%] bg-yellow-500 p-4 mb-4">
        {/* Content for the bottom section */}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Link href="/#predict" passHref>
            <button className="w-12 h-12 rounded-full flex items-center justify-center mr-4 back-button">
              <ArrowCircleLeftOutlinedIcon  className="w-8 h-8"/>
            </button>
          </Link>
          <span className="text-xl questrial predict-text">Try Predicting Again?</span>
        </div>
        <span className="text-xl questrial small-tag-line">Predicting a Cleaner Tomorrow.</span>
      </div>
    </div>
  );
}
