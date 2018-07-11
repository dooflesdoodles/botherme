/**
 *  Clientside app
 */

const React = require('react');
const ReactDOM = require('react-dom');


class Button extends React.Component {
  constructor(props) {
    super(props); // make sure the React.Component constructor is also called
    this.state = { clicked: false, result: null }; // setup state
  }

  // here we get the data from our api when requested
  async testAPI() {
    let result;
    try {
      const response = await fetch('/api/test');
      ({ result } = (await response.json()));
    } catch (e) {
      result = 'failed';
      console.log(e);
    }
    this.setState({ clicked: true, result });
  }

  render() {
    const { clicked, result } = this.state;
    if (clicked) {
      return `API call result: ${result}`;
    }
    // return html, the power of jsx
    return (
      <button type="button" onClick={() => this.testAPI()}>
        Click Me
      </button>
    );
  }
}


// TODO: make sure this still works independet of the position of the script tag in the html
const domContainer = document.querySelector('#button');
ReactDOM.render(<Button />, domContainer);
