import WorkManagement from "@/components/Work-Management";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ExtensionBanner from "../components/ExtensionBanner";
import CustomizeNeeds from "../components/CustomizeNeeds";
import WorkEveryWhere from "../components/WorkEveryWhere";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <WorkManagement />
      <ExtensionBanner />
      <CustomizeNeeds />
      <WorkEveryWhere />
      <Sponsors />
      <Footer />
    </div>
  );
}
