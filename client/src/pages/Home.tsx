import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneCall } from "lucide-react"; 
import { Button } from "@/components/ui/button";

const product1 = "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800";

export default function Home() {
  const products = [{ img: product1, title: "Rice Husk Plate", price: "₹199", desc: "100% Natural essentials." }];
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-16 text-center">
        <h1 className="text-5xl font-black text-[#1a3c34] my-8">From Parali to Pride.</h1>
        <div className="flex justify-center gap-4 mb-10">
          <Button onClick={() => document.getElementById('product')?.scrollIntoView()} className="bg-[#065f46]">Shop Now</Button>
          <Button variant="outline"><PhoneCall className="mr-2 h-5 w-5" /> Talk to AI</Button>
        </div>
        <div id="product" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-lg p-4 border">
              <img src={p.img} alt={p.title} className="rounded-2xl mb-4 h-48 w-full object-cover" />
              <h3 className="font-bold text-[#1a3c34]">{p.title}</h3>
              <div className="flex justify-between items-center mt-4 pt-2 border-t">
                <span className="font-bold text-[#065f46]">{p.price}</span>
                <Button size="sm" className="bg-[#1a3c34]">Buy</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
