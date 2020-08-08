import React from "react"
import "./imprint.scss"

export const Imprint = () => {
  return (
    <div className="displayWithGrid">
      <div className="imprint-wrapper">
        <h1 className="imprint-header" style={{ marginTop: 0 }}>
          Information in accordance with Section § 5 TMG:
        </h1>
        <p className="imprint-info">
          Softup Technologies GmbH <br />
          Buschingstraße 22 <br /> 81677 München
        </p>

        <h1 className="imprint-header">Represented by</h1>
        <p className="imprint-info">
          Kristi Kristo (Geschaftsfuhrer) <br />
          Munich District Court HRB 253849 <br /> UStId: DE328163137
        </p>

        <h1 className="imprint-header">Contact Information</h1>
        <p className="imprint-info">
          E-Mail: info@softup.co <br />
          Web: www.softup.co
        </p>

        <h1 className="imprint-header">Disclaimer</h1>

        <h1 className="imprint-header">Accountability for content</h1>
        <p className="imprint-info">
          The contents of our pages have been created with the utmost care.
          However, we cannot guarantee the contents’ accuracy, completeness or
          topicality. According to statutory provisions, we are furthermore
          responsible for our own content on these web pages. In this matter,
          please note that we are not obliged to monitor the transmitted or
          saved information of third parties, or investigate circumstances
          pointing to illegal activity. Our obligations to remove or block the
          use of information under generally applicable laws remain unaffected
          by this as per §§ 8 to 10 of the Telemedia Act (TMG).
        </p>

        <h1 className="imprint-header">Accountability for links</h1>
        <p className="imprint-info">
          Responsibility for the content of external links (to web pages of
          third parties) lies solely with the operators of the linked pages. No
          violations were evident to us at the time of linking. Should any legal
          infringement become known to us, we will remove the respective link
          immediately.
        </p>

        <h1 className="imprint-header">Copyright</h1>
        <p className="imprint-info">
          Our web pages and their contents are subject to German copyright law.
          Unless expressly permitted by law, every form of utilizing,
          reproducing or processing works subject to copyright protection on our
          web pages requires the prior consent of the respective owner of the
          rights. Individual reproductions of a work are only allowed for
          private use. The materials from these pages are copyrighted and any
          unauthorized use may violate copyright laws.
        </p>
      </div>
    </div>
  )
}
