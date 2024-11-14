import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const expenses = [
  { name: 'Housing', value: 1200 },
  { name: 'Food', value: 400 },
  { name: 'Transportation', value: 200 },
  { name: 'Utilities', value: 150 },
  { name: 'Entertainment', value: 100 },
]

export const totalBudget = 2500
export const totalExpenses = expenses.reduce((sum, expense) => sum + expense.value, 0)
export const remainingBudget = totalBudget - totalExpenses

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']