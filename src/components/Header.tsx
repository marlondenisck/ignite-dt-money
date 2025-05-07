
 import logoImg from "../assets/logo.svg";

export function Header() {
  return (
    <header className="bg-gray-900 pt-10 p-0 pb-[7.5rem] ">
      <div className="w-full max-w-[1120px] mx-auto pl-6 pr-6 flex justify-between items-center">
        <img src={logoImg} alt="" />

        <button type="button" className="transition-colors h-[50px] border-0 rounded-md bg-green-500 text-white font-bold px-5 border- cursor-pointer hover:bg-green-700">Nova transação</button>
      </div>
    </header>
  );
}
