import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const ErrorMessage = ({ error }) => (
  <Fragment>
    {error.message && <div className="error">{"PLS LOGIN"}</div>}
  </Fragment>
);

export default connect(store => ({ error: store.error }))(ErrorMessage);
