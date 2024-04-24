import { useSelector, useDispatch } from 'react-redux';
import { addIncrement , addDecrement, addReset } from '../slice/todoSlice';
import "./Body.css"
import New from './New';


const Body = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="calculator-container">
            <div className="screen">
                <div className="counter">Count: {count}</div>
                <New />
            </div>
            <div className="keypad">
                <div className="row">
                    <button onClick={() => dispatch(addIncrement("INCREMENTED BY"))} className="button">+</button>
                    <button onClick={() => dispatch(addDecrement("DECREMENTED BY"))} className="button">-</button>
                    <button onClick={() => dispatch(addReset("RESET BY"))} className="button">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Body;