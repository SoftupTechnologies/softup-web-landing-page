import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Icon from '../images/softup-logo.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <div className={"landing"}>
      <div className={"icon-div"}>
        <Icon className={"icon-style"}/>
      </div>
    <div className={"slogan"}>
      <div className={"slogan-title"}>
        EMPOWERING IDEAS
      </div>
      <div className={"slogan-desc"}>
        You have the vision for a stunning digital experience. We’re the software design and engineering team that can bring it to life.
      </div>
    </div>
    </div>
  </Layout>
);

export default IndexPage;
