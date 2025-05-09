import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { MagnifyingGlass } from '@phosphor-icons/react'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearch(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <form className="flex gap-4" onSubmit={handleSubmit(handleSearch)}>
      <input
        className="flex-1 rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button
        className="flex cursor-pointer items-center gap-3 rounded-md border border-green-300 bg-transparent p-4 font-bold text-green-300 transition-colors duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-green-300 disabled:hover:bg-transparent disabled:hover:text-green-300"
        type="submit"
        disabled={isSubmitting}
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}
