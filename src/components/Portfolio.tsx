import React from 'react';
import { TrendingUp, TrendingDown, Wallet, PieChart } from 'lucide-react';

interface Asset {
  symbol: string;
  name: string;
  amount: string;
  value: string;
  change: number;
  percentage: number;
}

const Portfolio = () => {
  const assets: Asset[] = [
    { symbol: 'BTC', name: 'Bitcoin', amount: '2.34567890', value: '$102,156.78', change: 2.34, percentage: 45.6 },
    { symbol: 'ETH', name: 'Ethereum', amount: '15.7892', value: '$41,598.34', change: -1.23, percentage: 18.5 },
    { symbol: 'BNB', name: 'Binance Coin', amount: '123.45', value: '$36,865.02', change: 3.45, percentage: 16.4 },
    { symbol: 'ADA', name: 'Cardano', amount: '5847.23', value: '$2,643.89', change: -0.87, percentage: 1.2 },
    { symbol: 'SOL', name: 'Solana', amount: '89.12', value: '$8,486.51', change: 4.12, percentage: 3.8 },
  ];

  const totalValue = assets.reduce((sum, asset) => sum + parseFloat(asset.value.replace('$', '').replace(',', '')), 0);

  return (
    <div className="bg-orange-800 h-full flex flex-col">
      <div className="p-4 border-b border-orange-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold flex items-center">
            <Wallet className="w-5 h-5 mr-2" />
            Портфолио
          </h3>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <PieChart className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-orange-700 rounded p-3">
            <div className="text-sm text-orange-400">Общая стоимость</div>
            <div className="text-xl font-bold text-white">${totalValue.toLocaleString()}</div>
            <div className="flex items-center text-sm text-green-500 mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2.34% (24ч)
            </div>
          </div>
          <div className="bg-orange-700 rounded p-3">
            <div className="text-sm text-orange-400">П/У за день</div>
            <div className="text-xl font-bold text-green-500">+$2,847.32</div>
            <div className="text-sm text-orange-400 mt-1">+1.28%</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="space-y-3">
            {assets.map((asset, index) => (
              <div 
                key={asset.symbol}
                className="bg-orange-700 rounded p-4 hover:bg-orange-600 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {asset.symbol.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{asset.symbol}</div>
                      <div className="text-xs text-orange-400">{asset.name}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-white font-medium">{asset.value}</div>
                    <div className={`text-sm flex items-center justify-end ${
                      asset.change >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {asset.change >= 0 ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {Math.abs(asset.change).toFixed(2)}%
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-orange-400">Количество: {asset.amount}</span>
                  <span className="text-orange-400">{asset.percentage}% портфолио</span>
                </div>
                
                <div className="mt-2 bg-orange-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(asset.percentage, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-orange-700">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-orange-400">Активы</div>
            <div className="text-white font-medium">{assets.length}</div>
          </div>
          <div className="text-center">
            <div className="text-orange-400">Лучший</div>
            <div className="text-green-500 font-medium">SOL +4.12%</div>
          </div>
          <div className="text-center">
            <div className="text-orange-400">Худший</div>
            <div className="text-red-500 font-medium">ETH -1.23%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;