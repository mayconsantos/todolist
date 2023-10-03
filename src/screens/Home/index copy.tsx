import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Alert, FlatList } from "react-native";
import { Image } from 'expo-image';
import { styles } from "./styles";
import { Tarefas } from "../../components/Tarefas";


export function Home() {

    const [tarefas, setTarefas] = useState<string[]>([])
    const [tarefa, setTarefa] = useState("")
    const [tarefasChecked, setTarefasChecked] = useState<string[]>([])
    let arrSelecteds = [...tarefasChecked];

    function handlerTarefaAdd() {
        if(!tarefa.trim()){
            return Alert.alert('Required', 'Campo Vazio')
        }

        setTarefas(prevState => [...prevState, tarefa])
        setTarefa('')
    }

    function handlerRemove(item: string) {
        Alert.alert('Remove', `Remover a tarefa ${item}?`,[
            {
                text: 'Sim',
                onPress: () => setTarefas(prevState => prevState.filter(trash => trash !== item))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    
    function handlerChecked(index: string) {
        let key = tarefasChecked.findIndex(i => i === index);
        if (key !== -1){
            arrSelecteds.splice(key, 1);
        }else{
            arrSelecteds.push(index);
            
        }

        setTarefasChecked(arrSelecteds)
    }

    return(

        <View style={styles.container}>

            <View style={styles.containerImg}>
                <Image style={styles.imgLopo} 
                    source={require('../../../assets/Logo.png')} 
                />
            </View>

            <View style={styles.containerInput}>
                <TextInput style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setTarefa}
                    value={tarefa}
                />

                <Pressable style={styles.button}
                    onPress={handlerTarefaAdd}
                >
                    <Image style={styles.icons} 
                        source={require('../../../assets/plus.svg')} 
                    />
                </Pressable>
            </View>

            <View style={styles.statusTarefa}>
                <View style={styles.textView}>
                    <Text style={styles.textTarefa}>
                        Criadas
                    </Text>
                    <Text style={styles.textTarefaCont}>
                        {tarefas.length}
                    </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textTarefa}>
                        Concluidas
                    </Text>
                    <Text style={styles.textTarefaCont}>
                        {arrSelecteds.length}
                    </Text>
                </View>
            </View>

           
            <FlatList
                data={tarefas}
                keyExtractor={item => item}
                renderItem={({ item, index}) =>(
                    <Tarefas 
                        key={index}
                        description={item}
                        onChecked={() => handlerChecked(index.toString())}
                        onRemove={() => handlerRemove(item.toString())}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.tarefasView}>
                        <Image style={styles.imgTarefasView}  source={require('../../../assets/Clipboard.png')}  /> 
                        <Text style={{color: '#808080', fontWeight: 'bold', fontSize: 14}}> Você ainda não tem tarefas cadastradas </Text>
                        <Text style={{color: '#808080', fontSize: 14}}> Crie tarefas e organize seus itens a fazer </Text>
                    </View>
                )} 
            
            />

        </View>
    )
    
}