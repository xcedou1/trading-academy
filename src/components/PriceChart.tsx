import { ChartContainer } from '@tradingview/charting-library-react';

// Simple wrapper component to ensure the TradingView Charting Library is bundled
export default function PriceChart() {
  return (
    <div className="h-96">
      <ChartContainer />
    </div>
  );
}