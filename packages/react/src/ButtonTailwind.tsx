import { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button
        className={[
          'bruno-bg-primary-500 hover:bruno-bg-primary-700',
          'active:bruno-bg-primary-800 bruno-text-neutral-white',
          'bruno-py-8 bruno-px-[20px]',
          'bruno-rounded-large',
        ].join(' ')}
        {...rest}
        ref={ref}
        disabled={disabled || loading}
      />
    );
  }
);

Button.displayName = 'ButtonTailwind';

export default Button;
