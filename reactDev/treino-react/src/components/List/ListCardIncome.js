import React from 'react'
import CardIncome from './CardIncome'

class ListCardIncome extends React.Component {

    blockRemove=(element)=>{
        this.props.remove(parseFloat(element.target.id), "inc");
    }

    render() {
        const blockInterno = this.props.inc.map(element => <CardIncome
            remove={this.blockRemove} 
            key={element.id}
            {...element}
              />) 
        return (
            <div className="income">
                <h2 className="icome__title">Income</h2>
                {blockInterno}
                <div className="income__list">

                </div>
            </div>
        )
    }
}

export default ListCardIncome;