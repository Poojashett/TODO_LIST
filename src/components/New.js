import { useSelector} from 'react-redux';

const New = () => {
    const count = useSelector(state => state.counter.value);
    const string = useSelector(state => state.counter.actionString)
    return (
        <div>
            <p>THE COUNTER IS {string}  {count}</p>
        </div>
    )
}
export default New;