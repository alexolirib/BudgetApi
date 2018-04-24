import React from 'react'
import ListCardIncome from './List/ListCardIncome'
import ListCardExpense from './List/ListCardExpense'

const List = (props) =>{
    return(
        <div className="container clearfix">
                
                <ListCardIncome 
                inc={props.inc}
                remove={props.removeBlock} />
                
                <ListCardExpense
                exp={props.exp}
                remove={props.removeBlock} />
                
            </div> 
    )
}

export default List;