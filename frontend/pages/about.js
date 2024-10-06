import Head from "next/head";
import UpdateFooter from "./UpdateFooter";

export default function About() {
  return (
    <>
      <Head>
        <title>Aerosense - About</title>
        <meta name="description" content="About AeroSense" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl font-bold mb-9 questrial">About Us</h1>
        <img 
          src="/misc/construct.png"
          alt="Construction Illustration"
          className="mb-2 w-24 h-24"
        />
        <p className="text-2xl mb-8 text-center poppins font-semi-bold">This page is still under construction.</p>
        <p className="text-2xl mb-8 text-center poppins font-bold">But you can still look at the tech stack!</p>
        
        <div className="grid grid-cols-3 gap-4">
          <img 
            src="/misc/techstack/tiber.png"
            alt="Tiber"
            className="w-full h-36 object-contain rounded-lg shadow-lg bg-white"
          />
          <img 
            src="/misc/techstack/openvino.png"
            alt="OpenVino"
            className="w-full h-36 object-contain rounded-lg shadow-lg bg-white"
          />
          <img 
            src="/misc/techstack/tensorflow.png"
            alt="Tensorflow"
            className="w-full h-36 object-contain rounded-lg shadow-lg bg-white"
          />
          <img 
            src="/misc/techstack/nextjs.jpg"
            alt="Next JS"
            className="w-full h-36 object-contain rounded-lg shadow-lg bg-white"
          />
          <img 
            src="/misc/techstack/django.png"
            alt="Django"
            className="w-full h-36 object-contain rounded-lg shadow-lg bg-white p-4"
          />
          <img 
            src="/misc/techstack/twcss.png"
            alt="TailwindCSS"
            className="w-full h-36 object-contain rounded-lg shadow-lg bg-white"
          />
        </div>
      </div>
      <UpdateFooter />
    </>
  );
}
