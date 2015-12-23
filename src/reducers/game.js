import * as types from '../constants/ActionTypes';
import { HAND_SIZE } from '../constants/config.js';
import { shuffleArray } from '../utils';
import cards from 'json!../cards.json';

const initialState = {
  isPlayerTurn: true,
  player: {
    tower: 50,
    wall: 50,
    deck: cards.slice(0),
    hand: [],
    brickProduction: 1,
    bricks: 2,
    gemProduction: 3,
    gems: 4,
    recruitProduction: 6,
    recruits: 6,
  },
  opponent: {
    tower: 50,
    wall: 50,
    deck: cards.slice(0),
    hand: [],
    brickProduction: 5,
    bricks: 5,
    gemProduction: 4,
    gems: 3,
    recruitProduction: 6,
    recruits: 7,
  },
};

function changeInt(current, toChange, min = 0) {
  const valueToSet = current + toChange;
  return valueToSet > min ? valueToSet : min;
}

function actorReducer(state, action) {
  switch (action.type) {

    case types.SHUFFLE_DECK:
      return {
        ...state,
        deck: shuffleArray(state.deck),
      };
    case types.DEAL_CARDS:
      const cardsToDeal = HAND_SIZE - state.hand.length;
      return {
        ...state,
        hand: state.deck.slice(-cardsToDeal),
        deck: state.deck.slice(0, -cardsToDeal),
      };

    case types.CHANGE_BRICKS:
      return {
        ...state,
        bricks: changeInt(state.bricks, action.value),
      };
    case types.CHANGE_GEMS:
      return {
        ...state,
        gems: changeInt(state.gems, action.value),
      };
    case types.CHANGE_RECRUITS:
      return {
        ...state,
        recruits: changeInt(state.recruits, action.value),
      };

    case types.CHANGE_BRICK_PRODUCTION:
      return {
        ...state,
        brickProduction: changeInt(state.brickProduction, action.value, 1),
      };
    case types.CHANGE_GEM_PRODUCTION:
      return {
        ...state,
        gemProduction: changeInt(state.gemProduction, action.value, 1),
      };
    case types.CHANGE_RECRUIT_PRODUCTION:
      return {
        ...state,
        recruitProduction: changeInt(state.recruitProduction, action.value, 1),
      };

    case types.CHANGE_TOWER:
      return {
        ...state,
        tower: changeInt(state.tower, action.value),
      };
    case types.CHANGE_WALL:
      return {
        ...state,
        wall: changeInt(state.wall, action.value),
      };
    case types.CHANGE_WALL_IF_NO_WALL:
      return {
        ...state,
        wall: changeInt(state.wall, state.wall === 0 ? action.valueTrue : action.valueFalse),
      };

    case types.RECEIVE_DAMAGE:
      let newWall = state.wall - action.value;
      let newTower = state.tower;
      if (newWall < 0) {
        newTower = state.tower + newWall;
        newWall = 0;
      }
      return {
        ...state,
        wall: newWall,
        tower: newTower > 0 ? newTower : 0,
      };

    case types.DISCARD_CARD:
      return {
        ...state,
        hand: [
          ...state.hand.slice(0, action.index),
          ...state.hand.slice(action.index + 1),
        ],
      };

    case types.DRAW_CARD:
      return {
        ...state,
        deck: state.deck.slice(0, -1),
        hand: [...state.hand, ...state.deck.slice(-1)],
      };

    default:
      return state;
  }
}

export default function game(state = initialState, action) {

  const actor = action.actor;
  const actorState = state[action.actor];
  const otherActor = action.actor === 'player' ? 'opponent': 'player';
  const otherActorState = state[otherActor];
  let valueToSet;

  switch (action.type) {
    case types.BEGIN_TURN:
      return {
        ...state,
        isPlayerTurn: true,
      };
    case types.END_TURN:
      return {
        ...state,
        isPlayerTurn: false,
      };

    case types.CHANGE_BRICK_PRODUCTION_IF_LESS:
      valueToSet = actorState.brickProduction < otherActorState.brickProduction ? action.valueTrue : action.valueFalse;
      return {
        ...state,
        [actor]: {
          ...actorState,
          brickProduction: changeInt(actorState.brickProduction, valueToSet),
        },
      };

    case types.CHANGE_RECRUIT_PRODUCTION_IF_LESS:
      valueToSet = actorState.recruitProduction < otherActorState.recruitProduction ? action.valueTrue : action.valueFalse;
      return {
        ...state,
        [actor]: {
          ...actorState,
          recruitProduction: changeInt(actorState.recruitProduction, valueToSet),
        },
      };

    case types.CHANGE_TOWER_IF_LESS:
      valueToSet = actorState.tower < otherActorState.tower ? action.valueTrue : action.valueFalse;
      return {
        ...state,
        [actor]: {
          ...actorState,
          tower: changeInt(actorState.tower, valueToSet),
        },
      };

    case types.COPY_BRICK_PRODUCTION_IF_LESS:
      valueToSet = actorState.brickProduction < otherActorState.brickProduction ? otherActorState.brickProduction - actorState.brickProduction : 0;
      return {
        ...state,
        [actor]: {
          ...actorState,
          brickProduction: changeInt(actorState.brickProduction, valueToSet),
        },
      };

    case types.FLOOD_WATER:
      let newState, lowerWallActor;
      if (state.player.wall === state.opponent.wall) {
        newState = {
          ...state,
          player: {
            ...state.player,
            recruitProduction: changeInt(state.player.recruitProduction, -1),
            tower: changeInt(state.player.tower, -2),
          },
          opponent: {
            ...state.opponent,
            recruitProduction: changeInt(state.opponent.recruitProduction, -1),
            tower: changeInt(state.opponent.tower, -2),
          },
        };
      } else {
        lowerWallActor = state.player.wall < state.opponent.wall ? 'player' : 'opponent';
        newState = {
          ...state,
          [lowerWallActor]: {
            ...state[lowerWallActor],
            recruitProduction: changeInt(state[lowerWallActor].recruitProduction, -1),
            tower: changeInt(state[lowerWallActor].tower, -2),
          },
        };
      }
      return newState;

    case types.SWITCH_WALL:
      return {
        ...state,
        player: {
          ...state.player,
          wall: state.opponent.wall,
        },
        opponent: {
          ...state.opponent,
          wall: state.player.wall,
        },
      };

    case types.EQUALIZE_GEM_PRODUCTION:
      const highestGemProduction = state.player.gemProduction > state.opponent.gemProduction ?
        state.player.gemProduction :
        state.opponent.gemProduction;
      return {
        ...state,
        player: {
          ...state.player,
          gemProduction: highestGemProduction,
        },
        opponent: {
          ...state.opponent,
          gemProduction: highestGemProduction,
        },
      };

    case types.LIGHTNING_SHARD:
      if (actorState.tower > otherActorState.wall) {
        valueToSet = {
          tower: changeInt(otherActorState.tower, -8),
        };
      } else {
        let newWall = otherActorState.wall - 8;
        let newTower = otherActorState.tower;
        if (newWall < 0) {
          newTower = otherActorState.tower + newWall;
          newWall = 0;
        }
        valueToSet = {
          wall: newWall,
          tower: newTower > 0 ? newTower : 0,
        };
      }
      return {
        ...state,
        [otherActor]: {
          ...state.opponent,
          ...valueToSet,
        },
      };

    default:
      return {
        ...state,
        [actor]: actorReducer(actorState, action),
      };
  }
}
