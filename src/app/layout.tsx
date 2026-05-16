import { Tabs } from "expo-router";

export default function RootLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="cadastro" />
            <Tabs.Screen name="preview" />
            <Tabs.Screen name="sucesso" />
        </Tabs>
    )
}
