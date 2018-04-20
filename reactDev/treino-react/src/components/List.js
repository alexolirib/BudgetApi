import React from 'react'
import ListCardIncome from './List/ListCardIncome'
import ListCardExpense from './List/ListCardExpense'

const List = () =>{
    return(
        <div className="container clearfix">
                
                <ListCardIncome />
                
                <ListCardExpense />
                
            </div> 
    )
}

export default List;