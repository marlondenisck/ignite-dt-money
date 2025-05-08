import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TableCell } from '../../components/TableCell'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <main className="mx-auto mt-16 mb-0 w-full max-w-[1120px] px-6 py-0">
        <table className="w-full border-separate border-spacing-x-0 border-spacing-y-4">
          <tbody>
            <tr>
              <TableCell isRoundedL width="50%">
                Desenvolvimento de site
              </TableCell>
              <TableCell variant="income">R$ 12.000,00</TableCell>
              <TableCell>Venda</TableCell>
              <TableCell isRoundedR>13/04/2022</TableCell>
            </tr>
            <tr>
              <TableCell isRoundedL width="50%">
                Hambúrguer
              </TableCell>
              <TableCell variant="outcome">-R$ 59,00</TableCell>
              <TableCell>Alimentação</TableCell>
              <TableCell isRoundedR> 10/04/2022</TableCell>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
