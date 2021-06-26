import { Task } from './Components'
import { Container } from './GlobalStyles'
import GlobalStyle from './GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Task name="DO HW" dueDate="21:00" >

        </Task>
      </Container>
    </div>
  );
}

export default App;
