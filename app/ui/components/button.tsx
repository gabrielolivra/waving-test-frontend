'use client';
import { tv } from 'tailwind-variants';

interface typeButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tipo: 'error' | 'success' | 'warn' | 'info';
  badgeContent?: string | number; // Add this prop for badge content
}

const typeButton = tv({
  base: 'px-6 py-2 rounded-md w-28 font-semibold flex items-center justify-center h-10',
  variants: {
    type: {
      error: 'bg-red-500 text-white hover:border-2 border-red-500 hover:text-red-500 hover:bg-white',
      success: 'text-white bg-waving-primary-light hover:border-2 border-waving-primary-light hover:text-waving-primary-light hover:bg-white',
      info: 'bg-waving-secondary-gold text-white hover:border-2 border-waving-secondary-gold hover:text-waving-secondary-gold hover:bg-white',
      warn: 'bg-waving-secondary-brown text-white hover:border-2 border-waving-secondary-brown hover:text-waving-secondary-brown hover:bg-white',
    },
    disabled: {
      true: 'cursor-not-allowed bg-transparent text-gray-400 border-2 border-gray-400 hover:bg-transparent hover:text-gray-400',
    },
    badge: {
      true: 'relative',
    }
  },
});

export default function Button({
  tipo: type,
  children,
  className,
  badgeContent,
  ...rest
}: typeButton) {
  const buttonContent = (
    <>
      {children}
      {badgeContent && (
        <div
          className="absolute
        inline-flex
        items-center
        justify-center
        w-6
        h-6
        text-xs
        font-bold
        text-white
        bg-waving-secondary-yellow
        border-2
        rounded-full -top-2 -end-2 border-gray-900"
        >
          {badgeContent}
        </div>
      )}
    </>
  );

  return (
    <button
      {...rest}
      className={`${typeButton({ type: type, disabled: rest.disabled, badge: !!badgeContent })} ${className}`}
    >
      {buttonContent}
    </button>
  );
}
