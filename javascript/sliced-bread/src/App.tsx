import "./App.css";
import React, {useEffect, useState} from "react";
import { Wrapper } from "./components/wrapper";
import { Drink } from "./pages/drink";
import { Order } from "./pages/order";
// @ts-ignore hookrouter is not typed
import { useRoutes } from "hookrouter";

function App () {
    const [message, setMessage] = useState<string>("");

    const fetchMessage = async () => {
        const message = await fetch("/api");
        setMessage(await message.text());
    }

    useEffect( () => {
        fetchMessage().then(r => console.log(r));
    },[])

    const routes  = {
        "/": () => <Drink title={message}/>,
        "/order/:id":({id}: {id:string}) => <Order id={id} />
    }

    const match = useRoutes(routes);

  return (
      <div className="App">
          <Wrapper>
              {match || "Not found 404"}
          </Wrapper>
      </div>
  )
}
export default App
