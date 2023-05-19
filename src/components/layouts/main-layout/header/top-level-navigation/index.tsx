import { styled, Tab, Tabs, tabsClasses } from '@mui/material';
import React from 'react';

type Item = {
  label: string;
  url: string;
};

const items: Item[] = [
  { label: 'Stays', url: '/' },
  { label: 'Experiences', url: '/experiences' },
  { label: 'Online Experiences', url: '/online-experiences' },
];

function TopLevelNavigation() {
  const [value, setValue] = React.useState('/');

  return (
    <NavTabs value={value} onChange={(_, value) => setValue(value)}>
      {items.map((item) => (
        <Tab
          key={item.label}
          label={item.label}
          value={item.url}
          sx={{
            py: 3.5,
            '&.Mui-selected': {
              color: 'text.primary',
              fontWeight: 700,
            },
          }}
          disableRipple
        />
      ))}
    </NavTabs>
  );
}

const NavTabs = styled(Tabs)(({ theme }) => {
  const cx = tabsClasses;

  return {
    [`.${cx.indicator}`]: {
      backgroundColor: 'transparent',
      borderRadius: 2,
      height: 3,
      width: 120,
      '&::after': {
        content: '""',
        display: 'block',
        width: '40%',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        margin: '0 auto',
      },
    },
  };
});

export default TopLevelNavigation;
