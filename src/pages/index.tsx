import Image from "next/image";
import { Inter } from "next/font/google";
import Content from "@/componets/content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Content title="Home" subtitle="homedesu" />
    </main>
  );
}
