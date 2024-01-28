import { Inter } from "next/font/google";
import ContentHomeTop from "@/componets/content_home_top";
import ContentAboutFimit from "@/componets/content_about_fimit";
import ContentUsageFree from "@/componets/content_usage_free";
import ContentUsageRules from "@/componets/content_usage_rules";
import ContentQuestionAnswer from "@/componets/content_question_answer";
import ContentSnsNews from "@/componets/content_sns_news";
import ContentStoreSummary from "@/componets/content_store_summary";
import Container from "@/componets/container";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container large={true}>
      <ContentHomeTop />
      <ContentAboutFimit />
      <ContentUsageFree />
      <ContentUsageRules />
      <ContentQuestionAnswer />
      <ContentStoreSummary />
      <ContentSnsNews />
    </Container>
  );
}
