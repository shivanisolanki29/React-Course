import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h4 className="from">From Class</h4>
        <h2>Name: {name}</h2>
        <h4>Location: {location}</h4>
        <h5>contact: 0354872746</h5>
      </div>
    );
  }
}

export default UserClass;
