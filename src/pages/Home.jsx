import ChangeCounter from '../components/ChangeCounter';
import {CounterContext} from '../context/CounterContext'
import { useContext } from 'react'

const Home = () => {
  const {counter} = useContext(CounterContext);

  return (
    <>    
      <div>Home</div>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter></ChangeCounter>
    </>

  )
}

export default Home