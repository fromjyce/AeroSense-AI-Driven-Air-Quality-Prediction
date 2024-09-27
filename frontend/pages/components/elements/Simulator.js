export default function Simulator() {
    return (
      <>
        <h3 className="text-3xl font-bold mb-2 oswald_card_title">Air Pollution Simulator</h3>
        <div className="flex flex-row">
          <div className="paragraph-content w-1/2">
            <p className="text-lg josefin_sans">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
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
  