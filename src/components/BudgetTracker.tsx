import { useBudget } from "../hooks/useBudget";
import DisplayAmount from "./DisplayAmount";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function BudgetTracker() {
  const { state, dispatch, totalExpenses, remainingBudget } = useBudget();

  const porcentage = Number(((totalExpenses / state.budget) * 100).toFixed(2));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={porcentage}
          styles={buildStyles({
            pathColor: porcentage === 100 ? "" : "#3B82F6",
            textColor: porcentage === 100 ? "" : "#3B82F6",
            trailColor: "#f5f5f5",
            textSize: 8,
          })}
          text={`${porcentage}% Gastado`}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold"
          onClick={() => {
            dispatch({ type: "reset-app" });
          }}
        >
          Resetear App
        </button>

        <DisplayAmount label="Presupuesto" amount={state.budget} />

        <DisplayAmount label="Disponible" amount={remainingBudget} />

        <DisplayAmount label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
}
