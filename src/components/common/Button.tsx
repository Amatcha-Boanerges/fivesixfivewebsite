import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary'; // Add other variants later if needed
  className?: string;
  disabled?: boolean;
};

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  disabled = false
}: ButtonProps) => {
  const baseStyles = 'px-6 py-3 font-semibold rounded-full shadow-md transition-all duration-200 ease-out transform focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-focus focus:ring-primary disabled:bg-primary/40 hover:translate-y-0.5',
    secondary: 'bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary', // Example for a future secondary button
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 