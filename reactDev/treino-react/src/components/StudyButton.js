import React from 'react'

class StudyButton extends React.Component{
    state={
        value: 0,
        boxOfText: 'alex'
    }

    click = ()=>{
        this.setState({value : this.state.value+1})
    }

    render(){
        const styleButton = {width: "55px", height: "30px", marginLeft: "15px"}
        const styleInput = {height: "26px"}
        return(
            <div> 
                <button style={styleButton} onClick={this.click}>{this.state.value}</button>
                <input type="text" style={styleInput}
                value={this.state.boxOfText}
                onChange={(event)=> this.setState({boxOfText: event.target.value})}/>
                <h3>{this.state.boxOfText.toUpperCase() }</h3>
            </div>
        )
    }
}

export default StudyButton;