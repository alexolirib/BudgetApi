import React from 'react'

const CardExpense = (props) =>{
    return(
        <div className="item clearfix" id={props.id}>
            <div className="item__description">{props.description}</div>
            <div className="item__percentage">{props.percentage}%</div>
            <div className="right clearfix">
                <div className="item__value">{props.value}</div>
                <div className="item__delete">
                    <button className="item__delete--btn"
                    onClick={props.remove}>
                        <i className="ion-ios-close-outline"
                        id={props.id}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardExpense;