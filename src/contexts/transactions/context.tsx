import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInputs {
  category: string
  description: string
  price: number
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransaction: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInputs) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransaction(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInputs) {
    const { category, description, price, type } = data
    const response = await api.post('/transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransaction,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
