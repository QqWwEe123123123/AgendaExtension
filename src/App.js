import { DayPanel } from './Components'
import { Container } from './GlobalStyles'
import { Datetime } from './Components'
import GlobalStyle from './GlobalStyles'


function App() {
  
  return (
    <div>
      <GlobalStyle/>
      <Container>
        <DayPanel localItem={"2021:06:26"}/>
        <Datetime day = "Today "date ="January 1">
          
        </Datetime>
      </Container>
    </div>
  );
}

export default App;
