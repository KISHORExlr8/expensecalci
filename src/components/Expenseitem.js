import './Expenseitem.css';

function Expenseitem() {
  return (
    <div classname="expense-item">
      <div> July 6 </div>
      <div classname="expense-item__description">
        <h2> car insurance </h2>
      </div>
      <div classname="expense-item__price"> $ 200 </div>
    </div>
  );
}
export default Expenseitem;
