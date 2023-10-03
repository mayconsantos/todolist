import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Alert, FlatList } from "react-native";
import { Image } from 'expo-image';
import { styles } from "./styles";
import { Tarefas } from "../../components/Tarefas";


export function Home() {

    const [tarefas, setTarefas] = useState<Object[]>([])
    const [tarefa, setTarefa] = useState("")
    const [concluidas, setConcluidas] = useState<Object[]>([])

    function handlerTarefaAdd() {
        let output = tarefas.filter(dado => dado.tarefa === tarefa);
        for (let i = 0; i < output.length; i++){
            return Alert.alert('Duplicado', 'Já esixte registro')
        }
        if(!tarefa.trim()){
            return Alert.alert('Required', 'Campo Vazio')
        }

        const object = function(tarefa: string , checked: boolean){
            tarefa
            checked
            return {tarefa, checked}
        }

        setTarefas(prevState => [...prevState ,object(tarefa, false)])
        setTarefa('')
    }

    function handlerRemove(item: string) {
        Alert.alert('Remove', `Remover a tarefa ${item}?`,[
            {
                text: 'Sim',
                onPress: () => {
                    setTarefas(prevState => prevState.filter(remove => remove.tarefa !== item)); 
                    setConcluidas(prevState => prevState.filter(remove => remove.tarefa !== item));}
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    
    function handlerChecked(index: string) {

            tarefas.findIndex((item, key) => {
                if(index === item.tarefa){
                    if(!item.checked){
                        item.checked = true
                        setConcluidas(prevState => [...prevState, item]);
                    }else if(item.checked){
                        item.checked = false
                        setConcluidas(prevState => prevState.filter(remove => remove !== item));
                    }
                }
            }); 

        setTarefas(tarefas)    
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
                        {concluidas.length}
                    </Text>
                </View>
            </View>

           
            <FlatList
                data={tarefas}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item, index}) =>(
                    <Tarefas 
                        key={index}
                        description={item.tarefa}
                        onChecked={() => handlerChecked(item.tarefa.toString())}
                        onRemove={() => handlerRemove(item.tarefa.toString())}
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