import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-gray-900 p-0 pt-10 pb-[7.5rem]">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between pr-6 pl-6">
        <img src={logoImg} alt="" />

        <button
          type="button"
          className="border- h-[50px] cursor-pointer rounded-md border-0 bg-green-500 px-5 font-bold text-white transition-colors hover:bg-green-700"
        >
          Nova transação
        </button>
      </div>
    </header>
  )
}
