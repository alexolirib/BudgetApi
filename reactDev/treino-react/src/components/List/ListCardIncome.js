import React from 'react'
import CardIncome from './CardIncome'

class ListCardIncome extends React.Component {



    render() {
        const blockInterno = this.props.inc.map(element => <CardIncome key={element.id} {...element}  />) 
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