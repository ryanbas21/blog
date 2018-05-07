import React from 'react';
import withRedux from 'next-redux-wrapper';
import { compose, curry } from 'ramda';
import Head from './head';
import store from 'store';

export default compose(withRedux(store), Head);
export const reduxWrapper = withRedux(store);
