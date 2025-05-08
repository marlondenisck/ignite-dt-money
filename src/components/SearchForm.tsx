import { MagnifyingGlass } from '@phosphor-icons/react'

export function SearchForm() {
  return (
    <form className="flex gap-4">
      <input
        className="flex-1 rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
        type="text"
        placeholder="Busque por transações"
      />

      <button
        className="flex items-center gap-3 rounded-md border border-green-300 bg-transparent p-4 font-bold text-green-300 transition-colors duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white"
        type="submit"
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}
