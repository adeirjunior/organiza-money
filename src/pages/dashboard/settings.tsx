import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Settings() {
    return (
        <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
                <CardTitle className="text-white">Settings</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-300">Settings options would go here.</p>
            </CardContent>
        </Card>
    );
}