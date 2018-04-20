import React from 'react'

const Summary = (props) =>{
    return(
        <div>
            <div className="top">
                <div className="budget">
                    <div className="budget__title">
                        Available Budget in <span className="budget__title--month">%Month%</span>:
                    </div>
                    
                    <div className="budget__value">{props.amount}</div>
                    
                    <div className="budget__income clearfix">
                        <div className="budget__income--text">Income</div>
                        <div className="right">
                            <div className="budget__income--value" id="IncomeId">{props.inc}</div>
                            <div className="budget__income--percentage">&nbsp;</div>
                        </div>
                    </div>
                    
                    <div className="budget__expenses clearfix">
                        <div className="budget__expenses--text">Expenses</div>
                        <div className="right clearfix">
                            <div className="budget__expenses--value" id="ExpensesId">{props.exp}</div>
                            <div className="budget__expenses--percentage">45%</div>
                        </div>
                    </div>
                </div>
            </div>    
         </div>
    )
}

export default Summary;