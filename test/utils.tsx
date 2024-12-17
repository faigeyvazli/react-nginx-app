import type { FC, PropsWithChildren, ReactElement } from 'react';
import { render as baseRender, RenderOptions as BaseRenderOptions } from '@testing-library/react';

export type RenderOptions = Omit<BaseRenderOptions, 'wrapper'>;

// eslint-disable-next-line react-refresh/only-export-components
const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

const render = (node: ReactElement, options?: RenderOptions) => {
  return baseRender(node, { wrapper: Providers, ...options });
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { render };
