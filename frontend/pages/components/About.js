export default function About() {
  return (
    <div id="about" className="about-section flex justify-between items-center gap-8 p-8">
      <div className="text-content flex-1">
        <h2 className="text-3xl font-bold">
          <span className="questrial">About</span>
          <span className="questrial title-card"> AeroSense.</span>
        </h2>
        <p className="josefin_sans leading-relaxed">
          <span className="aerospace-title-change">AeroSpace</span>  is an innovative web-based solution developed as part of the BuzzOnEarth hackathon by IIT Kanpur, powered by Intel and utilizing the Intel Tiber Cloud Developer Platform. Designed to empower users with real-time predictions and analyses of air quality across various cities and stations in India, our platform leverages advanced machine learning models to provide accurate AQI forecasts. This enables individuals and policymakers to make informed decisions for healthier living. With features like real-time monitoring, dynamic simulations, integrated weather data, and AI-driven suggestions, AeroSpace transforms complex air quality metrics into actionable insights, ensuring a cleaner, safer environment for all. Read <span><a href="/about" className="more-details-about-product font-bold">More.</a></span>
        </p>
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
