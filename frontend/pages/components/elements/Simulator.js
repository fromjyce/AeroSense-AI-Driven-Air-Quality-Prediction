export default function Simulator() {
    return (
      <>
        <h3 className="text-3xl font-bold mb-2 oswald_card_title">Air Pollution Simulator</h3>
        <div className="flex flex-row">
          <div className="paragraph-content w-1/2">
            <p className="text-lg josefin_sans">
            The Air Pollution Simulator allows users to explore the complex relationship between weather, geography, and air quality by adjusting various environmental factors. Users can modify conditions such as the number of cars and power plants, both with and without pollution control devices, to see their impact on the Air Quality Index (AQI). This interactive tool provides a visual representation of air quality changes, helping users understand the significance of human activity on air pollution levels.            </p>
          </div>
          <div className="iframe-container w-1/2">
            <iframe
              className="responsive-iframe"
              width="100%"
              height="300px"
              allowFullScreen={false}
              src={process.env.NEXT_PUBLIC_AIR_POLLUTION_SIMULATOR_URL}
            ></iframe>
          </div>
        </div>
      </>
    );
  }
  