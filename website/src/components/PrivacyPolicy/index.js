import React from "react"
import PropTypes from "prop-types"
import "./privacyPolicy.scss"
import { Link } from "gatsby"

export const PrivacyPolicy = ({ data }) => {
  return (
    <div className="displayWithGrid">
      <div className="pp-wrapper">
        <p className="pp-info">
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit and interact with
          www.softup.co (the “Site”).
        </p>

        <h1 className="pp-header">Personal information we collect</h1>
        <p className="pp-info">
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information
          about how you interact with the Site. We refer to this
          automatically-collected information as “Device Information.”
        </p>

        <h1 className="pp-header">
          We collect Device Information using the following technologies:
        </h1>
        <ul>
          <li className="pp-info">
            “Cookies” are data files that are placed on your device or computer
            and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit&nbsp;
            <Link to={data.links.cookies} className="pp-link">
              {data.links.cookies}
            </Link>
          </li>
          <li className="pp-info">
            “Log files” track actions occurring on the Site, and collect data
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps
          </li>
          <li className="pp-info">
            “Web beacons,” “tags,” and “pixels” are electronic files used to
            record information about how you browse the Site.
          </li>
        </ul>
        <p className="pp-info">
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site (for example, by generating
          analytics about how our customers browse and interact with the Site,
          and to assess the success of our marketing and advertising campaigns).
        </p>

        <h1 className="pp-header">Sharing your personal information</h1>
        <p className="pp-info">
          We may share your Personal Information with third parties in the
          context of the uses described in the previous section. For example, we
          use Stripe to process Credit Card payments – you can read more about
          how they use your Personal Information here: &nbsp;
          <Link to={data.links.stripe} className="pp-link">
            {data.links.stripe}
          </Link>
          . We also use Google Analytics to help us understand how our customers
          use the Site – you can read more about how Google uses your Personal
          Information here:
          <br />
          <br />
          <Link to={data.links.googlePrivacy} className="pp-link">
            {data.links.googlePrivacy}
          </Link>
          . You can also opt-out of Google Analytics here:&nbsp;
          <Link to={data.links.googleAnalytics} className="pp-link">
            {data.links.googleAnalytics}
          </Link>
          .
          <br />
          <br />
          We may also share your Personal Information to comply with applicable
          laws and regulations, to respond to a subpoena, search warrant or
          other lawful request for information we receive, or to otherwise
          protect our rights.
          <br />
          <br />
          Finally, as described above, we use your Personal Information to
          provide you with targeted advertisements or marketing communications
          we believe may be of interest to you. For more information about how
          targeted advertising works, you can visit the Network Advertising
          Initiative’s (“NAI”) educational page at:
          <br />
          <br />
          <Link to={data.links.nai} className="pp-link">
            {data.links.nai}
          </Link>
          . To opt out of targeted advertising by, you can adjust your settings
          on each ad network using the links provided below for your
          convenience:
          <br />
          <br />
        </p>
        <ul>
          <li className="pp-info">
            FACEBOOK -&nbsp;
            <Link to={data.links.facebookAdd} className="pp-link">
              {data.links.facebookAdd}
            </Link>
          </li>
          <li className="pp-info">
            GOOGLE -&nbsp;
            <Link to={data.links.googleAdd} className="pp-link">
              {data.links.googleAdd}
            </Link>
          </li>
        </ul>
        <p className="pp-info">
          Additionally, you can opt out of some of these services by visiting
          the Digital Advertising Alliance’s opt-out portal at:&nbsp;
          <Link to={data.links.daa} className="pp-link">
            {data.links.daa}
          </Link>
          <br />
          <br />
          Contact options via the website, If you contact Softup Technologies
          via our website, the personal data you provide will be automatically
          saved. Such data transmitted on a voluntary basis are stored for the
          purpose of processing or contacting you. This personal data is not
          passed on to third parties.
        </p>

        <h1 className="pp-header">Your rights as an European resident</h1>
        <p className="pp-info">
          If you are a European resident, you have the right to access personal
          information we hold about you and to ask that your personal
          information be corrected, updated, or deleted. If you would like to
          exercise this right, please contact us through the contact information
          below. Additionally, if you are a European resident we note that we
          are processing your information in order to fulfill contracts we might
          have with you (for example if you create an a Account and/or make an
          order through the Site), or otherwise to pursue our legitimate
          business interests listed above. Additionally, please note that your
          information will be transferred outside of Europe, including to Canada
          and the United States.
        </p>

        <h1 className="pp-header">Data retention</h1>
        <p className="pp-info">
          When you place an order through the Site, we will maintain your Order
          Information for our records and auditing purposes unless and until you
          ask us to delete this information.
        </p>
      </div>
    </div>
  )
}

PrivacyPolicy.propTypes = {
  data: PropTypes.shape({
    links: PropTypes.object,
  }),
}
