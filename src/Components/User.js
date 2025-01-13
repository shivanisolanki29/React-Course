// const User = (props) => {
const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h5>contact: 0354872746</h5>
    </div>
  );
};
export default User;
