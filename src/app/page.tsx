import WorkManagement from "@/Components/Work-Management";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import ExtensionBanner from "@/Components/ExtensionBanner";
import CustomizeNeeds from "@/Components/CustomizeNeeds";
import WorkEveryWhere from "@/Components/WorkEveryWhere";
import Sponsors from "@/Components/Sponsors";
import Footer from "@/Components/Footer";

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
