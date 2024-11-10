'use client'

import { useState } from 'react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Home, PieChart as PieChartIcon, CreditCard, Settings } from 'lucide-react'

const getIntroOfPage = (label: string) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: {active: boolean | undefined, payload: any, label: string}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-500 p-4 rounded-lg">
        <p className="label">{`R$${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </div>
    );
  }

  return null;
};

export default function FinanceApp() {
  const [activeTab, setActiveTab] = useState('overview')

  const expenses = [
    { name: 'Housing', value: 1200 },
    { name: 'Food', value: 400 },
    { name: 'Transportation', value: 200 },
    { name: 'Utilities', value: 150 },
    { name: 'Entertainment', value: 100 },
  ]

  const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -75.50, date: '2023-05-15' },
    { id: 2, description: 'Salary Deposit', amount: 3000, date: '2023-05-01' },
    { id: 3, description: 'Electric Bill', amount: -120, date: '2023-05-10' },
    { id: 4, description: 'Online Shopping', amount: -49.99, date: '2023-05-08' },
  ]

  const totalBudget = 2500
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.value, 0)
  const remainingBudget = totalBudget - totalExpenses

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white md:flex-row">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:flex-shrink-0 md:h-screen bg-gray-800 shadow-md">
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-6 text-white">FinanceTracker</h1>
            <nav className="flex flex-col space-y-2">
              <Button variant="ghost" className="flex items-center justify-start space-x-2 text-gray-300 hover:text-white" onClick={() => setActiveTab('overview')}>
                <Home className="h-5 w-5" />
                <span>Overview</span>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start space-x-2 text-gray-300 hover:text-white" onClick={() => setActiveTab('expenses')}>
                <PieChartIcon className="h-5 w-5" />
                <span>Expenses</span>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start space-x-2 text-gray-300 hover:text-white" onClick={() => setActiveTab('transactions')}>
                <CreditCard className="h-5 w-5" />
                <span>Transactions</span>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start space-x-2 text-gray-300 hover:text-white" onClick={() => setActiveTab('settings')}>
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-900 pb-16 md:pb-6">
        <Tabs value={activeTab} className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-300">Total Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">${totalBudget.toFixed(2)}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-300">Total Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">${totalExpenses.toFixed(2)}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-300">Remaining Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">${remainingBudget.toFixed(2)}</p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Expense Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={expenses}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {expenses.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => `$${value}`}
                        content={(data) => <CustomTooltip active={data.active} label={data.label} payload={data.payload} />}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="expenses" className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Expense Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={expenses} layout="vertical">
                      <XAxis type="number" stroke="#E5E7EB" />
                      <YAxis dataKey="name" type="category" stroke="#E5E7EB" />
                      <Tooltip
                        formatter={(value) => `$${value}`}
                        contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                        labelStyle={{ color: '#E5E7EB' }}
                      />
                      <Bar dataKey="value" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {transactions.map((transaction) => (
                    <li key={transaction.id} className="flex justify-between items-center">
                      <div>
                        <p className="text-white">{transaction.description}</p>
                        <p className="text-sm text-gray-400">{transaction.date}</p>
                      </div>
                      <span className={transaction.amount >= 0 ? 'text-green-400' : 'text-red-400'}>
                        ${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Settings options would go here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom navigation for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 shadow-md">
        <nav className="flex justify-around items-center h-16">
          <Button variant="ghost" className="flex flex-col items-center justify-center text-gray-300 hover:text-white" onClick={() => setActiveTab('overview')}>
            <Home className="h-5 w-5" />
            <span className="text-xs">Overview</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center text-gray-300 hover:text-white" onClick={() => setActiveTab('expenses')}>
            <PieChartIcon className="h-5 w-5" />
            <span className="text-xs">Expenses</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center text-gray-300 hover:text-white" onClick={() => setActiveTab('transactions')}>
            <CreditCard className="h-5 w-5" />
            <span className="text-xs">Transactions</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center text-gray-300 hover:text-white" onClick={() => setActiveTab('settings')}>
            <Settings className="h-5 w-5" />
            <span className="text-xs">Settings</span>
          </Button>
        </nav>
      </div>
    </div>
  )
}