import { useReducer, createContext, useMemo } from "react";
import { budgetReducer, initialState } from "../reducers/budget-reducer";
import type {
  BudgetContextProps,
  BudgetProviderProps,
} from "../types/context-type";

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => total + expense.amount, 0),
    [state.expenses]
  );

  const remainingBudget = Number(state.budget - totalExpenses);

  console.log(remainingBudget);
  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
        totalExpenses,
        remainingBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
