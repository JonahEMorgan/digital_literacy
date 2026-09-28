import { useTheme } from "#components/theme-provider";
import { Button } from "#components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "#components/ui/card";
import { Checkbox } from "#components/ui/checkbox";
import React from "react";

export default function App() {
    const { theme, setTheme } = useTheme();
    const [checked, setChecked] = React.useState(false);
    return (
        <div className="grid min-h-screen place-items-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Ditigal Literacy App</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Nothing to show just yet.</p>
                    <Checkbox checked={checked} onCheckedChange={setChecked} />
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</Button>
                </CardFooter>
            </Card>
        </div>
    )
}