import About from "@/pages/components/main/About";
import Dashboard from "@/pages/components/main/Dashboard";
import PastAQI from "@/pages/components/main/PastAQI";
import Footer from "@/pages/components/main/Footer";

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
