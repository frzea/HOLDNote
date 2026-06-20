import {
  AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { useThemeStore } from '../../../../store/themeStore'
import { GrafProps } from './type'

export function Graf({ data }: GrafProps) {
   const { isDark } = useThemeStore()

  const colors = {
    line:       isDark ? '#e5e5e5' : '#1a1a1a',
    muted:      isDark ? '#71717a' : '#a1a1aa',
    bg:         isDark ? '#2a2a2a' : '#f4f4f5',
    border:     isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)',
    tooltipBg:  isDark ? '#1f1f1f' : '#ffffff',
    tooltipClr: isDark ? '#e5e5e5' : '#111111',
  }

  return (
    <div style={{
      background: colors.bg,
      borderRadius: '12px',
    }} className=' flex flex-col w-full min-h-full p-2'>

      <ResponsiveContainer width="99%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={colors.line} stopOpacity={isDark ? 0.3 : 0.15} />
              <stop offset="95%" stopColor={colors.line} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke={colors.border} vertical={false} />

          <XAxis
            dataKey="date"
            tick={{ fill: colors.muted, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickMargin={8}
          />

          <YAxis
            orientation="right"
            tick={{ fill: colors.muted, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) =>
              `$${Number(v).toLocaleString('en-US', { maximumFractionDigits: 0 })}`
            }
            domain={['auto', 'auto']}
            width={64}
            dx={-4}
          />

          <Tooltip
            cursor={{ stroke: colors.border, strokeWidth: 1 }}
            contentStyle={{
              background: colors.tooltipBg,
              border: `1px solid ${colors.border}`,
              borderRadius: 8,
              color: colors.tooltipClr,
              fontSize: 13,
            }}
            formatter={(value: number) =>
              [`$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, 'Цена']
            }
          />

          <Area
            type="monotone"
            dataKey="price"
            stroke={colors.line}
            strokeWidth={1.5}
            fill="url(#priceGradient)"
            dot={false}
            activeDot={{ r: 4, fill: colors.line, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}