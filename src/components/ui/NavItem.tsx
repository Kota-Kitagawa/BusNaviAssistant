import React from 'react';
import clsx from 'clsx';

interface NavItemProps {
  label?: string;
  // lucide-react 等のアイコンコンポーネントを渡す
  icon?: React.ElementType;
}

export default function NavItem({ label, icon }: NavItemProps) {
  const buttonClass = clsx(
    'flex items-center space-x-1 px-1 py-2 cursor-pointer text-white transition duration-100 group'
  );

  const iconWrapper = clsx(
    'p-2 rounded-md border border-transparent transition-colors duration-100',
    'group-hover:border-white group-hover:bg-white/10'
  );

  const Icon = icon;

  return (
    <div className={buttonClass} role="button" tabIndex={0}>
      {Icon && (
        <span className={iconWrapper} aria-hidden>
          <Icon className="w-5 h-5" />
        </span>
      )}
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
}