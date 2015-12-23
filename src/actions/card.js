import * as types from '../constants/ActionTypes';

export function changeOpponentBricks(value) {
  return {
    type: types.CHANGE_BRICKS,
    actor: 'opponent',
    value,
  };
}

export function changePlayerBricks(value) {
  return {
    type: types.CHANGE_BRICKS,
    actor: 'player',
    value,
  };
}
