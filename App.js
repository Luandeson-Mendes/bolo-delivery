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

    <View className="flex-row flex-wrap justify-between">
        {foods.map((food) =>(
            <foodCard
                key={food.id}
                name={food.name}
                price={food.prices}
                emoji={food.emoji}
            />
        ))}
    </View>