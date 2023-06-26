import { Component } from "react";
import "./App.css";

const Header = () => {
  return <h2>Hi</h2>;
};

const Field = () => {
  const styledField = {
    width: "300px"
  };
  return <input placeholder="Type here" type="text" style={styledField} />;
};

class Field2 extends Component {
  render() {
    const styledField = {
      width: "250px"
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
    </div>
  );
}

export { Header };
export default App;
