import React from 'react';

class Hours extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            relogio : new Date()
        }
        
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({ relogio : new Date()})
        },1000);
    }
    

    render() {
        return (
            <div className="hour">
                <center><p className="time">{`${this.state.relogio.getHours()}`}:{`${this.state.relogio.getMinutes()}`}:{`${this.state.relogio.getSeconds()}`}</p></center>
            </div>
        );
    }
}

export default Hours;