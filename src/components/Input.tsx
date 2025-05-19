interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

export default function Input({
  type,
  placeholder = '',
  value,
  onChange,
  required = false,
  className = '',
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
      className={`w-full px-4 py-2 border placeholder-gray-500 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none ${className}`}
    />
  );
}
