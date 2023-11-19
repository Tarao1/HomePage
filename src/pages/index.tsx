import Image from "next/image";
import { Inter } from "next/font/google";
import ContentHomeTop from "@/componets/content_home_top";
import ContentAboutFimit from "@/componets/content_about_fimit";
import ContentUsageFree from "@/componets/content_usage_free";
import ContentUsageRules from "@/componets/content_usage_rules";
import Container from "@/componets/container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container large={true}>
      <ContentHomeTop />
      <ContentAboutFimit />
      <ContentUsageFree />
      <ContentUsageRules />
    </Container>
  );
}
