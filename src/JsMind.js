import React, { Component } from 'react'
import JsMind from 'jsmind'
import uuid from 'uuid/v4'
import 'jsmind/style/jsmind.css'

class JsMind extends Component {
  constructor(props) {
    super(props)

    const mindId = `jsmind-${uuid()}`
    const data = this.props.data
    const options = this.props.options

    this.jsMind = { mindId, data, options }
  }
  
  componentDidMount() {
    const options = Object.assign({}, this.jsMind.options, {container: this.jsMind.mindId})
    const jm = new JsMind(options)
    jm.show(this.jsMind.data)
    this.jsMind.instance = jm
  }
  
  render() {
    return (
      <div id={this.jsMind.mindId}>
      </div>
    )
  }
}

export default JsMind
