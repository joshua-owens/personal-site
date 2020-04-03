import React from 'react';

import { Layout, SEO } from 'components';
import { Home } from 'containers';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Home />
  </Layout>
);

export default IndexPage;
