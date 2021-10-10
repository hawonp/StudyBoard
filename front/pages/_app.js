import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';
// css 디자인부분
import './main.css';
import './leadership.css';

const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Study Board | Find your answer</title>
    </Head>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
