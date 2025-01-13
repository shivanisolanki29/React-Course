import UserClass from "./UserClass";
import User from "./User";

const About = () => {
  return (
    <div className="body">
      <h1>About Us</h1>
      <h3>This is a food ordering app written in react FrameWork</h3>
      <User name={"Akshay from functional Component"} location={"Den Hauge"} />
      <UserClass
        name={"Akshay from class component"}
        location={"Den Hauge class"}
      />
    </div>
  );
};

export default About;
