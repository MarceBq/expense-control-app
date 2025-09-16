export type BudgetActions = 
    {type: 'add-budget', payload: {budget: number}}

export type BudgetState = {
    budget: number
}