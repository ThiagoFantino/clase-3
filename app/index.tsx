import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// Definir la interfaz para las props de Tarjeta
interface TarjetaProps {
  texto: string;
}

const Tarjeta: React.FC<TarjetaProps> = ({ texto }) => {
  const [presionado, setPresionado] = useState(false);

  const cambiarColor = () => {
    setPresionado(!presionado);
  };

  return (
    <Pressable
      onPress={cambiarColor}
      style={[
        styles.tarjeta,
        { backgroundColor: presionado ? 'skyblue' : 'lightgray' },
      ]}
    >
      <Text style={[styles.texto, { color: presionado ? 'white' : 'black' }]}>{texto}</Text>
    </Pressable>
  );
};

const App = () => {
  const datos = [
    { id: '1', texto: 'Tarjeta 1' },
    { id: '2', texto: 'Tarjeta 2' },
    { id: '3', texto: 'Tarjeta 3' },
  ];

  return (
    <View style={styles.container}>
      {datos.map(item => (
        <Tarjeta key={item.id} texto={item.texto} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarjeta: {
    padding: 20,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
  },
});

export default App;