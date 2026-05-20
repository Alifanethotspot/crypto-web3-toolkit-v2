'use client'

import { useState } from 'react'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export default function Home() {
  const [activeTab, setActiveTab] = useState('wallet')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [input, setInput] = useState('')

  const analyzeWallet = async () => {
    setLoading(true)
    try {
      const response = await axios.post(`${API_URL}/api/wallet/analyze`, {
        address: input || '0x1234567890123456789012345678901234567890'
      })
      setResult(response.data)
    } catch (err) {
      setResult({ error: 'Failed to analyze wallet' })
    }
    setLoading(false)
  }

  const auditContract = async () => {
    setLoading(true)
    try {
      const response = await axios.post(`${API_URL}/api/contract/audit`, {
        contract: input || '0x1234567890123456789012345678901234567890'
      })
      setResult(response.data)
    } catch (err) {
      setResult({ error: 'Failed to audit contract' })
    }
    setLoading(false)
  }

  const analyzeSentiment = async () => {
    setLoading(true)
    try {
      const response = await axios.post(`${API_URL}/api/sentiment/analyze`, {
        token: input || 'BTC'
      })
      setResult(response.data)
    } catch (err) {
      setResult({ error: 'Failed to analyze sentiment' })
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Crypto Web3 Toolkit</h1>
          <p className="text-slate-400">AI-powered Web3 analysis</p>
          <p className="text-xs text-slate-500 mt-2">Backend: {API_URL}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-700">
          {['wallet', 'contract', 'sentiment'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold transition-colors ${
                activeTab === tab
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-slate-800 rounded-lg p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              {activeTab === 'wallet' && 'Wallet Address'}
              {activeTab === 'contract' && 'Contract Address'}
              {activeTab === 'sentiment' && 'Token Symbol'}
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                activeTab === 'wallet'
                  ? '0x...'
                  : activeTab === 'contract'
                  ? '0x...'
                  : 'BTC'
              }
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
            />
          </div>

          <button
            onClick={
              activeTab === 'wallet'
                ? analyzeWallet
                : activeTab === 'contract'
                ? auditContract
                : analyzeSentiment
            }
            disabled={loading}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 rounded font-semibold transition-colors"
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">Results</h2>
            <pre className="bg-slate-900 p-4 rounded text-sm overflow-auto max-h-96 text-green-400">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

        {/* Status */}
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>✅ Backend: {API_URL}</p>
          <p>✅ Frontend: Deployed</p>
        </div>
      </div>
    </div>
  )
}
