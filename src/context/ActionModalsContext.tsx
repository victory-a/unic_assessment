import React, { PropsWithChildren } from 'react';

export const defaultValues = {
  url: '',
  max_execution_time: 10,
  filter: false,
  store: false,
};

type IModals = 'INSERT_COMMAND' | 'SEARCH_AND_SCRAPE' | null;
type IForm = 'WEB_SCRAPE' | 'WEB_SEARCH';

export interface IActionModalsContextType {
  cancelAll: () => void;
  closeModal: () => void;
  currentModal: IModals;
  setCurrentModal: (val: IModals) => void;
  resetFormValues: (val: IForm) => void;
  scrapingFormValues: typeof defaultValues;
  webSearchFormValues: typeof defaultValues;
  updateFormValues: ({ form, values }: { form: IForm; values: Partial<typeof defaultValues> }) => void;
}

const context = React.createContext<IActionModalsContextType | undefined>(undefined);

const ActionModalsContext = (props: PropsWithChildren) => {
  const Provider = context.Provider;

  const [currentModal, setCurrentModal] = React.useState<IModals>(null);

  const [webSearchFormValues, setWebSearchFormValues] = React.useState(defaultValues);
  const [scrapingFormValues, setScrapingFormValues] = React.useState(defaultValues);

  function updateFormValues({ form, values }: { form: IForm; values: Partial<typeof defaultValues> }) {
    if (form === 'WEB_SCRAPE') {
      setScrapingFormValues((prev) => ({ ...prev, ...values }));
    } else {
      setWebSearchFormValues((prev) => ({ ...prev, ...values }));
    }
  }

  function resetFormValues(modal: 'WEB_SCRAPE' | 'WEB_SEARCH') {
    if (modal === 'WEB_SCRAPE') {
      setScrapingFormValues(defaultValues);
    } else {
      setWebSearchFormValues(defaultValues);
    }
  }

  const closeModal = () => setCurrentModal(null);

  const cancelAll = () => {};

  const value: IActionModalsContextType = {
    cancelAll,
    closeModal,
    currentModal,
    setCurrentModal,
    scrapingFormValues,
    updateFormValues,
    webSearchFormValues,
    resetFormValues,
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
