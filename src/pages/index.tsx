import { Inter } from "next/font/google";
import ContentCampaign from "@/componets/content_campaign";
import ContentHomeTop from "@/componets/content_home_top";
import ContentAboutFimit from "@/componets/content_about_fimit";
import ContentUsageFree from "@/componets/content_usage_free";
import ContentUsageRules from "@/componets/content_usage_rules";
import ContentQuestionAnswer from "@/componets/content_question_answer";
import ContentSnsNews from "@/componets/content_sns_news";
import ContentStoreSummary from "@/componets/content_store_summary";
import Container from "@/componets/container";
import BookMenu from "@/componets/book-menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container large={true}>
      <BookMenu />
      <ContentHomeTop />
      <ContentCampaign />
      <ContentAboutFimit />
      <ContentUsageFree />
      <ContentUsageRules />
      <ContentQuestionAnswer />
      <ContentStoreSummary />
      <ContentSnsNews />
    </Container>
  );
}
