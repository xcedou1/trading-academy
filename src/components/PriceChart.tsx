import { ChartContainer } from '@tradingview/charting-library-react';

// Simple wrapper component to ensure the TradingView Charting Library is bundled
export default function PriceChart() {
  return (
    <div className="h-96">
      <ChartContainer />
    </div>
  );
}
import React, { useEffect, useRef } from 'react';
import { AdvancedChart } from '@tradingview/charting-library-react';

interface PriceChartProps {
  ticker: string;
  timeframe: '1D' | '1W' | '1M';
}

const PriceChart: React.FC<PriceChartProps> = (props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      chartRef.current = new AdvancedChart({
        container: containerRef.current,
        symbol: props.ticker,
        interval: props.timeframe,
        autosize: true,
        onChartReady: () => console.log(`Chart ready for ${props.ticker}`),
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [props.ticker, props.timeframe]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default PriceChart;