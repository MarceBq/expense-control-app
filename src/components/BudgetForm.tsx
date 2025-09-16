export default function BudgetForm() {
  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Definir Presupuesto
        </label>

        <input
          id="budget"
          name="budget"
          className="w-full bg-white border border-gray-200 p-2"
          type="number"
          placeholder="Define tu presupuesto"
        />
      </div>

      <input
        type="submit"
        value="Definir Presupuesto"
        className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer
        p-2 text-white font-black uppercase"
      />
    </form>
  );
}
