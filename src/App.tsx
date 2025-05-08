import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <TransactionsProvider>
      <main className="min-h-screen bg-gray-800 text-gray-100">
        <Transactions />
      </main>
    </TransactionsProvider>
  )
}
