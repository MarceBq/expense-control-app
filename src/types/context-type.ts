import type { Dispatch, ReactNode } from "react"
import type { BudgetActions, BudgetState } from "./reducer-type"

export type BudgetContextProps = {
    state:BudgetState 
    dispatch:Dispatch<BudgetActions>
    totalExpenses:number
    remainingBudget:number
}

export type BudgetProviderProps = {
    children: ReactNode
}