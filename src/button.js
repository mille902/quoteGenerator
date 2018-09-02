import React from 'react'

class Button extends React.Component{
	render() {
		return(
			<button onClick={this.props.handleClick}>New Quote</button>
		)
	}
}



export default Button