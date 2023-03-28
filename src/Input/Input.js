import classes from "./Input.module.css";
import { Fragment } from "react";
import { useState } from "react";

const Input = (props) => {
  const [textValue, setTextValue] = useState("");

  const onValueChange = (event) => {
    setTextValue(event.target.value);
  };

  const buttonChange = () => {
    if (textValue == "") {
      alert("You need to write your task!");
    } else {
      console.log(textValue);
      props.retrieveInput(textValue);
      setTextValue("");
    }
  };

  return (
    <Fragment>
      <input type="text" value={textValue} onChange={onValueChange} />
      <button type="button" className={classes.addBtn} onClick={buttonChange}>
        Add
      </button>
    </Fragment>
  );
};

export default Input;
