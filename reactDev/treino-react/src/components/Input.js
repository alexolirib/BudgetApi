import React from 'react';

class Input extends React.Component {

    changeHandle = (event) => {
        this.props.handleChange(event.target.name, event.target.value)
    }

    saveApp = (event) => {
        event.preventDefault();
        this.descriptionInput.focus();
        this.props.submit();
        //console.log("Type -"+ this.state.type +"  Description -"+this.state.description + " value - " + this.state.value)

    }

    render() {
        return (
            <form onSubmit={this.saveApp}>
                <div>
                    <div className="add">
                        <div className="add__container">
                            <select className="add__type"
                                name="type"
                                value={this.props.type}
                                onChange={this.changeHandle}>
                                <option value="inc">+</option>
                                <option value="exp">-</option>
                            </select>
                            <input type="text" className="add__description"
                                required
                                name="description"
                                placeholder="Add description"
                                ref={(inputText)=>this.descriptionInput = inputText}
                                value={this.props.description}
                                onChange={this.changeHandle} />

                            <input type="number" className="add__value"
                                required
                                name="value"
                                placeholder="Value"
                                value={this.props.value}
                                onChange={this.changeHandle} />

                            <button className="add__btn" id="submit1" type="submit"><i className="ion-ios-checkmark-outline"></i></button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Input;