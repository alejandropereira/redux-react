import React, { PropTypes } from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import { connect } from 'react-redux';

const mapStateToProps = (props, { params: { deckId } }) => ({
  deckId,
});

const App = ({ deckId, children }) => (
  <div className="app">
    <Toolbar deckId={deckId} />
    <Sidebar />
    <h1>Deck {deckId}</h1>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
  deckId: PropTypes.string,
};

export default connect(mapStateToProps)(App);
