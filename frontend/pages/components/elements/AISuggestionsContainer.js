import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import Typewriter from 'typewriter-effect';

export default function AISuggestionsContainer() {
  const suggestion = `Chennai has recorded an Air Quality Index (AQI) of 50.0, indicating "Good" air quality with little risk to residents. As a Pollution Control Manager, it is essential to maintain this status by promoting public transportation and enhancing green spaces. Encouraging electric vehicle usage and improving dust control measures at construction sites can further reduce pollution. Public awareness campaigns about eco-friendly practices will engage citizens in maintaining air quality. Lastly, establishing more air quality monitoring stations will help identify pollution sources in real-time.`;

  return (
    <div className="rounded-lg shadow-lg bg-white ai-suggs p-4">
      <div className='flex flex-row gap-2'>
      <TipsAndUpdatesTwoToneIcon sx={{ color: '#638763'}}/>
      <h2 className="text-xl font-semibold questrial title-sugg">Breathe Smarter with AI</h2>
      </div>
      <div className="text-lg questrial font-bold">
      <Typewriter
        onInit={(typewriter) => {
        typewriter
        .typeString(suggestion)
        .pauseFor(5000)
        .start();
          }}
          options={{
            delay: 80,
          }}
          />
      </div>
      <div><h2 className='text-right power-tag text-lg josefin_sans title-sugg'>Powered by OpenVINO™</h2></div>
    </div>
  );
}