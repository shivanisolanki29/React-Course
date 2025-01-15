import { useEffect, useState } from "react";

// const User = (props) => {
const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //api call
    console.log("useEffect");
  }, [count]);

  return (
    <div className="user-card">
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <p>{count}</p>
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h5>contact: 0354872746</h5>
    </div>
  );
};
export default User;
