# ⚡ Pokédex Explorer da Le ⚡

Aplicativo mobile desenvolvido em React Native que consome a [PokéAPI](https://pokeapi.co/) para exibir informações dos Pokémon.

## 📱 Telas

- Header com título do app
- Card com nome, imagem, altura e peso do Pokémon
- Botão para navegar para o próximo Pokémon

## 🚀 Tecnologias
- [Documentação da react native](https://reactnative.dev/docs/intro-react-native-components)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/)
- [PokéAPI](https://pokeapi.co/)

## ✅ Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- [Expo Go](https://expo.dev/go) no celular (Android ou iOS)

## 📦 Instalação

**1. Clone o repositório:**
```bash
git clone https://github.com/Leticia-dev07/Projeto-React-Native-axios-Pokemon.git
```

**2. Entre na pasta do projeto:**
```bash
cd Projeto-React-Native-axios-Pokemon
```

**3. Instale as dependências:**
```bash
npm install
```

**4. Instale o Axios:**
```bash
npm install axios
```

## 5 Como rodar

**1. Inicie o servidor Expo:**
```bash
npx expo start
```

** Abra o app no celular:**
- Abra o **Expo Go** no celular
- Escaneie o **QR Code** que aparecer no terminal
- ## 🧠 Funcionalidades

### useState
O `useState` é um hook do React que serve para guardar e atualizar informações na tela.
No app usei três estados:

```js
const [pokemon, setPokemon] = useState(null);   // guarda os dados do Pokémon
const [loading, setLoading] = useState(true);   // controla se está carregando
const [pokemonId, setPokemonId] = useState(1);  // guarda o número do Pokémon atual
```

Sempre que um estado muda, o app re-renderiza automaticamente com as novas informações.

---

### useEffect
O `useEffect` é um hook que executa uma ação quando algo muda.
Aqui ele observa o `pokemonId` — toda vez que o ID muda , ele chama a função `buscarPokemon` automaticamente assim tratando para evitar pssoiveis erros e trazer legibilidade:

```js
useEffect(() => {
  buscarPokemon();
}, [pokemonId]);
```

Ou seja, quando o usuário aperta o botão "Próximo Pokémon" e o ID muda, o `useEffect` percebe e busca o novo Pokémon sozinho.

---

### buscarPokemon com Axios
O Axios é uma biblioteca que facilita fazer requisições HTTP. A função `buscarPokemon` acessa a PokéAPI passando o ID do Pokémon na URL:

```js
async function buscarPokemon() {
  try {
    setLoading(true); // ativa o loading enquanto busca

    const resposta = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );

    setPokemon(resposta.data); // salva os dados retornados pela API
  } catch (erro) {
    console.log('Erro ao buscar Pokémon:', erro); // exibe erro no console se falhar
  } finally {
    setLoading(false); // desativa o loading no final, com ou sem erro
  }
}
```

O `try/catch/finally` garante que o app não quebre se a API falhar, e o loading sempre é desativado ao final.

---

### Navegação entre Pokémon
O botão "Próximo Pokémon" simplesmente soma 1 ao ID atual:

```js
onPress={() => setPokemonId(pokemonId + 1)}
```

Isso atualiza o estado `pokemonId`, o `useEffect` detecta a mudança e chama `buscarPokemon` com o novo ID automaticamente.

---

### StatusBar e Header
O `StatusBar` com `translucent={false}` faz o Android reservar o espaço da barra de status do sistema (onde ficam o relógio, bateria e Wi-Fi), impedindo que o header vermelho sobreponha essa área :

```js
<StatusBar backgroundColor="transparent" translucent={false} barStyle="light-content" />
```

O `barStyle="light-content"` deixa os ícones da barra de status brancos, combinando com o fundo vermelho do header.

---

## 🛠️ Como o projeto foi criado

O projeto foi iniciado utilizando o **Expo CLI**, que facilita a criação e execução de apps React Native.

**1. Instale o Expo CLI globalmente:**
```bash
npm install -g expo-cli
```

**2. Crie o projeto com o template em branco:**
```bash
npx create-expo-app@latest pokemon-app --template blank
```

**3. Entre na pasta do projeto:**
```bash
cd pokemon-app
```

**4. Inicie o servidor:**
```bash
npx expo start
```

**5. Baixe o Expo Go no celular:**
- [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

**6. Escaneie o QR Code** que aparecer no terminal com o Expo Go e o app abre direto no seu celular

## Considerações finais de ajustes finais a serem feitos
apesar da tentativa do status bar ele ainda tampa o status do celular, em tese pelo menos consegui colocar uma visualização, como meta futura ajustarei para que não a tampe e fique tudo em conformidade, apesar disto esta legivel.
##  Autora

Feito por **Leticia Gabrielle** 
para fins de atividades facultativas, 
Disciplina Coding Mobile Professor: **Geraldo Gomes**
