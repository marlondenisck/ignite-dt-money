import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TableCell } from '../../components/TableCell'
import { api } from '../../services/api'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  console.log(transactions)

  async function fetchTransactions() {
    const response = await api.get('/transactions')
    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <main className="mx-auto mt-16 mb-0 w-full max-w-[1120px] px-6 py-0">
        <SearchForm />
        <table className="mt-6 w-full border-separate border-spacing-x-0 border-spacing-y-4">
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <TableCell isRoundedL width="50%">
                    {transaction.description}
                  </TableCell>
                  <TableCell variant={transaction.type}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(transaction.price)}
                  </TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell isRoundedR>
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(transaction.createdAt)
                    )}
                  </TableCell>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </div>
  )
}
