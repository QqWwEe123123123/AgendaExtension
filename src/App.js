import { Tasks } from './Components'
import { Container } from './GlobalStyles'
import { Datetime } from './Components'
import GlobalStyle from './GlobalStyles'


function App() {

  const toDos = [
    {
      "name": "DO HW",
      "dueDate": "12:00", // temporary
      "priority": "LOW"
    },
    {
      "name": "GO TO SLEEP",
      "dueDate": "23:00", // temporary
      "priority": "MEDIUM"
    },
    {
      "name": "GO TO SLEEP",
      "dueDate": "23:00", // temporary
      "priority": "HIGH"
    },
  ];
  
  return (
    <div>
      <GlobalStyle/>
      <Container>
        <Datetime day = "Today "date ="January 1">
          
        </Datetime>
        <Tasks list={toDos}/>
      </Container>
    </div>
  );
}

export default App;
