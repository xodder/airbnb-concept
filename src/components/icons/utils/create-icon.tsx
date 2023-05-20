import { SvgIcon, SvgIconProps } from '@mui/material';
import _merge from 'lodash/merge';
import React from 'react';

function createIcon(path: unknown, name: string, viewBox?: string) {
  const resolvedPath = typeof path === 'string' ? <path d={path} /> : undefined;
  const outlined = name.includes('Outline');
  const displayName = name;
  const defaultProps = {
    'data-testid': `${displayName}Icon`,
    component: typeof path !== 'string' ? path : undefined,
    viewBox: viewBox || '0 0 48 48',
    children: resolvedPath,
    sx: {
      fill: typeof path !== 'string' || outlined ? 'none' : undefined,
      ...when(outlined, {
        stroke: 'currentColor',
        strokeWidth: 1.5,
      }),
    },
  };

  function Component<T extends React.ElementType = 'svg'>(
    props: SvgIconProps<T>,
    ref: React.Ref<T>
  ) {
    return React.createElement(SvgIcon, _merge({ ref }, defaultProps, props));
  }

  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Component.muiName = (SvgIcon as any).muiName;

  return React.memo(React.forwardRef(Component));
}

function when<T = unknown>(condition: boolean, value: T): T | undefined {
  return condition ? value : undefined;
}

export default createIcon;
