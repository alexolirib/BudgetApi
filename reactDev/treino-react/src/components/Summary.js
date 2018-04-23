import React from 'react'

const Summary = (props) =>{
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = new Date().getMonth();
    return(
        <div>
            <div className="top">
                <div className="budget">
                    <div className="budget__title">
                        Available Budget in <span className="budget__title--month">{months[month]}</span>:
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
                            <div className="budget__expenses--percentage">{props.percentage}%</div>
                        </div>
                    </div>
                </div>
            </div>    
         </div>
    )
}

export default Summary;