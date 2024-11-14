import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -75.50, date: '2023-05-15' },
    { id: 2, description: 'Salary Deposit', amount: 3000, date: '2023-05-01' },
    { id: 3, description: 'Electric Bill', amount: -120, date: '2023-05-10' },
    { id: 4, description: 'Online Shopping', amount: -49.99, date: '2023-05-08' },
]

export default function Transactions() {
  return (
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
  );
}