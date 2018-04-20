import React from 'react'

const CardIncome = (props) =>{
    return(
        <div className="item clearfix" id={props.id}>
            <div className="item__description">{props.description}</div>
            <div className="right clearfix">
                <div className="item__value">{props.value}</div>
                <div className="item__delete">
                   <button className="item__delete--btn" id={props.id}><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    )
}

export default CardIncome;