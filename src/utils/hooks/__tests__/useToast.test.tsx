import React from 'react';
import { mount } from 'enzyme';
import { toast } from 'react-toastify';

import useToast from '../useToast';

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({ t: jest.fn(v => v) }),
}));
jest.mock('react-toastify', () => ({
  ...jest.requireActual('react-toastify'),
  toast: {
    isActive: jest.fn(),
    error: jest.fn(),
    dismiss: jest.fn(),
  },
}));

type HookParams = Parameters<typeof useToast>[0];
type HookWrapperProps = {
  options: HookParams;
};

const HookWrapper = ({ options }: HookWrapperProps): React.ReactElement | null => {
  const { toastId, autoClose, isLoading, errorMessage } = options;
  useToast({
    toastId,
    autoClose,
    isLoading,
    errorMessage,
  });

  return null;
};

describe('useToast hook tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show toast', () => {
    (toast.isActive as jest.Mock).mockReturnValue(false);

    const options: HookParams = {
      toastId: 'testToastId',
      autoClose: false,
      isLoading: false,
      errorMessage: 'errorMessage',
    };

    mount(<HookWrapper options={options} />);

    expect(toast.error).toBeCalledWith(options.errorMessage, {
      toastId: options.toastId,
      autoClose: options.autoClose,
    });
    expect(toast.dismiss).not.toBeCalled();
  });

  it('should dismiss toast', () => {
    (toast.isActive as jest.Mock).mockReturnValue(true);

    const options: HookParams = {
      toastId: 'testToastId',
      autoClose: false,
      isLoading: false,
      errorMessage: null,
    };

    mount(<HookWrapper options={options} />);

    expect(toast.dismiss).toBeCalledWith(options.toastId);
    expect(toast.error).not.toBeCalled();
  });
});
