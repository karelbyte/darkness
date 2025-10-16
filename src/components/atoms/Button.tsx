interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-lg transition-colors font-semibold';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
