import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const TradingPanel = () => {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [tradeType, setTradeType] = useState<'market' | 'limit'>('market');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('43521.45');

  return (
    <div className="bg-orange-800 h-full">
      <div className="p-4 border-b border-orange-700">
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setOrderType('buy')}
            className={`flex-1 py-2 px-4 rounded font-medium transition-colors ${
              orderType === 'buy'
                ? 'bg-green-600 text-white'
                : 'bg-orange-700 text-orange-300 hover:bg-orange-600'
            }`}
          >
            <ArrowUp className="w-4 h-4 inline mr-1" />
            Купить
          </button>
          <button
            onClick={() => setOrderType('sell')}
            className={`flex-1 py-2 px-4 rounded font-medium transition-colors ${
              orderType === 'sell'
                ? 'bg-red-600 text-white'
                : 'bg-orange-700 text-orange-300 hover:bg-orange-600'
            }`}
          >
            <ArrowDown className="w-4 h-4 inline mr-1" />
            Продать
          </button>
        </div>
        
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setTradeType('market')}
            className={`px-3 py-1 text-sm rounded transition-colors ${
              tradeType === 'market'
                ? 'bg-blue-600 text-white'
                : 'bg-orange-700 text-orange-300 hover:bg-orange-600'
            }`}
          >
            Рыночный
          </button>
          <button
            onClick={() => setTradeType('limit')}
            className={`px-3 py-1 text-sm rounded transition-colors ${
              tradeType === 'limit'
                ? 'bg-blue-600 text-white'
                : 'bg-orange-700 text-orange-300 hover:bg-orange-600'
            }`}
          >
            Лимитный
          </button>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        {tradeType === 'limit' && (
          <div>
            <label className="block text-sm text-orange-400 mb-2">Цена (USD)</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-orange-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
        
        <div>
          <label className="block text-sm text-orange-400 mb-2">Количество (BTC)</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00000000"
            className="w-full bg-orange-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 py-1 px-2 text-xs bg-orange-700 hover:bg-orange-600 text-orange-300 rounded transition-colors">
            25%
          </button>
          <button className="flex-1 py-1 px-2 text-xs bg-orange-700 hover:bg-orange-600 text-orange-300 rounded transition-colors">
            50%
          </button>
          <button className="flex-1 py-1 px-2 text-xs bg-orange-700 hover:bg-orange-600 text-orange-300 rounded transition-colors">
            75%
          </button>
          <button className="flex-1 py-1 px-2 text-xs bg-orange-700 hover:bg-orange-600 text-orange-300 rounded transition-colors">
            100%
          </button>
        </div>
        
        <div className="text-sm space-y-2">
          <div className="flex justify-between text-orange-400">
            <span>Доступно:</span>
            <span className="text-white">2.34567890 BTC</span>
          </div>
          <div className="flex justify-between text-orange-400">
            <span>Общая стоимость:</span>
            <span className="text-white">~$2,450.67</span>
          </div>
          <div className="flex justify-between text-orange-400">
            <span>Комиссия:</span>
            <span className="text-white">0.1%</span>
          </div>
        </div>
        
        <button
          className={`w-full py-3 rounded font-medium transition-colors ${
            orderType === 'buy'
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
        >
          {orderType === 'buy' ? 'Купить BTC' : 'Продать BTC'}
        </button>
      </div>
      
      <div className="p-4 border-t border-orange-700">
        <h4 className="text-white font-medium mb-3">Открытые ордера</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-orange-400">Покупка 0.1 BTC</span>
            <button className="text-red-500 hover:text-red-400">Отменить</button>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-orange-400">Продажа 0.05 BTC</span>
            <button className="text-red-500 hover:text-red-400">Отменить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPanel;