import { useCounterContext } from "../hook/useCounterContext";
import { useTitleColorContext } from "../hook/useTitleColorContext";

const Products = () => {
  const {counter} = useCounterContext();
  const {color, dispatch} = useTitleColorContext();
  return (
    <>
      <div>Products</div>
      <p style={{ color: color }}>Valor do contador: {counter}</p>
    </>
  )
}

export default Products