import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const baseInputClasses =
    'rounded-md border-0 placeholder:text-gray-500 bg-gray-900 p-4 text-gray-300'
  const baseButtonClasses =
    'bg-gray-700 p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-0 text-gray-300'
  const baseButtonClassesDataState =
    'data-[state=checked]:text-white data-[state=unchecked]:hover:bg-gray-600 data-[state=unchecked]:hover:transition-colors data-[state=unchecked]:hover:duration-200'

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    try {
      const { description, price, category, type } = data
      await createTransaction({
        description,
        price,
        category,
        type
      })

      reset()
    } catch (error) {
      console.error('Erro ao criar transação:', error)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="h-[50px] cursor-pointer rounded-md border-0 bg-green-500 px-5 font-bold text-white transition-colors hover:bg-green-700"
        >
          Nova transação
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-[32rem] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-gray-800 p-10">
          <Dialog.Title className="text-2xl font-bold text-white">
            Nova transação
          </Dialog.Title>

          <Dialog.Close asChild>
            <button
              className="absolute top-6 right-6 cursor-pointer rounded-md text-gray-500 transition-colors hover:text-gray-300 focus:shadow-none focus:outline-none"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>
          </Dialog.Close>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(handleCreateNewTransaction)(e)
            }}
            className="mt-8 flex flex-col gap-4"
          >
            <input
              className={baseInputClasses}
              type="text"
              placeholder="Descrição"
              required
              {...register('description')}
            />
            <input
              className={baseInputClasses}
              type="number"
              placeholder="Preço"
              required
              {...register('price', { valueAsNumber: true })}
            />
            <input
              className={baseInputClasses}
              type="text"
              placeholder="Categoria"
              required
              {...register('category')}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <RadioGroup.Root
                    onValueChange={field.onChange}
                    value={field.value}
                    className="mt-2 grid grid-cols-2 gap-4"
                  >
                    <RadioGroup.Item
                      value="income"
                      disabled={isSubmitting}
                      className={`${baseButtonClasses} group data-[state=checked]:bg-green-500 ${baseButtonClassesDataState} disabled:cursor-not-allowed disabled:opacity-50`}
                    >
                      <ArrowCircleUp
                        className="text-green-300 group-data-[state=checked]:text-white"
                        size={24}
                      />
                      Entrada
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      value="outcome"
                      disabled={isSubmitting}
                      className={`${baseButtonClasses} group data-[state=checked]:bg-red-500 ${baseButtonClassesDataState} disabled:cursor-not-allowed disabled:opacity-50`}
                    >
                      <ArrowCircleDown
                        className="text-red-300 group-data-[state=checked]:text-white"
                        size={24}
                      />
                      Saída
                    </RadioGroup.Item>
                  </RadioGroup.Root>
                )
              }}
            />

            <button
              className="mt-5 h-[50px] cursor-pointer rounded-md border-0 bg-green-500 px-5 py-0 font-bold text-white hover:bg-green-700 hover:transition-colors hover:duration-200 disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
              disabled={isSubmitting}
            >
              Cadastrar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
