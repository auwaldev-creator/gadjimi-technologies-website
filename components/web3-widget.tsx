'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, TrendingDown, Activity } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface TokenData {
  name: string
  symbol: string
  price: number
  change: number
  trend: 'up' | 'down'
}

export function Web3Widget() {
  const [tokens, setTokens] = useState<TokenData[]>([
    { name: 'Bitcoin', symbol: 'BTC', price: 45000, change: 2.5, trend: 'up' },
    { name: 'Ethereum', symbol: 'ETH', price: 3200, change: -1.2, trend: 'down' },
    { name: 'Core DAO', symbol: 'CORE', price: 1.5, change: 5.8, trend: 'up' },
  ])

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prev) =>
        prev.map((token) => {
          const changePercent = (Math.random() - 0.5) * 2
          const newPrice = token.price * (1 + changePercent / 100)
          const newChange = token.change + changePercent
          
          return {
            ...token,
            price: parseFloat(newPrice.toFixed(2)),
            change: parseFloat(newChange.toFixed(2)),
            trend: newChange > 0 ? 'up' : 'down',
          }
        })
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-8 right-8 z-40 hidden xl:block"
    >
      <Card className="w-80 bg-card/80 backdrop-blur-xl border-neon-purple/30 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neon-purple/20 bg-gradient-to-r from-neon-purple/10 to-neon-gold/10">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-neon-gold" />
            <h3 className="font-display font-bold text-lg">
              <span className="text-neon-gold">Live</span>
              <span className="text-foreground"> Market</span>
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Simulated market data</p>
        </div>

        {/* Token List */}
        <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
          <AnimatePresence mode="popLayout">
            {tokens.map((token) => (
              <motion.div
                key={token.symbol}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative group"
              >
                <div className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-neon-cyan/30 transition-all duration-300">
                  {/* Token Info */}
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{token.symbol}</p>
                      <p className="text-xs text-muted-foreground">{token.name}</p>
                    </div>
                    <div className={`flex items-center gap-1 ${
                      token.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {token.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Price & Change */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-display font-bold text-neon-gold">
                        ${token.price.toLocaleString()}
                      </p>
                    </div>
                    <motion.div
                      animate={{
                        scale: token.change !== 0 ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                        token.trend === 'up'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {token.change > 0 ? '+' : ''}
                      {token.change.toFixed(2)}%
                    </motion.div>
                  </div>

                  {/* Price Chart Simulation */}
                  <div className="mt-3 h-8 flex items-end gap-0.5">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`flex-1 rounded-t ${
                          token.trend === 'up' ? 'bg-green-500/30' : 'bg-red-500/30'
                        }`}
                        animate={{
                          height: `${Math.random() * 100}%`,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.05,
                          repeat: Infinity,
                          repeatDelay: 2.5,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neon-purple/20 bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5">
          <p className="text-xs text-muted-foreground text-center">
            Powered by Gadjimi Technologies
          </p>
        </div>
      </Card>

      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-neon-purple/20 via-neon-gold/20 to-neon-cyan/20 rounded-2xl blur-2xl -z-10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </motion.div>
  )
}
