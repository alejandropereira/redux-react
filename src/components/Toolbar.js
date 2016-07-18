import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { showAddDeck } from '../actions';
import { Link } from 'react-router';

const mapDispatchToProps = dispatch => ({
  addDeck: () => dispatch(showAddDeck()),
});


const Toolbar = ({ deckId, addDeck }) => {
  const deckTools = deckId ? (
    <div>
      <Link className="btn" to={`/deck/${deckId}/new`}>New Card</Link>
      <Link className="btn" to={`/deck/${deckId}/study`}>Study</Link>
    </div>) : null;

  return (<div className="toolbar">
    <div>
      <button onClick={() => { addDeck(); }}>Add Deck</button>
    </div>
    {deckTools}
  </div>);
};

Toolbar.propTypes = {
  addDeck: PropTypes.func,
  deckId: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(Toolbar);
