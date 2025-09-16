import type { BudgetActions, BudgetState } from "../types/reducer-type";

export const initialState: BudgetState = {
  budget: 0,
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {
    if(action.type === 'add-budget'){
        return {
            ...state,
            budget: action.payload.budget
        }
    }
};
