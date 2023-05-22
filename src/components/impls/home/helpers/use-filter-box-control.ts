import _omit from 'lodash/omit';
import { useUpdateLocationState } from '~/utils/use-location-state';

function useFilterBoxControl() {
  const key = 'f';
  const updateLocationState = useUpdateLocationState();

  return {
    open: () => void updateLocationState({ [key]: true }),
    close: () => void updateLocationState((s) => _omit(s, [key])),
  };
}

export default useFilterBoxControl;
