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

export function changeOpponentBrickProduction(value) {
  return {
    type: types.CHANGE_BRICK_PRODUCTION,
    actor: 'opponent',
    value,
  };
}

export function changePlayerBrickProduction(value) {
  return {
    type: types.CHANGE_BRICK_PRODUCTION,
    actor: 'player',
    value,
  };
}

export function changeOpponentGemProduction(value) {
  return {
    type: types.CHANGE_GEM_PRODUCTION,
    actor: 'opponent',
    value,
  };
}

export function changePlayerGemProduction(value) {
  return {
    type: types.CHANGE_GEM_PRODUCTION,
    actor: 'player',
    value,
  };
}

export function changeOpponentRecruitProduction(value) {
  return {
    type: types.CHANGE_RECRUIT_PRODUCTION,
    actor: 'opponent',
    value,
  };
}

export function changePlayerRecruitProduction(value) {
  return {
    type: types.CHANGE_RECRUIT_PRODUCTION,
    actor: 'player',
    value,
  };
}

export function changeOpponentBrickProductionIfLess(valueTrue, valueFalse) {
  return {
    type: types.CHANGE_BRICK_PRODUCTION_IF_LESS,
    actor: 'opponent',
    valueTrue,
    valueFalse,
  };
}

export function changePlayerBrickProductionIfLess(valueTrue, valueFalse) {
  return {
    type: types.CHANGE_BRICK_PRODUCTION_IF_LESS,
    actor: 'player',
    valueTrue,
    valueFalse,
  };
}

export function stealOpponentBrickProductionIfLess(valueTrue, valueFalse) {
  return {
    type: types.STEAL_BRICK_PRODUCTION_IF_LESS,
    actor: 'opponent',
    valueTrue,
    valueFalse,
  };
}

export function stealPlayerBrickProductionIfLess(valueTrue, valueFalse) {
  return {
    type: types.STEAL_BRICK_PRODUCTION_IF_LESS,
    actor: 'player',
    valueTrue,
    valueFalse,
  };
}
