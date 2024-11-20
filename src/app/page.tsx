import WorkManagement from "@/Components/Work-Management";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <WorkManagement />
    </div>
  );
}
