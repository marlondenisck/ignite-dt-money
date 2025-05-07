import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar
} from '@phosphor-icons/react'

export function Summary() {
  return (
    <section className="mx-auto -mt-20 grid w-full max-w-[1120px] grid-cols-3 gap-8 px-6">
      <div className="rounded-md bg-gray-600 p-8">
        <header className="flex items-center justify-center text-gray-300">
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong className="mt-4 block text-[2rem]">R$ 17.400,00</strong>
      </div>

      <div className="rounded-md bg-gray-600 p-8">
        <header className="flex items-center justify-center text-gray-300">
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong className="mt-4 block text-[2rem]">R$ 17.400,00</strong>
      </div>

      <div className="rounded-md bg-gray-700 p-8">
        <header className="flex items-center justify-center text-gray-300">
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong className="mt-4 block text-[2rem]">R$ 17.400,00</strong>
      </div>
    </section>
  )
}
