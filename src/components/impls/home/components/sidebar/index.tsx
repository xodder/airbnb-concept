import { Typography } from '@mui/material';
import { Column, Row } from '@xod/mui-layout';
import React from 'react';
import {
  Airbnb,
  BeachfrontOutline,
  CampingOutline,
  CastleOutline,
  DesertOutline,
  FarmsOutline,
  HomesOutline,
  IslandOutline,
  KitchenOutline,
  LuxeOutline,
  MansionsOutline,
  PoolsOutline,
  SkiingOutline,
  SurfingOutline,
  TreehousesOutline,
  ViewsOutline,
  VineyardsOutline,
} from '~/components/icons';

type Item = {
  label: string;
  icon: any;
  url: string;
};

const items: Item[] = [
  { label: 'All Homes', icon: <Airbnb />, url: '/' },
  { label: 'Amazing Views', icon: <ViewsOutline />, url: '' },
  { label: 'Tiny Homes', icon: <HomesOutline />, url: '' },
  { label: "Chef's Kitchen", icon: <KitchenOutline />, url: '' },
  { label: 'Surfing', icon: <SurfingOutline />, url: '' },
  { label: 'Mansions', icon: <MansionsOutline />, url: '' },
  { label: 'Luxe', icon: <LuxeOutline />, url: '' },
  { label: 'Treehouses', icon: <TreehousesOutline />, url: '' },
  { label: 'Camping', icon: <CampingOutline />, url: '' },
  { label: 'Beachfront', icon: <BeachfrontOutline />, url: '' },
  { label: 'Farms', icon: <FarmsOutline />, url: '' },
  { label: 'Castles', icon: <CastleOutline />, url: '' },
  { label: 'Islands', icon: <IslandOutline />, url: '' },
  { label: 'Vineyards', icon: <VineyardsOutline />, url: '' },
  { label: 'Amazing Pools', icon: <PoolsOutline />, url: '' },
  { label: 'Skiing', icon: <SkiingOutline />, url: '' },
  { label: 'Desert', icon: <DesertOutline />, url: '' },
];

function Sidebar() {
  const [selectedIndex] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Column
      py={2}
      gap={1}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      borderRight="1px solid"
      borderColor="divider"
      minWidth={90}
      width={expanded ? 240 : 0}
      sx={{ transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}
    >
      {items.map((item, index) => (
        <SidebarItem
          key={item.label}
          item={item}
          expanded={expanded}
          selected={selectedIndex === index}
        />
      ))}
    </Column>
  );
}

type SidebarItemProps = {
  item: Item;
  selected?: boolean;
  expanded?: boolean;
};

function SidebarItem({ item, expanded, selected }: SidebarItemProps) {
  return (
    <Row
      position="relative"
      crossAxisAlignment="center"
      py={2}
      px={4}
      gap={2}
      height={48}
      width={1}
      sx={{
        '&:hover': { bgcolor: 'background.paper' },
        '&::after': {
          content: "''",
          position: 'absolute',
          right: 0,
          width: 3,
          top: 0,
          bottom: 0,
          bgcolor: selected ? 'primary.main' : 'transparent',
        },
      }}
    >
      {item.icon}
      {expanded && (
        <Typography
          variant="subtitle2"
          fontWeight={selected ? 700 : undefined}
          noWrap
        >
          {item.label}
        </Typography>
      )}
    </Row>
  );
}

export default Sidebar;
