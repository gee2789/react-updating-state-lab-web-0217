const React = require('react')

class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }
    this.bitRateClick = this.bitRateClick.bind(this)
    this.resolutionClick = this.resolutionClick.bind(this)
  }

  bitRateClick(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  resolutionClick(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: `720p`
        })
      })
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.bitRateClick}>Toggle Bitrate</button>
        <button className="resolution" onClick={this.resolutionClick}>Toggle Resolution</button>
      </div>
    )
  }
}
module.exports = YouTubeDebugger
