import './Expense.css';



function Expense(){

    const expenseDate=new Date(2020,4,3);
    const Title='Car Insurance';
    const Amount=245.67;
    const LocationOfExpenditure='LocationOfExpenditure at insurance';
    return(
        <div>
        <div className='expense-item'>
            <div>{expenseDate.toISOString()} </div>
            <div className='expense-item__description'>
                <h2>{Title}</h2>
                <div className='expense-item__price '>
                    ${Amount}
                </div>
            </div>
        
        </div>
     <h1>{LocationOfExpenditure}</h1>
        </div>
         
    );
}
 export default Expense;