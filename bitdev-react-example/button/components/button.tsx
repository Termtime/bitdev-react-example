import React, { ReactNode } from 'react';

export type ButtonProps = {
  /**
   * A node to be rendered in the special component.
   */
  children?: ReactNode;
  /**
   * Button onClick handler.
   */
  onClick?: () => void;

  /**
   * Button's text.
   */
  title?: string;
};

export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
