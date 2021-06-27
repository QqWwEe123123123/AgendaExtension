import { DayPanel } from './Components'
import { Container } from './GlobalStyles'
import { Datetime } from './Components'
import GlobalStyle from './GlobalStyles'
import moment from 'moment'

import {React, useState, useEffect} from 'react'

function App() {

  const [date,setDate] = useState('');
  const [day,setDay] = useState('');
  const [dayCount, setDayCount] = useState(0);

  useEffect(()=> {
    setDay(moment().format('dddd'));
    setDate(moment().format('LL'));
  },[])

  useEffect(()=>{
    setDay(moment().add(dayCount,'days').format('dddd'));
    setDate(moment().add(dayCount,'days').format('LL'));
  },[dayCount])

  const handleBack = () => {
    setDayCount(dayCount-1);
  }

  const handleFront = () => {
    setDayCount(dayCount+1);
  }

  return (
    <div>
      <GlobalStyle/>
      <Container>
        <Datetime day={day} date={date} handleBack={handleBack} handleFront={handleFront}/>
        <DayPanel localItem={date}/>
      </Container>
    </div>
  );
}

export default App;
