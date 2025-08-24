import React, { useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Activity } from 'lucide-react';

const Chart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Generate mock data
    const generateMockData = () => {
      const points = [];
      let basePrice = 43500;
      for (let i = 0; i < 100; i++) {
        basePrice += (Math.random() - 0.5) * 200;
        points.push({
          x: (i / 99) * canvas.offsetWidth,
          y: ((50000 - basePrice) / 10000) * canvas.offsetHeight
        });
      }
      return points;
    };

    const drawChart = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Draw grid
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let i = 0; i <= 10; i++) {
        const x = (i / 10) * canvas.offsetWidth;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.offsetHeight);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let i = 0; i <= 5; i++) {
        const y = (i / 5) * canvas.offsetHeight;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.offsetWidth, y);
        ctx.stroke();
      }

      // Draw chart line
      const points = generateMockData();
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.offsetHeight);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');

      // Fill area
      ctx.beginPath();
      ctx.moveTo(points[0].x, canvas.offsetHeight);
      points.forEach(point => ctx.lineTo(point.x, point.y));
      ctx.lineTo(points[points.length - 1].x, canvas.offsetHeight);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw line
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach(point => ctx.lineTo(point.x, point.y));
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    drawChart();
    
    const handleResize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      drawChart();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-gray-800 h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-white">BTC/USD</h2>
            <div className="flex items-center space-x-2 text-green-500">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xl font-semibold">$43,521.45</span>
              <span className="text-sm">+2.34%</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors">
              <BarChart3 className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors">
              <Activity className="w-4 h-4 text-gray-300" />
            </button>
          </div>
        </div>
        
        <div className="flex space-x-6 text-sm">
          <button className="text-blue-500 border-b-2 border-blue-500 pb-1">1Д</button>
          <button className="text-gray-400 hover:text-white transition-colors">1Н</button>
          <button className="text-gray-400 hover:text-white transition-colors">4Ч</button>
          <button className="text-gray-400 hover:text-white transition-colors">1Ч</button>
          <button className="text-gray-400 hover:text-white transition-colors">15М</button>
        </div>
      </div>
      
      <div className="flex-1 p-4">
        <canvas 
          ref={canvasRef}
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      <div className="p-4 border-t border-gray-700">
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Открытие:</span>
            <span className="text-white ml-2">$42,890.12</span>
          </div>
          <div>
            <span className="text-gray-400">Максимум:</span>
            <span className="text-white ml-2">$44,123.67</span>
          </div>
          <div>
            <span className="text-gray-400">Минимум:</span>
            <span className="text-white ml-2">$42,456.34</span>
          </div>
          <div>
            <span className="text-gray-400">Объем:</span>
            <span className="text-white ml-2">1.2B</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;