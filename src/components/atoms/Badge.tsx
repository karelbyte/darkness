interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'purple' | 'gray';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'blue',
  className = ''
}: BadgeProps) {
  const variantClasses = {
    blue: 'bg-blue-600 text-white',
    green: 'bg-green-600 text-white',
    purple: 'bg-purple-600 text-white',
    gray: 'bg-gray-600 text-white'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
