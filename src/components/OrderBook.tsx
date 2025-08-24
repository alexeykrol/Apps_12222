import React from 'react';

interface OrderBookEntry {
  price: string;
  amount: string;
  total: string;
}

const OrderBook = () => {
  const sellOrders: OrderBookEntry[] = [
    { price: '43,567.89', amount: '0.1234', total: '5,378.45' },
    { price: '43,545.67', amount: '0.2456', total: '10,693.21' },
    { price: '43,534.21', amount: '0.0987', total: '4,296.82' },
    { price: '43,529.12', amount: '0.5678', total: '24,715.93' },
    { price: '43,521.45', amount: '0.3456', total: '15,043.87' },
  ];

  const buyOrders: OrderBookEntry[] = [
    { price: '43,519.78', amount: '0.2345', total: '10,205.39' },
    { price: '43,512.34', amount: '0.1567', total: '6,817.64' },
    { price: '43,498.90', amount: '0.4567', total: '19,873.21' },
    { price: '43,487.65', amount: '0.0876', total: '3,809.44' },
    { price: '43,476.23', amount: '0.6789', total: '29,518.76' },
  ];

  return (
    <div className="bg-gray-800 h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-white font-semibold">Стакан заявок</h3>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <div className="flex text-xs text-gray-400 px-4 py-2 border-b border-gray-700">
          <div className="flex-1">Цена (USD)</div>
          <div className="w-20 text-right">Объем (BTC)</div>
          <div className="w-20 text-right">Общее</div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {/* Sell orders */}
          <div className="space-y-1">
            {sellOrders.reverse().map((order, index) => (
              <div 
                key={`sell-${index}`}
                className="flex items-center px-4 py-1 hover:bg-gray-700/50 transition-colors text-sm"
              >
                <div className="flex-1 text-red-400 font-mono">{order.price}</div>
                <div className="w-20 text-right text-gray-300 font-mono">{order.amount}</div>
                <div className="w-20 text-right text-gray-400 font-mono">{order.total}</div>
              </div>
            ))}
          </div>
          
          {/* Current price */}
          <div className="px-4 py-3 border-y border-gray-600 bg-gray-700/50">
            <div className="text-center">
              <div className="text-lg font-bold text-green-500">$43,521.45</div>
              <div className="text-xs text-gray-400">Текущая цена</div>
            </div>
          </div>
          
          {/* Buy orders */}
          <div className="space-y-1">
            {buyOrders.map((order, index) => (
              <div 
                key={`buy-${index}`}
                className="flex items-center px-4 py-1 hover:bg-gray-700/50 transition-colors text-sm"
              >
                <div className="flex-1 text-green-400 font-mono">{order.price}</div>
                <div className="w-20 text-right text-gray-300 font-mono">{order.amount}</div>
                <div className="w-20 text-right text-gray-400 font-mono">{order.total}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-700">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Спред:</span>
            <span className="text-white ml-2">$2.67</span>
          </div>
          <div>
            <span className="text-gray-400">Глубина:</span>
            <span className="text-white ml-2">2.45 BTC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;