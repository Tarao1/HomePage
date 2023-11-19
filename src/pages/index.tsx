import Image from "next/image";
import { Inter } from "next/font/google";
import Content from "@/componets/content";
import ContentAboutFimit from "@/componets/content_about_fimit";
import ContentUsageFree from "@/componets/content_usage_free";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ContentAboutFimit />
      <ContentUsageFree />
    </main>
  );
}
