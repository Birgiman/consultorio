import { ThemeProvider } from 'styled-components';
import light from '../../assets/styles/themes/light';
import GlobalStyles from '../../assets/styles/global';
import Home from '../pages/Home';
import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
