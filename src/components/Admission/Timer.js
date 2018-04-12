import React, { Component } from 'react'
import { connect } from 'react-redux'
import Countdown from 'react-countdown-now'

import { timeIsUp } from '../../actions/contentActions'
import './circle.css'

class Timer extends Component {
  renderCountdown = ({ minutes, seconds, completed }) => {
    return (
      <span>
        <div
          className={`c100 p${Math.round(
            (minutes * 60 + seconds) / 1500
          )} small red`}
          style={{ fontSize: 70 }}
        >
          <span>
            <div className="time">
              {minutes}:{seconds}
            </div>
          </span>
          <div className="slice">
            <div className="bar" />
            <div className="fill" />
          </div>
        </div>
      </span>
    )
  }

  state = {
    timeToGo: 1500000
  }

  render() {
    return (
      <div className="timer">
        <Countdown
          onTick={() => this.setState({ timeToGo: this.state.timeToGo - 1000 })}
          date={Date.now() + this.state.timeToGo}
          onComplete={() => this.props.timeIsUp(this.props.content)}
          renderer={this.renderCountdown}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    content: state.content
  }
}

const mapDispatchToProps = dispatch => {
  return {
    timeIsUp: content => dispatch(timeIsUp(content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
