import { Drawer } from '@mui/material';
import _omit from 'lodash/omit';
import {
  useLocationStateValue,
  useUpdateLocationState,
} from '~/utils/use-location-state';
import FilterBoxWidget from './widget';

const offsetTop = 72 + 68; // appbar_height + header_section_height;

function FilterBox() {
  const filterBox = useFilterBox();

  return (
    <Drawer
      open={filterBox.visible}
      anchor="right"
      onClose={filterBox.hide}
      slotProps={{
        backdrop: {
          sx: {
            top: offsetTop,
            bgcolor: 'transparent',
          },
        },
      }}
      PaperProps={{
        sx: {
          top: offsetTop,
          width: 400,
          bottom: 0,
          height: 'unset',
          overscrollBehavior: 'contain',
        },
      }}
      sx={{ zIndex: 4, top: offsetTop }}
      SlideProps={{ easing: 'linear' }}
      disablePortal
    >
      <FilterBoxWidget />
    </Drawer>
  );
}

export function useFilterBox() {
  const key = 'f';
  const updateLocationState = useUpdateLocationState();
  const visible = useLocationStateValue(key, false);

  return {
    visible,
    show: () => void updateLocationState({ [key]: true }),
    hide: () => void updateLocationState((s) => _omit(s, [key])),
  };
}

export default FilterBox;
