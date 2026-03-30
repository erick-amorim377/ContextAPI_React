import ChangeCounter from '../components/ChangeCounter';

import { useCounterContext } from '../hook/useCounterContext';

import { useTitleColorContext } from '../hook/useTitleColorContext';
const Home = () => {
  const {counter} = useCounterContext();
  const {color, dispatch} = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  }

  return (
    <>    
      <div>Home</div>
      <p style={{ color: color }}>Valor do contador: {counter}</p>
      <ChangeCounter />
      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("BLUE")}>Azul</button>
    </>

  )
}

export default Home