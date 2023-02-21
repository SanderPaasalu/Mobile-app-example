import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./style";



const Button = ({ title, onPress}) => {
    const handlePress = () => {
        console.log("Button pressed")
    }

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={handlePress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default Button;