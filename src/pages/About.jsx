import { useCounterContext } from "../hook/useCounterContext";

const About = () => {
  const {counter} = useCounterContext();
  return (
    <>
      <div>About</div>
      <p>Valor do contador: {counter}</p>
    </>
  )
}

export default About