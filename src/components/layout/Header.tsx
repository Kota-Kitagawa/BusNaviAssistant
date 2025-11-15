import React from 'react';
import NavItem from '@/components/ui/NavItem';
import { Search } from 'lucide-react';
import { ThemeButton } from '@/components/ui/ThemeButton';

type HeaderProps = {
  inSidebar: boolean; 
};

export function Header({ inSidebar = false }: HeaderProps) {
  const headerBgColor = 'bg-white dark:bg-gray-900';

  if (inSidebar) {
    return (
      <div className={`${headerBgColor} w-full border-b border-gray-200 dark:border-gray-700`}>
        <div className="flex items-center h-16 px-4">
          <a href="/" className="px-2 text-lg font-bold text-black dark:text-white">
            ARIVE.
          </a>
          <div className="ml-auto flex items-center space-x-2">
            <NavItem icon={Search} onClick={() => {}} />
            <ThemeButton />
          </div>
        </div>
      </div>
    );
  }

  // モバイルで画面上部に固定するヘッダー
  return (
    <header className={`${headerBgColor}`}>
      <nav className="flex items-center max-w-7xl mx-auto h-16 px-4">
        <a href="/" className="px-4 text-xl font-bold text-black dark:text-white">
          ARIVE.
        </a>
        <div className="flex ml-auto items-center">
          <NavItem icon={Search} onClick={() => {}} />
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
}