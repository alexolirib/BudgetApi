import React from 'react';

class Input extends React.Component {

    state={
        type: 'inc',
        description: '',
        value: ''
    }

    changeDescription = (event) =>{
        this.setState({description: event.target.value})
    }

    changeNumber = (event) =>{
        this.setState({value: event.target.value})
    }

    changeValue = (event) =>{
        this.setState({type: event.target.value})
    }

    saveApp =(event) =>{
        event.preventDefault();
        console.log("Type -"+ this.state.type +"  Description -"+this.state.description + " value - " + this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.saveApp}>
                <div>
                    <div className="add">
                        <div className="add__container">
                            <select className="add__type"
                            value={this.state.type}
                            onChange={this.changeValue}>
                                <option value="inc">+</option>
                                <option value="exp">-</option>
                            </select>
                            <input type="text" className="add__description"
                                 placeholder="Add description"
                                 value={this.state.description}
                                 onChange={this.changeDescription}   />

                            <input type="number" className="add__value"
                             placeholder="Value"
                             value={this.state.value}
                             onChange={this.changeNumber}   />

                            <button className="add__btn" id="submit1" type="submit"><i className="ion-ios-checkmark-outline"></i></button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Input;