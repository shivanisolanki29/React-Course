import UserClass from "./UserClass";
import User from "./User";
import React from "react";
import UserContext from "../Utils/UserContext.js";

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
        <UserContext.Consumer>
          {(data) => <h4 className="font-bold text-lg">{data.loggedInUser}</h4>}
        </UserContext.Consumer>

        {/* <User
          name={"Akshay from functional Component"}
          location={"Den Hauge"}
        />
        <UserClass
          name={"Akshay from class based Component"}
          location={"Amsterdam"}
        /> */}
      </div>
    );
  }
}


export default About;
