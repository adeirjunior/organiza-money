import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COLORS, expenses, remainingBudget, totalBudget, totalExpenses } from "@/lib/utils";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function DashboardPage() {
    return (
        <>
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
                        contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                        labelStyle={{ color: '#E5E7EB' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            </>
    )
}