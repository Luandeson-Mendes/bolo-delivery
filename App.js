import {useState} from "react";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

export default function App() {
    const [tela, setTela] = useState("inicio");

    if (tela === "login") {
        return (
            <LoginScreen onBack={() => setTela("inicio")}/>
        );
    }

    return (
        <HomeScreen onEntrarPress={() => setTela("login")}/>
    );
}