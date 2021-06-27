import { DayPanel } from './Components'
import { Container } from './GlobalStyles'
import { Datetime } from './Components'
import GlobalStyle from './GlobalStyles'
import moment from 'moment'

import {React, useState, useEffect} from 'react'

let dateFormat = require("dateformat");

function App() {

  const [date,setDate] = useState('');
  const [day,setDay] = useState('');

  useEffect(()=> {
    setDay(moment().format('dddd'));
    setDate(moment().format('MMMM Do YYYY'));
  },[])

  return (
    <div>
      <GlobalStyle/>
      <Container>
        <Datetime day = {day} date ={date} />
        <DayPanel localItem={moment().format('MMMM Do YYYY')}/>
      </Container>
    </div>
  );
}

export default App;
