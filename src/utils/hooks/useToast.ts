import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

type Options = {
  toastId: string | number;
  autoClose?: number | false;
  isLoading: boolean;
  errorMessage?: string | null;
};

const useToast = (options: Options): void => {
  const { toastId, autoClose, isLoading, errorMessage } = options;
  const { t } = useTranslation();

  useEffect(() => {
    const shouldShowToast = !isLoading && errorMessage && !toast.isActive(toastId);
    const shouldDismissToast = !isLoading && !errorMessage && toast.isActive(toastId);

    if (shouldShowToast) {
      toast.error(t(errorMessage || ''), {
        toastId,
        autoClose,
      });
    } else if (shouldDismissToast) {
      toast.dismiss(toastId);
    }
  });
};

export default useToast;
