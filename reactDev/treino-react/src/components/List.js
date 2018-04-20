import React from 'react'
import ListCardIncome from './List/ListCardIncome'
import ListCardExpense from './List/ListCardExpense'

const List = (props) =>{
    return(
        <div className="container clearfix">
                
                <ListCardIncome 
                inc={props.inc} />
                
                <ListCardExpense
                exp={props.exp} />
                
            </div> 
    )
}

export default List;