import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentcount, setCount] = useState(0);
  function handleParentFun() {
    setCount((count) => count + 1);
    console.log(parentcount);
    console.log("parentrender");
  }
  const myCheck = useCallback(() => {
    console.log("Dummy function");
  }, []);
  return (
    <div>
      <button onClick={handleParentFun}>+</button>
      {parentcount}
      <Child handleParentFun={myCheck} />
    </div>
  );
};

export default Parent;
