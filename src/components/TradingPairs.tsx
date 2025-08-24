import React from 'react';
import { ArrowUp, ArrowDown, Star } from 'lucide-react';

interface TradingPair {
  symbol: string;
  price: string;
  change: number;
  volume: string;
}

const TradingPairs = () => {
  const pairs: TradingPair[] = [
    { symbol: 'BTC/USD', price: '43,521.45', change: 2.34, volume: '1.2B' },
    { symbol: 'ETH/USD', price: '2,634.78', change: -1.23, volume: '856M' },
    { symbol: 'BNB/USD', price: '298.56', change: 3.45, volume: '234M' },
    { symbol: 'ADA/USD', price: '0.4521', change: -0.87, volume: '89M' },
    { symbol: 'SOL/USD', price: '95.23', change: 4.12, volume: '456M' },
    { symbol: 'DOGE/USD', price: '0.0834', change: -2.15, volume: '123M' },
    { symbol: 'MATIC/USD', price: '0.8934', change: 1.67, volume: '67M' },
    { symbol: 'DOT/USD', price: '6.45', change: 0.89, volume: '45M' },
  ];

  return (
    <div className="bg-white h-full overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-gray-900 font-semibold mb-3">Торговые пары</h3>
        <div className="flex text-sm text-gray-500 border-b border-gray-200 pb-2">
          <div className="flex-1">Пара</div>
          <div className="w-20 text-right">Цена</div>
          <div className="w-16 text-right">24ч %</div>
        </div>
      </div>
      
      <div className="overflow-y-auto h-[calc(100%-80px)]">
        {pairs.map((pair, index) => (
          <div 
            key={pair.symbol}
            className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
          >
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-gray-400 hover:text-yellow-500 transition-colors" />
                <span className="text-gray-900 font-medium">{pair.symbol}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Vol: {pair.volume}</div>
            </div>
            
            <div className="w-20 text-right">
              <div className="text-gray-900 font-medium">${pair.price}</div>
            </div>
            
            <div className="w-16 text-right">
              <div className={`flex items-center justify-end space-x-1 ${
                pair.change >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {pair.change >= 0 ? (
                  <ArrowUp className="w-3 h-3" />
                ) : (
                  <ArrowDown className="w-3 h-3" />
                )}
                <span className="text-sm font-medium">
                  {Math.abs(pair.change).toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingPairs;