import ChangeCounter from '../components/ChangeCounter';
import { useCounterContext } from '../hook/useCounterContext';
const Home = () => {
  const {counter} = useCounterContext();

  return (
    <>    
      <div>Home</div>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter></ChangeCounter>
    </>

  )
}

export default Home