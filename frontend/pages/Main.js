import About from "@/pages/components/main/About";
import Dashboard from "@/pages/components/Dashboard";
import PastAQI from "@/pages/components/PastAQI";
import Footer from "@/pages/components/Footer";

export default function Main() {
  return (
    <div>
      <About />
      <Dashboard />
      <PastAQI />
      <Footer />
    </div>
  );
}
