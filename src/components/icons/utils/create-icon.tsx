import { createSvgIcon } from '@mui/material/utils';
import React from 'react';

function createIcon(path: unknown, name: string, viewBox?: string) {
  const Icon = createSvgIcon(
    typeof path === 'string' ? <path d={path} /> : undefined,
    name
  );

  const outlined = name.includes('Outline');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  (Icon as any).defaultProps = {
    component: typeof path !== 'string' ? path : undefined,
    viewBox: viewBox || '0 0 48 48',
    style: {
      fill: typeof path !== 'string' || outlined ? 'none' : undefined,
      ...when(outlined, {
        stroke: 'currentColor',
        strokeWidth: 1.5,
      }),
    },
  };

  return Icon;
}

function when<T = unknown>(condition: boolean, value: T): T | undefined {
  return condition ? value : undefined;
}

export default createIcon;
