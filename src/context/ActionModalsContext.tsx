import useDisclosure from '@/hooks/useDisclosure';
import React, { PropsWithChildren } from 'react';

interface IActionModalsContextType {
  cancelAll: () => void;
  isCommandsModalOpen: boolean;
  onCloseCommandsModal: () => void;
  onToggleCommandsModal: () => void;
  isScrapingModalOpen: boolean;
  onCloseScrapingModal: () => void;
}

const context = React.createContext<IActionModalsContextType | undefined>(undefined);

const ActionModalsContext = (props: PropsWithChildren) => {
  const Provider = context.Provider;
  const {
    isOpen: isCommandsModalOpen,
    onClose: onCloseCommandsModal,
    onToggle: onToggleCommandsModal,
  } = useDisclosure();

  const { isOpen: isScrapingModalOpen, onClose: onCloseScrapingModal } = useDisclosure();

  const cancelAll = () => {
    onCloseScrapingModal();
    onCloseCommandsModal();
  };

  const value: IActionModalsContextType = {
    cancelAll,
    isCommandsModalOpen,
    onCloseCommandsModal,
    onToggleCommandsModal,
    isScrapingModalOpen,
    onCloseScrapingModal,
  };

  return <Provider value={value} {...props} />;
};

export default ActionModalsContext;

// Custom hook to consume the context
function useActionModalsContext() {
  const actionModalsContext = React.useContext(context);

  if (!actionModalsContext) {
    throw new Error('useActionModalsContext must be used within an ActionModalsContext provider');
  }

  return actionModalsContext;
}

export { useActionModalsContext, ActionModalsContext };
