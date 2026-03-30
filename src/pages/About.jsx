import { useCounterContext } from "../hook/useCounterContext";
import { useTitleColorContext } from "../hook/useTitleColorContext";

const About = () => {
  const {counter} = useCounterContext();
  const {color, dispatch} = useTitleColorContext();
  return (
    <>
      <div>About</div>
      <p style={{ color: color }}>Valor do contador: {counter}</p>
    </>
  )
}

export default About