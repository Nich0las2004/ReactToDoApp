import classes from "./Output.module.css";

const Output = (props) => {
  return (
    <div className={classes.tasks}>
      {props.displayInput.map((input, index) => (
        <div key={index} className={classes.task}>
          {input}
        </div>
      ))}
    </div>
  );
};

export default Output;
