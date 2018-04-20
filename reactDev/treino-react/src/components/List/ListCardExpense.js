import React from 'react'
import CardExpense from './CardExpense'

class ListCardExpense extends React.Component{
    render(){
        const blockInternal = this.props.exp.map(element =>  <CardExpense key={element.id} {...element} />) 
        return(
            <div className="expenses">
                    <h2 className="expenses__title">Expenses</h2>
                        {blockInternal}
                    <div className="expenses__list">
                        
                    </div>
            </div>
        )
    }
}

export default ListCardExpense