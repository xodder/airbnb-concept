import _omit from 'lodash/omit';
import { Maybe } from '~/types';
import {
  useLocationStateValue,
  useUpdateLocationState,
} from '~/utils/use-location-state';
import { Place } from '../types';

type PlaceId = Place['id'];

function usePlaceSelection() {
  const key = 'place';
  const selectedPlaceId = useLocationStateValue<PlaceId>(key);
  const updateLocationState = useUpdateLocationState();

  function selectPlace(placeId: Maybe<PlaceId>) {
    void updateLocationState((s) => {
      return placeId ? { ...s, [key]: placeId } : _omit(s, key);
    }, !!selectedPlaceId);
  }

  return [selectedPlaceId, selectPlace] as const;
}

export default usePlaceSelection;
