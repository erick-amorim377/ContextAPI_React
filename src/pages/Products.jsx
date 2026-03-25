import { useCounterContext } from "../hook/useCounterContext";
const Products = () => {
  const {counter} = useCounterContext();
  return (
    <>
      <div>Products</div>
      <p>Valor do contador: {counter}</p>
    </>
  )
}

export default Products