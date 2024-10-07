import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import Typewriter from 'typewriter-effect';

export default function AISuggestionsContainer({message}) {
  const suggestion = message;

  return (
    <div className="rounded-lg shadow-lg bg-white ai-suggs p-4">
      <div className='flex flex-row gap-2'>
        <TipsAndUpdatesTwoToneIcon sx={{ color: '#638763'}} />
        <h2 className="text-xl font-black questrial title-sugg">Breathe Smarter with AI</h2>
      </div>
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="w-2/3">
          <div className="text-lg questrial font-semibold">
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
        </div>

        
        <div className="w-1/3 flex justify-end">
          <img
            src="/misc/warning.jpeg"
            alt="Air Quality Monitoring"
            className="rounded-lg shadow-lg"
            style={{ maxHeight: '150px', maxWidth: '100%' }}
          />
        </div>
      </div>
      <div><h2 className='text-right power-tag text-lg josefin_sans title-sugg'>Powered by OpenVINO™</h2></div>
    </div>
  );
}