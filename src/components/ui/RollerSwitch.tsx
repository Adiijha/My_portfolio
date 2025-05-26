import React from 'react';

type RollerSwitchProps = {
  checked: boolean;
  onChange: () => void;
  className?: string;
  color?: string;
};

export default function RollerSwitch({
  checked,
  onChange,
  className = '',
  color = 'white',
}: RollerSwitchProps) {
  return (
    <button
      onClick={onChange}
      className={`relative w-24 h-10 rounded-full border-white border-2 transition-colors duration-300 ${
        checked ? `bg-${color}` : 'bg-black'
      } ${className}`}
    >
      {/* Roller Dot */}
      <div
        className={`absolute top-1 left-1 w-7 h-7 rounded-full transition-all duration-300 ${
          checked ? 'translate-x-14 bg-white' : 'bg-white '
        }`}
      />
    </button>
  );
}
