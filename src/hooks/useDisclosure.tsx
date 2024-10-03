import React from 'react';

const initialState = { isOpen: false };

const actions = {
  ON: 'ON',
  OFF: 'OFF',
  TOGGLE: 'TOGGLE',
} as const;

type reducerType = { type: keyof typeof actions };

function disclosureReducer(state: typeof initialState, action: reducerType) {
  switch (action.type) {
    case actions.ON:
      return { isOpen: true };

    case actions.OFF:
      return { isOpen: false };

    case actions.TOGGLE:
      return { isOpen: !state.isOpen };

    default:
      return state;
  }
}

function useDisclosure(props = initialState) {
  const [{ isOpen }, dispatch] = React.useReducer(disclosureReducer, props);

  const onOpen = () => dispatch({ type: actions.ON });
  const onClose = () => dispatch({ type: actions.OFF });
  const onToggle = () => dispatch({ type: actions.TOGGLE });

  return { isOpen, onOpen, onClose, onToggle };
}

export default useDisclosure;
