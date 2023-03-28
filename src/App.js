import Heading from "./Heading/Heading";
import Input from "./Input/Input";
import Output from "./Output/Output";
import { Fragment, useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState([]);

    const retrieveInput = (input) => {
        setInputValue(prevInputValue => [...prevInputValue,input])
    }

  return (
    <Fragment>
      <Heading />
      <Input retrieveInput={retrieveInput} />
      <Output displayInput={inputValue} />
    </Fragment>
  );
};

export default App;
