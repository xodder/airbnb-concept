import { Box, Drawer, IconButton } from '@mui/material';
import React from 'react';
import { Close } from '~/components/icons';
import useRerender from '~/utils/use-rerender';
import usePlaceSelection from '../../helpers/use-place-selection';
import PlaceDetailProvider from './provider';
import PlaceDetailWidget from './widget';

function PlaceDetailDrawer() {
  const [selectedPlaceId, selectPlace] = usePlaceSelection();
  const [lockedPlaceId, freeLockedPlaceId] = useLockableValue(selectedPlaceId);
  const open = !!selectedPlaceId;

  function handleClose() {
    selectPlace(null);
  }

  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={handleClose}
      PaperProps={{ sx: { width: 0.8, overflow: 'unset' } }}
      closeAfterTransition={true}
      keepMounted={false}
      SlideProps={{
        easing: 'linear',
        onExited: () => setTimeout(freeLockedPlaceId),
      }}
    >
      <CloseButton onClick={handleClose} />
      {lockedPlaceId && (
        <PlaceDetailProvider placeId={lockedPlaceId}>
          <PlaceDetailWidget />
        </PlaceDetailProvider>
      )}
    </Drawer>
  );
}

type CloseButtonProps = {
  onClick: () => void;
};

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <Box
      position="absolute"
      top={16}
      left={-16}
      sx={{ transform: 'translateX(-100%)' }}
    >
      <IconButton
        onClick={onClick}
        sx={{
          bgcolor: 'white',
          color: 'black',
          '&:hover': { bgcolor: 'black', color: 'white' },
        }}
      >
        <Close color="inherit" fontSize="xsmall" />
      </IconButton>
    </Box>
  );
}

function useLockableValue<T>(value: T | undefined) {
  const rerender = useRerender();
  const cachedValueRef = React.useRef(value);

  function free() {
    cachedValueRef.current = value;
    rerender();
  }

  // just use the new value directly
  if (!cachedValueRef.current && value) {
    cachedValueRef.current = value;
  }

  return [cachedValueRef.current, free] as const;
}

export default PlaceDetailDrawer;
