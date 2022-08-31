'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action['type'] === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action['type'] === 'removeProperties') {
      for (const keysRemove of action.keysToRemove) {
        delete state[keysRemove];
      };
    }

    if (action['type'] === `clear`) {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
