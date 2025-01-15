import UserClass from "./UserClass";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent component did Mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div className="body">
        <h1>About Us</h1>
        <h3>This is a food ordering app written in react FrameWork</h3>
        {/* <User
          name={"Akshay from functional Component"}
          location={"Den Hauge"}
        /> */}
        <UserClass />
      </div>
    );
  }
}


export default About;
