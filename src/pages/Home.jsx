import ChangeCounter from '../components/ChangeCounter';

import { useCounterContext } from '../hook/useCounterContext';

import { useTitleColorContext } from '../hook/useTitleColorContext';
const Home = () => {
  const {counter} = useCounterContext();
  const {color} = useTitleColorContext();

  return (
    <>    
      <div>Home</div>
      <p style={{ color: color }}>Valor do contador: {counter}</p>
      <ChangeCounter></ChangeCounter>
    </>

  )
}

export default Home