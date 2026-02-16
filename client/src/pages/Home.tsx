import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneCall, Leaf, Sprout } from "lucide-react"; 
import { Button } from "@/components/ui/button";

const product1 = "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800";
const product2 = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800";
const product3 = "https://images.unsplash.com/photo-1517256011271-103ad7f3ffbd?auto=format&fit=crop&q=80&w=800";
const product4 = "https://images.unsplash.com/photo-1544667508-2783a04584bc?auto=format&fit=crop&q=80&w=800";

export default function Home() {
  const startRileyCall = () => {
    if (window && (window as any).vapiSDK) {
      const vapi = new (window as any).vapiSDK.default("c19b7909-74f0-459f-a23c-ff4cf3d9cbe6");
      vapi.start("517b20fd-d5b4-40b6-a9f8-57f6d1580f1c");
    } else {
      alert("Riley AI load ho rahi hai, please refresh karein!");
    }
  };

  const products = [
    { img: product1, title: "Rice Husk Plate", price: "₹199", desc: "Eco-friendly and natural." },
    { img: product2, title: "Storage Container", price: "₹249", desc: "Airtight and sustainable." },
    { img: product3, title: "Earth Coffee Cup", price: "₹149", desc: "Heat resistant material." },
    { img: product4, title: "Sustainable Tumbler", price: "₹299", desc: "Zero plastic lifestyle." }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-16">
        <section className="py-20 text-center px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-5xl font-black text-[#1a3c34] mb-4">From Parali to Pride.</h1>
            <p className="mb-8 text-slate-600">Prawali transforms farm waste into premium essentials.</p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => document.getElementById('product')?.scrollIntoView()} className="bg-[#065f46]">Shop Now</Button>
              <Button onClick={startRileyCall} variant="outline"><PhoneCall className="mr-2 h-5 w-5" /> Talk to AI</Button>
            </div>
          </motion.div>
        </section>

        <section id="product" className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-lg p-4 border hover:shadow-2xl transition-all">
              <img src={p.img} alt={p.title} className="rounded-2xl mb-4 h-48 w-full object-cover" />
              <h3 className="font-bold text-[#1a3c34]">{p.title}</h3>
              <p className="text-slate-500 text-xs mb-4">{p.desc}</p>
              <div className="flex justify-between items-center border-t pt-2">
                <span className="font-bold text-[#065f46]">{p.price}</span>
                <Button size="sm" className="bg-[#1a3c34]">Buy</Button>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
