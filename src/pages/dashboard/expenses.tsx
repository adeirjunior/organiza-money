import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { expenses } from "@/lib/utils";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Expenses() {
    return (
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
    );
}