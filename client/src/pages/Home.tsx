import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneCall, Leaf, Sprout } from "lucide-react"; 
import { Button } from "@/components/ui/button";

const product1 = "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <Header />
      <main className="flex-grow pt-20 text-center">
        <h1 className="text-5xl font-black text-[#1a3c34] mb-8">Prawali: Waste to Pride</h1>
        <div id="product" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-4 rounded-3xl shadow-lg border">
              <img src={product1} alt="Eco Plate" className="rounded-2xl h-48 w-full object-cover" />
              <h3 className="font-bold mt-4">Rice Husk Plate</h3>
              <div className="flex justify-between items-center mt-4 border-t pt-2">
                <span className="font-bold text-[#065f46]">₹199</span>
                <Button size="sm" className="bg-[#1a3c34]">Buy</Button>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
