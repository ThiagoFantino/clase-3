import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

function Contador() {
    const [contador, setContador] = useState(0);
    const incrementar = () => { setContador (contador+1); }
    const decrementar = () => { setContador (contador-1); }
    return (
    <View>
    <Text>Contador: {contador} </Text>
    <Pressable onPress={incrementar}> <Text>Incrementar</Text> </Pressable>
    <Pressable onPress={decrementar}> <Text>Decrementar</Text> </Pressable>
    </View>
    );
}

export default Contador;