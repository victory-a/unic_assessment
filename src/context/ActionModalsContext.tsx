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
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  insertCommand: (type: IForm) => void;
  closeModal: () => void;
  currentModal: IModals;
  setCurrentModal: (val: IModals) => void;
  scrapingFormValues: typeof defaultValues;
  webSearchFormValues: typeof defaultValues;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  updateFormValues: ({ form, values }: { form: IForm; values: Partial<typeof defaultValues> }) => void;
}

const context = React.createContext<IActionModalsContextType | undefined>(undefined);

const ActionModalsContext = (props: PropsWithChildren) => {
  const Provider = context.Provider;
  const [value, setValue] = React.useState('');

  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

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

  const closeModal = () => setCurrentModal(null);

  function insertCommand(type: IForm) {
    switch (type) {
      case 'WEB_SCRAPE': {
        const { filter, max_execution_time, store, url } = scrapingFormValues;

        const command = `[include-url: ${url} max_execution_time:${max_execution_time} filter:${filter} store:${store}]`;
        setScrapingFormValues(defaultValues);
        setValue(`${value} ${command}`);
        closeModal();
        break;
      }

      case 'WEB_SEARCH':
        const { filter, max_execution_time, store, url } = webSearchFormValues;

        const command = `[web-crawling: ${url} max_execution_time:${max_execution_time} filter:${filter} store:${store}]`;
        setWebSearchFormValues(defaultValues);
        setValue(`${value} ${command}`);
        closeModal();
        break;

      default:
        return value;
    }
  }

  const returnValue: IActionModalsContextType = {
    value,
    setValue,
    closeModal,
    currentModal,
    setCurrentModal,
    scrapingFormValues,
    updateFormValues,
    webSearchFormValues,
    insertCommand,
    textareaRef,
  };

  return <Provider value={returnValue} {...props} />;
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
