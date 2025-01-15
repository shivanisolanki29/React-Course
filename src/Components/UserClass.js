import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count:0
    };
    // console.log("constructor");
  }
  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/shivanisolanki29");
    // const json = await data.json();

    // this.setState({count: this.count + 1} );
    console.log("component did mount");
  }

  componentDidUpdate() {
    // console.log("componenet did update");
  }
componentWillUnmount(){
  // console.log("componenet will Unmount");
}
  render() {
    // const { name, location, company, avatar_url } = this.state.userInfo;
    const { name, location } = this.props;

    // console.log("render");
    return (
      <div className="user-card">
        <button onClick={() => this.setState({ count: this.count + 1 })}>
          Count: {count}
        </button>
        {/* <img src={avatar_url} /> */}
        <h4 className="from">From Class</h4>
        <h2>Name: {name}</h2>
        <h4>Location: {location} </h4>
        <h4>Count: {count} </h4>
        <h5>contact: 0354872746</h5>
      </div>
    );
  }
}

export default UserClass;
