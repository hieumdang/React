import React from 'react'
class Title extends Component {
  render() {
     return <h1> {this.props.name} also known as {this.props.otherName} </h1>
  }
}  
export default NameCalling
