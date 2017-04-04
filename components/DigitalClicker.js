const React = require('react')

class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = {
      timesClicked: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({ //you have to directly call the state to change it.  Actually, is this true?
      timesClicked: ++this.state.timesClicked
    }) // can't you just call "this.state.timesClicked ++""
  }

  render() {
    return(
      <div>
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = DigitalClicker
