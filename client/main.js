const React = require('react');
const ReactDOM = require('react-dom');


const elem = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    const { clicked } = this.state;
    if (clicked) {
      return 'You clicked this button!';
    }
    return elem('button', { onClick: () => this.setState({ clicked: true }) }, 'Click Me');
  }
}

const domContainer = document.querySelector('#button');
ReactDOM.render(elem(Button), domContainer);
