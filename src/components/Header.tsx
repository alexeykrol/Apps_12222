import React from 'react';
import { User, Settings, Bell, TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">TradePro</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Торговля</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Портфолио</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Аналитика</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm text-gray-500">Баланс</p>
            <p className="text-lg font-semibold text-gray-900">$125,847.32</p>
          </div>
          <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;