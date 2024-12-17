import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import './button.scss';

export type ButtonVariant = 'default' | 'primary' | 'secondary';
export type ButtonSize = 'small' | 'normal' | 'large';

type ButtonTagProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonExtraProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export type ButtonProps = ButtonTagProps & ButtonExtraProps;

export const Button: FC<ButtonProps> = ({ variant = 'default', size = 'normal', children, ...props }) => {
  return (
    <button className={`button button-${variant} button-${size}`} {...props}>
      {children}
    </button>
  );
};
