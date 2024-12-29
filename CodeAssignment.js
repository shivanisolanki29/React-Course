import React from "react";
import ReactDOM from "react-dom/client";

//using Header component
const Header = () => (
  <div className="title" style={{}}>
    <img
      className="logo-image"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&s"
    />
    <label className="label">
      Search: <input name="myInput" />
    </label>
    <img
      className="user-image"
      src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
      alt="user icon"
    />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(JsxHeading1);
root.render(<Header />);

//Assignment 01
//(A) import React from "react";
// import ReactDOM from "react-dom/client";

// const DivContainer = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", {}, "Hello World"),
//   React.createElement("h2", {}, "Hello World"),
//   React.createElement("h3", {}, "Hello World"),
// ]);
// const heading = React.createElement("h1", {}, "Hello World");

// //react element using Jsx
// const JsxHeading1 = (
//   <div className="title">
//     <h1>Namaste React1</h1>
//     <h2>Namaste React1</h2>
//     <h3>Namaste React1</h3>
//   </div>
// );

// //using function component
// const JsxHeading = () => (
//   <div className="title">
//     <h1>Namaste React</h1>
//     <h2>Namaste React</h2>
//     <h3>Namaste React</h3>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(JsxHeading1);
// root.render(<JsxHeading />);
