import * as types from '../constants/ActionTypes';

export function setupGame(dispatch) {
  dispatch(shuffleOpponentDeck());
  dispatch(shufflePlayerDeck());
  dispatch(dealCardsToOpponent());
  dispatch(dealCardsToPlayer());
}

export function shuffleOpponentDeck() {
  return {
    type: types.SHUFFLE_DECK,
    actor: 'opponent',
  };
}

export function shufflePlayerDeck() {
  return {
    type: types.SHUFFLE_DECK,
    actor: 'player',
  };
}

export function dealCardsToOpponent() {
  return {
    type: types.DEAL_CARDS,
    actor: 'opponent',
  };
}

export function dealCardsToPlayer() {
  return {
    type: types.DEAL_CARDS,
    actor: 'player',
  };
}

export function beginTurn() {
  return {
    type: types.BEGIN_TURN,
  };
}

export function endTurn() {
  return {
    type: types.END_TURN,
  };
}

export function discardOpponentCard(index) {
  return {
    type: types.DISCARD_CARD,
    actor: 'opponent',
    index,
  };
}

export function discardPlayerCard(index) {
  return {
    type: types.DISCARD_CARD,
    actor: 'player',
    index,
  };
}

export function drawOpponentCard(index) {
  return {
    type: types.DRAW_CARD,
    actor: 'opponent',
    index,
  };
}

export function drawPlayerCard(index) {
  return {
    type: types.DRAW_CARD,
    actor: 'player',
    index,
  };
}
