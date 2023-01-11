import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../Services/Actions/CounterActions";
import { getAllTods } from "../Services/Actions/TodosAction";

const Couter = () => {
    // const count = useSelector(state => state.count)

    const {isLoading, todos, error} = useSelector((state) => state)
    const dispatch = useDispatch()
    // const handleIncrement = () =>{
    //     dispatch(incrementCounter())
    // }
    // const handleDecrement = () =>{
    //     dispatch(decrementCounter())
    // }
    // const handleReset = () =>{
    //     dispatch(resetCounter())
    // }
    useEffect(() =>{
      dispatch(getAllTods())
    },[])
    return (
        <div>
            {/* <h1>Welcome to react-redux</h1>
            <h2>Counter</h2>
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button> */}

            <h2>TODOS APP</h2>
            {isLoading && <h3>Loading...</h3>}
            {
                todos && todos.map(todo =>{
                    return (
                        <div>
                            <h4>{todo.id}</h4>
                            <h4>{todo.title}</h4>
                        </div>
                    )
                })
            }
            {error && <h3>{error.message}</h3>}
        </div>
    );
};

export default Couter;