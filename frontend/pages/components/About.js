export default function About() {
  return (
    <div id="about" className="about-section flex justify-between items-center gap-8 p-8">
      <div className="text-content flex-1">
        <h2 className="text-3xl font-bold">
          <span className="questrial">About</span>
          <span className="questrial title-card"> AeroSense.</span>
        </h2>
        <p className="text-lg josefin_sans leading-relaxed">
        
AeroSense is an innovative web platform developed as part of the BuzzOnHackathon by IIT Kanpur, powered by Intel using the Intel Tiber Cloud Developer Platform. This tool predicts and analyzes the Air Quality Index (AQI) across various cities and stations in India in real-time. Built with NextJS, Tailwind CSS, and Django, it incorporates advanced time series models, including LSTM networks, optimized with Intel AI Analytics Toolkit for enhanced performance. Key features include AQI prediction, real-time monitoring, forecasting, an interactive AQI simulator, and AI-driven insights, empowering users with actionable data for informed decisions and environmental awareness. Read <span><a href="/about" className="more-details-about-product font-bold">More.</a></span></p>
      </div>
      <div className="image-content flex flex-row gap-4 flex-1 items-end">
        <img
          src="/side-photo-1.png"
          alt="BuzzOn Earth"
          className="w-full max-w-[300px]"
        />
        <img
          src="/side-photo-2.png"
          alt="Intel"
          className="w-full max-w-[300px]"
        />
      </div>
    </div>
  );
}
