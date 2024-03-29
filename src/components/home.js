/*import React, {useState, useEffect} from 'react'
import AddItem from './addItem'
import  DisplayTransaction from './displayTransaction';
import {BudgetBalance} from './balance'

function Home (props){

    const [expenses, setExpenses] = useState(0);
    const [incomes, setIncomes] = useState(0);


    useEffect(()=>{

        let expense = 0;
        let income = 0;
        for (let index = 0; index < props.list.length; index++) {
            if(props.list[index].transactionType == "Expense"){
                expense = expense + parseInt(props.list[index].amount);
                console.log(expense)
            }else if(props.list[index].transactionType == "Income"){
                income = income + parseInt(props.list[index].amount);
                console.log(income)
            }
        }
        setIncomes(income);
        setExpenses(expense);
    }, [props.list.length]);
    return(
        <div className="container">
            <BudgetBalance  list={props.list} expense = {expenses}  income = {incomes}/>
            <DisplayTransaction list={props.list}/>
            <AddItem  add = {props.add}/>
        </div>
    )
}

export default Home;*/
import React, {useState,useEffect} from 'react'
import AddItem from "./addItem";
import {DisplayTransaction} from "./displayTransaction";
import {BudgetBalance} from './balance'

function Home (props) 
{

    const [expense, setExpense] = useState(0) ;
    const [income, setIncome] = useState(0) ;


useEffect(()=>{
    let income=0
    let expense = 0;

    for (let index =0; index < props.list.length; index++) {

        if(props.list[index].transactionType == "Expense"){

            expense = expense + parseInt(props.list[index].amount );
        }else {
            income = income + parseInt(props.list[index].amount );
        }
    }

    setIncome(income);
    setExpense(expense)

},[props.list.length]);

return (
<div className="container">
<BudgetBalance expense = {expense} income = {income} />
{/*<DisplayTransaction list={props.list} />*/}
<AddItem add={props.add} />
</div>
 )
}

export default Home;