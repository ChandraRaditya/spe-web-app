import Image from "next/image";
import TopSection from "./TopSection";
import ShopSection from "./ShopSection";

export default function Home() {
  return (
    <main>
      <TopSection />
      <div className="p-[100px] bg-[#EEEEEE]">
        <h2 className="text-[40px] font-bold text-center mb-[40px]">SPE Frontend Shop</h2>
        <ShopSection />
      </div>
    </main>
  );
}
