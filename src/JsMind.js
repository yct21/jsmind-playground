import React, { Component } from 'react'
import JsMindLib from 'jsmind'
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
    console.log(this.jsMind.data)
    const options = Object.assign({}, this.jsMind.options, {container: this.jsMind.mindId})
    const jm = new JsMindLib(options)
    jm.show(this.jsMind.data)
    // jm.show({})
    this.jsMind.instance = jm
  }
  
  render() {
    return (
      <div id={this.jsMind.mindId} style={{height: 500}}>
      </div>
    )
  }
}

export default JsMind
