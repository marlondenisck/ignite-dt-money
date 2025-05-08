import { createContext, type ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

// interface para o tipo de state do contexto
interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

// interface para o tipo de dados deste contexto
interface TransactionsContextType {
  transactions: Transaction[]
}

// interface para o tipo de props do provider
interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions() {
    const response = await api.get('/transactions')
    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
