import Simulator from "./Simulator";

export default function Footer() {
  return (
    <div className="footer-section flex justify-between gap-8 p-8">
      <div id="simulate" className="first-card-footer w-[70%] p-4 shadow-lg flex flex-col items-start">
      <Simulator />
      </div>

      <div className="second-card-footer w-[30%] p-4 shadow-lg flex flex-col items-start justify-center">
      <h3 className="text-3xl font-bold mb-4 oswald_card_title">Past AQI Data</h3>
        <p className="text-lg mt-2 text-left josefin_sans">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
