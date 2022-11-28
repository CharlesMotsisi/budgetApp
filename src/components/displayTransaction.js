/*import React from 'react'
import '../css/displayTransaction.css'

function DisplayTransaction (props){
    return(
        <div>

            <h1 style={{paddingTop:"5%"}}>Transaction History</h1>
            {props.list.map((item) =>(
                <div style ={{marginTop:"5%"}}>

                    {item.transactionType == "Expense" ? <div className="dispItems">
                       <div>
                           <h1>{item.items}</h1>
                       </div>
                       <div>
                           <h1 className="items">{item.amount}</h1>   
                       </div>
                       <div className="expense-line"></div>
                   </div>  :(<div className="dispItems">
                       <div>
                           <h1>{item.amount}</h1>
                       </div>
                       <div>
                           <h1 className="items">{item.items}</h1>   
                       </div>
                       <div className="income-line"></div>
                   </div>
                )}
                   
                   
               </div>
            ))}
        </div>
    )
}

export default DisplayTransaction;*/
import React from 'react';

import '../css/displayTransaction.css'

function DisplayTransaction (props){
return (
<div>

    <h1 style={{paddingTop:"5%"}}>Transaction history</h1>
    {props.list.map((item) => (
        <div>
             {item.transactionType == "Expense" ? <div className="transaction-item">
                <div style= {{marginTop:"5%"}}>
            <h4 style={{paddingLeft: '12px',paddingTop: '25px'}}>
                {item.items}</h4>
            </div>
            <div>
            <h4 style={{paddingLeft: '290px',paddingTop: '25px'}}>
            {item.amount}
            </h4>
            </div>
            <div className="expense-line"></div>
        </div>  
        :
        <div className="transaction-item">
                <div>
            <h4 style={{paddingLeft: '12px',paddingTop: '25px'}}>
                {item.amount}</h4>
            </div>
            <div>
            <h4 style={{paddingLeft: '290px',paddingTop: '25px'}}>{item.item}
            </h4>
            </div>
        </div> 
}       <div className="income-line"></div>
        </div>
        
    ))}
</div>

)

}

export default DisplayTransaction;