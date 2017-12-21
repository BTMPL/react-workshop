import React from "react";

class TweetForm extends React.Component {

  state = {
    text: ''
  }

  static defaultProps = {
    onSubmit: () => {}
  }

  handleChange = (event) => this.setState({
    text: event.target.value
  })

  handleClick = () => {
    this.props.onSubmit(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <textarea value={this.state.text} onChange={this.handleChange} />
        <br />
        <button onClick={this.handleClick}>Dodaj Tweet</button>
      </div>
    )
  }
} 

export default TweetForm;