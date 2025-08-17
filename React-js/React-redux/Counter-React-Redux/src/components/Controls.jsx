import { useRef } from "react";
import { useDispatch } from "react-redux";

function controls(){

    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrementButton = ()=>{
        dispatch({type: 'INCREMENT'})
    }

    const handleDecrementButton = ()=>{
        dispatch({type: 'DECREMENT'})
    }

    const handleAdditionButton = ()=>{
        dispatch({
            type: 'ADD',
            payload:{
                number:inputElement.current.value
            },
        });
        inputElement.current.value = "";
    }

    const handleSubtractButton = ()=>{
        dispatch({
            type: 'SUBTRACT',
            payload:{
                number:inputElement.current.value
            },
        });
        inputElement.current.value = "";
    }

    const handlePrivacyToggle = ()=>{
        dispatch({
            type: 'PRIVACY_TOGGLE',
        });
    }

    return  <>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
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
                    <button 
                        type="button" 
                        class="btn btn-warning"
                        onClick={handlePrivacyToggle}>
                        Privacy Toggle
                    </button>
                </div>

                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
                    <input type="text" placeholder="Enter number" className="number-input" ref={inputElement}/>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleAdditionButton}>
                        Add
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={handleSubtractButton}>
                        Subtract
                    </button>
                </div>
            </>
}

export default controls;