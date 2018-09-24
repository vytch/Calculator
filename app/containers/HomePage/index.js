/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import DigiPad from 'components/DigiPad';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */

  render() {


    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Calculator"
          />
        </Helmet>
        <div>
          <div>
            <H2>
              Test
            </H2>
            <DigiPad />
          </div>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
};



const mapStateToProps = createStructuredSelector({
});


export default HomePage;
