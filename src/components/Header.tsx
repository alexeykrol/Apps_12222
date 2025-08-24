import React from 'react';
import { User, Settings, Bell, TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-orange-900 border-b border-orange-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-white">TradePro</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Торговля</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Портфолио</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Аналитика</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm text-gray-400">Баланс</p>
            <p className="text-lg font-semibold text-white">$125,847.32</p>
          </div>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;