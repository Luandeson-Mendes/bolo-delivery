import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type FoodCardProps = {
    name: String;
    price: number;
    emoji: String;
}

export default function FoodCard ({
    name,
    price,
    emoji,
}:FoodCardProps){
    return(
    <View className="mb-5 w-[48] rounded-2xl bg-orange-50 p-4">
        <Text className="text-center text-6xl">
            {emoji}
        </Text>

        <Text className="mt-3 text-lg font-bold">
            {name}
        </Text>

        <Text className="mt-1 font-bold text-orange-500">
            R$ {price.toFixed(2)}
        </Text>
    <TouchableOpacity className="text-center font-bold text-white">
        <Text className="text-center font-bold text-white">
            Adicionar
        </Text>
    </TouchableOpacity>
    </View>
    )
}