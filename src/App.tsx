import React from 'react';
import Header from './components/Header';
import TradingPairs from './components/TradingPairs';
import Chart from './components/Chart';
import TradingPanel from './components/TradingPanel';
import OrderBook from './components/OrderBook';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar - Trading pairs */}
        <div className="w-80 border-r border-gray-200 hidden lg:block">
          <TradingPairs />
        </div>
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Chart section */}
          <div className="flex-1 border-b border-gray-200">
            <Chart />
          </div>
          
          {/* Bottom panels */}
          <div className="h-80 flex">
            {/* Order book */}
            <div className="w-1/3 border-r border-gray-200 hidden md:block">
              <OrderBook />
            </div>
            
            {/* Trading panel */}
            <div className="flex-1 md:w-1/3 border-r border-gray-200">
              <TradingPanel />
            </div>
            
            {/* Portfolio */}
            <div className="w-1/3 hidden xl:block">
              <Portfolio />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;