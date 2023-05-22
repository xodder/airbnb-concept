// stolen from @mui/utils
import React from 'react';

interface UseControlledProps<T = unknown> {
  /**
   * Holds the component value when it's controlled.
   */
  controlled: T | undefined;
  /**
   * The default value when uncontrolled.
   */
  default: T | undefined;
}

type UseControlledResult<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

function useControlled<T = unknown>({
  controlled,
  default: defaultProp,
}: UseControlledProps<T>): UseControlledResult<T> {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const { current: isControlled } = React.useRef(controlled !== undefined);
  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const maybeSetValue: typeof setValue = React.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [value, maybeSetValue];
}

export default useControlled;
