import Header from './components/Header';
import { ChakraProvider, ColorModeProvider, Container, CSSReset, extendTheme, theme, ThemeProvider } from '@chakra-ui/react'
import TodoList from './components/TodoList';
import Body from './components/Body';

function App() {
  const theme = extendTheme({
    config: {
      useSystemColorMode: true,
      initialColorMode: "dark"
    }
  })

  return (
    <div className="container">
      <ChakraProvider theme={theme}>
        <Container>
          <Header></Header>
          <Body></Body>
        </Container>
      </ChakraProvider>

    </div>
  );
}

export default App;
