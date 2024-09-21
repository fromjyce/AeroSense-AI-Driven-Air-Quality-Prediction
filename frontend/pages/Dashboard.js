export default function Dashboard() {
    return (
      <div className="dashboard-section flex justify-between gap-8 p-8">
        <div className="first-card w-[30%] bg-white p-4 shadow-lg flex flex-col items-start">
          <h3 className="text-xl font-bold text-left oswald">Predict AQI</h3>
          <label htmlFor="predict-option" className="text-lg mt-2 text-left josefin_sans">Select an option to predict air quality.</label>
          <select id="predict-option" className="mt-2 p-2 border rounded josefin_sans">
            <option value="city">Predict by City</option>
            <option value="station">Predict by Station</option>
          </select>
        </div>
  
        <div className="second-card w-[70%] bg-white p-4 shadow-lg flex flex-col items-start justify-center">
          <h3 className="text-xl font-bold text-left oswald">Current Weather Status</h3>
          <p className="text-lg mt-2 text-left josefin_sans">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    );
  }
  