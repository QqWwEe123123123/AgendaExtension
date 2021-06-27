import { DayPanel } from './Components'
import { Container } from './GlobalStyles'
import GlobalStyle from './GlobalStyles'

function App() {
  
  return (
    <div>
      <GlobalStyle/>
      <Container>
        <DayPanel localItem={"2021:06:26"}/>
      </Container>
    </div>
  );
}

export default App;
