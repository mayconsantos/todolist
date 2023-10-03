import React , { useState } from "react";
import { View, Text, Pressable} from 'react-native'
import Checkbox  from "expo-checkbox";
import { Image } from 'expo-image';
import { styles } from './styles'


type Props = {
    description: string;
    onChecked: () => void;
    onRemove: () => void;
}

export function Tarefas({ description , onChecked, onRemove}: Props) {
    const [isChecked, setChecked] = useState(false);

    const handlerChecked = () =>  {
        onChecked()
        setChecked(!isChecked)
    }

    return (
        <View style={styles.container}>

            <Checkbox style={{borderRadius: 50, width: 15, height: 15, marginRight: 9}} 
                value={isChecked} 
                color={isChecked ? "#5E60CE" : "#4EA8DE"}
                // onChange={onChecked}
                onValueChange={handlerChecked}
            />

            <Text style={isChecked ? styles.textDecorationLine : styles.text}>
                {description}
            </Text>

            <Pressable
            onPress={onRemove}>
                <Image style={styles.img} 
                    source={require('../../../assets/trash.png')} 
                />
            </Pressable>

        </View>
    )
}