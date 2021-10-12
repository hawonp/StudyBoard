import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';
// css 디자인부분
import './main.css';
import './leadership.css';
import './about.css';
import '../js/main';

const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>StudyBoard</title>
    </Head>
    <Component />

  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
