import About from "@/pages/components/main/About";
import Head from "next/head";
import Dashboard from "@/pages/components/main/Dashboard";
import PastAQI from "@/pages/components/main/PastAQI";
import Footer from "@/pages/components/main/Footer";

export default function Main() {
  return (
    <>
    <Head>
        <title>Aerosense</title>
        <meta name="description" content="An AI-driven air quality monitoring and prediction system." />
      </Head>
    <div>
      <About />
      <Dashboard />
      <PastAQI />
      <Footer />
    </div>
    </>
  );
}
