import { useDispatch } from "react-redux";

function controls(){

    const dispatch = useDispatch();

    const handleIncrementButton = ()=>{
        dispatch({type: 'INCREMENT'})
    }

    const handleDecrementButton = ()=>{
        dispatch({type: 'DECREMENT'})
    }

    return <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button 
                    type="button"
                    className="btn btn-success"
                    onClick={handleIncrementButton}>
                    +1
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={handleDecrementButton}>
                    -1
                </button>
            </div>
}

export default controls;