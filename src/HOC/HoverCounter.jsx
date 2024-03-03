import withCounter from "./withCounter";

const HoverCounter = ({ counter, handleCounter }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button onMouseMove={handleCounter}>Counter</button>
    </div>
  );
};

export default withCounter(HoverCounter);
