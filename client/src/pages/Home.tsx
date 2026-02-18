import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneCall, Leaf, Sprout } from "lucide-react"; 
import { Button } from "@/components/ui/button";

const product1 = "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800";

export default function Home() {
  const startRileyCall = () => {
    if (window && (window as any).vapiSDK) {
      const vapi = new (window as any).vapiSDK.default("c19b7909-74f0-459f-a23c-ff4cf3d9cbe6");
      vapi.start("517b20fd-d5b4-40b6-a9f8-57f6d1580f1c");
    } else { alert("Riley AI load ho rahi hai!"); }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-20 text-center">
        <h1 className="text-5xl font-black text-[#1a3c34] mb-4">From Parali to Pride.</h1>
        <p className="text-[#eab308] font-bold mb-12">Powered by Startly Innovations™</p>
        
        <div className="flex justify-center gap-4 mb-16">
          <Button onClick={() => document.getElementById('product')?.scrollIntoView()} className="bg-[#065f46] rounded-full px-8 h-12">Shop Now</Button>
          <Button onClick={startRileyCall} variant="outline" className="rounded-full px-8 h-12 border-[#065f46] text-[#065f46]"><PhoneCall className="mr-2 h-5 w-5" /> Talk to AI</Button>
        </div>

        <div id="product" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
            <div className="bg-white rounded-3xl shadow-lg p-4 border">
              <img src={product1} alt="Eco Plate" className="rounded-2xl mb-4 h-48 w-full object-cover" />
              <h3 className="font-bold text-[#1a3c34]">Rice Husk Dinner Plate</h3>
              <div className="flex justify-between items-center mt-4 pt-2 border-t">
                <span className="font-bold text-[#065f46]">₹199</span>
                <Button size="sm" className="bg-[#1a3c34] rounded-full px-6">Buy</Button>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
