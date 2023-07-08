import { Component } from "react";
import "./App.css";

import AddSpendingForm from "../src/components/Form";

//practice of React properties (PROPS) (video #127)
// function WhoAmI (props) {
//   return (
//     <div>
//       <h1>My name is {props.name}, surname – {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </div>
//   )
// } -  DESTRUCTURED SYNTAX BELOW

/*functions can be props, too*/
function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>
        My name is {name()}, surname – {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  );
}

const Header = () => {
  return <h2>Hi</h2>;
};

const Field = () => {
  const styledField = {
    width: "300px",
  };
  return <input placeholder="Type here" type="text" style={styledField} />;
};

class Field2 extends Component {
  render() {
    const styledField = {
      width: "250px",
    };

    return (
      <input placeholder="Enter here, please" type="text" style={styledField} />
    );
  }
}

function Btn() {
  // const text = 'TYPE YOU MFKR'
  const res = (text) => {
    return `TYPE YOU MFKR ${text + 7}`;
  };
  const p = "some text";
  return <button>{res(p)}</button>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Header />
      <Field />
      <Btn />
      <Field2 />
      <WhoAmI
        name={() => {
          return "Al";
        }}
        surname="Ivanov"
        link="https://www.youtube.com/"
      />
      <WhoAmI
        name={() => {
          return "John";
        }}
        surname="Baton"
        link="https://www.facebook.co/"
      />
      <AddSpendingForm />
    </div>
  );
}

export { Header };
export default App;
