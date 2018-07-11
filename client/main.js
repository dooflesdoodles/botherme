/**
 *  Clientside app
 */

const React = require('react');
const ReactDOM = require('react-dom');


const elem = React.createElement;


// TODO: look for react best practices, I'm not sure if ReactDOM is the best choice


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


// TODO: make sure this still works independet of the position of the script tag in the html
const domContainer = document.querySelector('#button');
ReactDOM.render(elem(Button), domContainer);
