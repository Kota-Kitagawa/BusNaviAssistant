import  NavItem  from '@/components/ui/NavItem';
import { Search } from 'lucide-react';
import ThemeButton from '@/components/ui/ThemeButton';

export function Header() {
  const headerBgColor = 'bg-white dark:bg-gray-900'; 
  
  return (
    <header className={headerBgColor}>
      <nav className="flex items-center max-w-7xl mx-auto h-16">
        
        {/* ロゴ部分 */}
        {/* ▼ 色のカスタマイズポイント (ロゴテキスト色) ▼ */}
        <a href="/" className="px-4 text-xl font-bold text-black dark:text-white">
          案内
        </a>

        {/* ナビゲーションリンク群 */}
        <div className="flex  ml-auto">
          <NavItem  icon={Search} onClick={() => {}} />
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
}