import React from 'react';
import places from '../../../data/places';
import { Place } from '../../../types';

type PlaceDetailProviderProps = React.PropsWithChildren<{
  placeId: Place['id'];
}>;

type Values = {
  place: Place;
};

const Context = React.createContext<Values | undefined>(undefined);

function PlaceDetailProvider({ children, placeId }: PlaceDetailProviderProps) {
  const place = React.useMemo(() => {
    return places.find((x) => x.id === placeId)!;
  }, [placeId]);

  return <Context.Provider value={{ place }}>{children}</Context.Provider>;
}

export function useActivePlace() {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error('useActivePlace must be used within a PlaceDetailProvider');
  }

  return context.place;
}

export default PlaceDetailProvider;
