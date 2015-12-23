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

export function changeOpponentGems(value) {
  return {
    type: types.CHANGE_GEMS,
    actor: 'opponent',
    value,
  };
}

export function changePlayerGems(value) {
  return {
    type: types.CHANGE_GEMS,
    actor: 'player',
    value,
  };
}

export function changeOpponentRecruits(value) {
  return {
    type: types.CHANGE_RECRUITS,
    actor: 'opponent',
    value,
  };
}

export function changePlayerRecruits(value) {
  return {
    type: types.CHANGE_RECRUITS,
    actor: 'player',
    value,
  };
}

export function changeOpponentTower(value) {
  return {
    type: types.CHANGE_TOWER,
    actor: 'opponent',
    value,
  };
}

export function changePlayerTower(value) {
  return {
    type: types.CHANGE_TOWER,
    actor: 'player',
    value,
  };
}

export function changeOpponentWall(value) {
  return {
    type: types.CHANGE_WALL,
    actor: 'opponent',
    value,
  };
}

export function changePlayerWall(value) {
  return {
    type: types.CHANGE_WALL,
    actor: 'player',
    value,
  };
}
