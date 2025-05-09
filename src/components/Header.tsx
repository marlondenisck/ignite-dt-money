import logoImg from '../assets/logo.svg'
import { NewTransactionModal } from './NewTransactionModal'

export function Header() {
  return (
    <header className="bg-gray-900 p-0 pt-10 pb-[7.5rem]">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between pr-6 pl-6">
        <img src={logoImg} alt="" />
        <NewTransactionModal />
      </div>
    </header>
  )
}
