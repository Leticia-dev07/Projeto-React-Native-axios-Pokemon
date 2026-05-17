import { useEffect, useState } from 'react';

import { View, Text, Image, StyleSheet, ActivityIndicator, Button, StatusBar } from 'react-native';

import axios from 'axios';
 
export default function App() {

  const [pokemon, setPokemon] = useState(null);

  const [loading, setLoading] = useState(true);

  const [pokemonId, setPokemonId] = useState(1);
 
  useEffect(() => {

    buscarPokemon();

  }, [pokemonId]);
 
  async function buscarPokemon() {

    try {

      setLoading(true);

      const resposta = await axios.get(

        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

      );

      setPokemon(resposta.data);

    } catch (erro) {

      console.log('Erro ao buscar Pokémon:', erro);

    } finally {

      setLoading(false);

    }

  }
 
  if (loading || !pokemon) {

    return (
<View style={styles.container}>
<ActivityIndicator size="large" />
</View>

    );

  }
 
  return (
<View style={styles.wrapper}>
<StatusBar backgroundColor="transparent" translucent={false} barStyle="light-content" />
 
      <View style={styles.header}>
<Text style={styles.headerTitle}>

          ⚡ Pokédex Explorer da Le⚡
</Text>
</View>
 
      <View style={styles.container}>
<View style={styles.card}>
<Text style={styles.title}>

            {pokemon.name}
</Text>
 
          <Image

            source={{ uri: pokemon.sprites.front_default }}

            style={styles.image}

          />
 
          <Text style={styles.info}>Altura: {pokemon.height}</Text>
<Text style={styles.info}>Peso: {pokemon.weight}</Text>
 
          <View style={styles.buttonContainer}>
<Button

              title="Próximo Pokémon"

              onPress={() => setPokemonId(pokemonId + 1)}

            />
</View>
</View>
</View>
</View>

  );

}
 
const styles = StyleSheet.create({

  wrapper: {

    flex: 1,

    backgroundColor: '#f2f2f2',

  },

  header: {

    width: '100%',

    paddingTop: 45,

    paddingBottom: 20,

    backgroundColor: '#c00f0c',

    alignItems: 'center',

    borderBottomLeftRadius: 20,

    borderBottomRightRadius: 20,

  },

  headerTitle: {

    color: 'white',

    fontSize: 22,

    fontWeight: 'bold',

  },

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

  },

  card: {

    backgroundColor: 'white',

    padding: 25,

    borderRadius: 20,

    alignItems: 'center',

    width: 300,

  },

  title: {

    fontSize: 28,

    fontWeight: 'bold',

    textTransform: 'capitalize',

    marginBottom: 15,

  },

  image: {

    width: 180,

    height: 180,

    marginBottom: 15,

  },

  info: {

    fontSize: 18,

    marginBottom: 5,

  },

  buttonContainer: {

    marginTop: 20,

    width: '100%',

  },

});
 