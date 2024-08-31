import { View, Text, Button, StatusBar } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const Contador = (props: Props) => {
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(prev => prev + 1)
    }

    const decrementar = () => {
        setContador(prev => prev - 1)
    }

    return (
        <View>
            {/* Ocultar la barra de estado */}
            <StatusBar hidden={true} />

            <Button title='Incrementar' onPress={incrementar} />
            <Button title='Decrementar' onPress={decrementar} />
            <Text>Contador: {contador}</Text>
        </View>
    )
}

export default Contador

