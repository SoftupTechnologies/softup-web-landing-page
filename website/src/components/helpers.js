import React from "react";
import { WideTabs } from "./WideTabs";
import { NumberedParagraph } from "./NumberedParagraph";
import { NormalParagraph } from "./NormalParagraph";
import { SlideLinks } from "./Accordion/SlideLinks";
import { PresentationTiles } from "./PresentationTiles";
import { HeaderImage } from "./PortfolioTools/HeaderImage";
import { QuickDescription } from "./PortfolioTools/QuickDescription";
import { NamedDivider } from "./PortfolioTools/NamedDivider";
import { QuickFacts } from "./PortfolioTools/QuickFacts";
import { ClientName } from "./PortfolioTools/ClientName";
import { CommonParagraph } from "./PortfolioTools/CommonParagraph";
import { ParagraphAndImage } from "./PortfolioTools/ParagraphAndImage";
import { Testimonial } from "./PortfolioTools/Testimonial";
import { Process } from "./Process";
import { CaseStudies } from "./CaseStudies";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { Imprint } from "./Imprint";
import { MarkdownDisplay } from "./MarkdownDisplay";
import { Button } from "./Button";
import { PresentationTilesMd } from "./PresentationTilesMd";
import { IconParagraphs } from "./IconParagraphs";
import { LogosSection } from "./LogosSection";
import { ColumnParagraphs } from "./ColumnParagraphs";

export const formatNumber = num => {
  const stringNum = parseInt(num, 10).toString();
  if (stringNum.length <= 2) {
    return `0${stringNum}`;
  }
  return stringNum;
};

const componentContainer = {
  horizontalTabs: WideTabs,
  numberedParagraph: NumberedParagraph,
  normalParagraph: NormalParagraph,
  slideLinks: SlideLinks,
  presentationTiles: PresentationTiles,
  presentationTilesMarkdown: PresentationTilesMd,
  headerImage: HeaderImage,
  quickDescription: QuickDescription,
  namedDivider: NamedDivider,
  quickFacts: QuickFacts,
  clientName: ClientName,
  commonParagraph: CommonParagraph,
  paragraphAndImage: ParagraphAndImage,
  testimonial: Testimonial,
  process: Process,
  caseStudies: CaseStudies,
  privacyPolicy: PrivacyPolicy,
  imprint: Imprint,
  markdownDisplay: MarkdownDisplay,
  button: Button,
  iconParagraphs: IconParagraphs,
  logosSection: LogosSection,
  columnParagraphs: ColumnParagraphs,
};

export const generateContent = pageContent => {
  const components = pageContent?.map((content, index) => {
    const DesiredComponent = componentContainer[content.component];
    return <DesiredComponent key={index} data={content.data} />;
  });
  return <React.Fragment>{components}</React.Fragment>;
};

export const breakLongWords = str => {
  if (str.includes("#insertnewline#")) {
    str = str.replace(/#insertnewline#/g, "<br/>");

    return <div dangerouslySetInnerHTML={{ __html: str }} />;
  }

  const words = str.split(/\s+/);
  const container = [];
  let line = "";

  words.forEach((word, index) => {
    if (line !== "") {
      line = line + "<br/>" + word;
    } else {
      line = word;
    }
    if (line.length > 8 || index === words.length - 1) {
      container.push(line);
      line = "";
    }
  });
  return <div dangerouslySetInnerHTML={{ __html: container.join(" ") }} />;
};

export const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
