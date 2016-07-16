import React, { PropTypes } from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = (props, { params: { deckId } }) => ({
  deckId,
});

const App = (props) => (
  <div className="app">
    <Sidebar />
    <h1>Deck {props.deckId}</h1>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
  deckId: PropTypes.string,
};

export default connect(mapStateToProps)(App);
