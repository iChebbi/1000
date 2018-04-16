import React, { Component } from 'react'
import { connect } from 'react-redux'

class Choices extends Component {
  render() {
    return (
      <div className="progress">
        {this.props.content &&
          this.props.content.questions && (
            <span>
              {this.props.content.currentQuestion + 1}/{
                this.props.content.questions.length
              }
            </span>
          )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    content: state.content
  }
}

export default connect(mapStateToProps)(Choices)
