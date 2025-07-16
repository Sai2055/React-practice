import axios from "axios";
import { useRef, useState } from "react";

export default function Trottle() {
  const [trottleData, setTrottleData] = useState([]);
  const lastTime = useRef(0);
  console.log(trottleData);
  function handleTrottle() {
    const now = new Date().getTime();
    if (now - lastTime.current >= 2000) {
      lastTime.current = now;
      axios
        .get("https://dummyjson.com/products")
        .then((Response) => setTrottleData(Response.data.products));
    } else {
      console.log("wait");
    }
  }

  return (
    <>
      <button onClick={handleTrottle}>Click</button>
      {trottleData.length > 0 ? (
        <>
          <p>This is response data:</p>
          <ul>
            {trottleData.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Wait for 400ms or click to fetch</p>
      )}
    </>
  );
}
