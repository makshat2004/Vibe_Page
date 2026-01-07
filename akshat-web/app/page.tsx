import ControllerScroll from "@/components/ControllerScroll";
import Navbar from "@/components/Navbar";
import ProductSections from "@/components/ProductSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white">
      <Navbar />
      <ControllerScroll />
      <ProductSections />
    </main>
  );
}
