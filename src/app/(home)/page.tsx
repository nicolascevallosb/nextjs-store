import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maxi Emporium ⚔",
  description: "Welcome to Maxi Emporium, an ecommerce from another century",
  keywords: ["ecommerce", "maxi", "emporium", "technology", "store"]
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
