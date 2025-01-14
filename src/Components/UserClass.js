import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      count:0,
       count2:1
    }

    console.log(this.props.name +"child Constructor")
  }
  componentDidMount(){
    console.log(this.props.name +"Child component did Mount")
  }
  render() {
    const { name, location } = this.props;
    const {count,count2}=this.state

    console.log(this.props.name + "child render method");
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 * 2,
            });
          }}
        >
          Count :{count}
        </button>
        <h5>Count: {count2}</h5>
        <h4 className="from">From Class</h4>
        <h2>Name: {name}</h2>
        <h4>Location: {location}</h4>
        <h5>contact: 0354872746</h5>
      </div>
    );
  }
}

export default UserClass;
