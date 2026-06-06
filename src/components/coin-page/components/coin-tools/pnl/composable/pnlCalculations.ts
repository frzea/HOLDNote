import { useCoinStore } from '../../../../../../store/CoinStore.ts';
import { useCoinToolsStore } from '../../../../../../store/CoinToolsStore.ts';

export function calcPNL() {
  const {selectCoin, selectCoinId} = useCoinStore();
  const { getCoinData } = useCoinToolsStore();

  const positions = getCoinData(selectCoinId).positions ?? [];  
  const totalInvested = positions.reduce((sum, p) => sum + p.qty * p.price, 0);
  const currentValue = positions.reduce((sum, p) => sum + p.qty * selectCoin.current_price, 0);
  
  return { totalInvested, positions, pnl: currentValue - totalInvested };
}