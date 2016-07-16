import React, { Component, PropTypes } from 'react';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const mapStateToProps = ({ decks, addingDeck }) => ({
  decks,
  addingDeck,
});

const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(addDeck(name)),
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck()),
});

class Sidebar extends Component {
  constructor() {
    super();
    this.createDeck = this.createDeck.bind(this);
  }

  componentDidUpdate() {
    const el = this.refs.add;

    if (el) { el.focus(); }
  }

  createDeck(evt) {
    if (evt.which !== 13) { return; }

    const name = this.refs.add.value;
    this.props.addDeck(name);
    this.props.hideAddDeck();
  }

  render() {
    const { decks, addingDeck } = this.props;

    return (
      <div className="sidebar">
        <h2>All Decks</h2>
        <button onClick={() => { this.props.showAddDeck(); }}>Add Deck</button>
        <ul>
          {decks.map((deck, i) => (
            <li key={i}>
              <Link to={`/deck/${deck.id}`}>
                {deck.name}
              </Link>
            </li>
            )
          )}
        </ul>
        {addingDeck && <input ref="add" onKeyPress={this.createDeck} />}
      </div>
    );
  }
}

Sidebar.propTypes = {
  decks: PropTypes.array,
  addingDeck: PropTypes.bool,
  showAddDeck: PropTypes.func,
  hideAddDeck: PropTypes.func,
  addDeck: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
