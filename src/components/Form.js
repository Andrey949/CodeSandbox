import { Component } from "react";

class AddSpendingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      value: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { title, value } = this.state;

    return (
      <div>
        <h3>That's how much money I've wasted:</h3>
        <form>
          <input
            type="text"
            placeholder="What?"
            name="title"
            value={title}
            onChange={this.onValueChange}
          />
          <input
            type="text"
            placeholder="How much?"
            name="value"
            value={value}
            onChange={this.onValueChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default AddSpendingForm;
