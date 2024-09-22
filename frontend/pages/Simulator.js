export default function Simulator() {

    return (
      <>
        <h3 className="text-3xl font-bold mb-2 oswald_card_title">Air Pollution Simulator</h3>
        <div className="iframe-container">
        <iframe
          className="responsive-iframe"
          width="685px"
          height="310px"
          allowFullScreen={false}
          src="https://lab.concord.org/embeddable.html#interactives/air-pollution/air-pollution-master.json"
        ></iframe>
      </div>    
      </>
    );
  }
  