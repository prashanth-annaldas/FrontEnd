import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from '../store/Counter';
import { privacyActions } from '../store/Privacy';

function controls(){

    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrementButton = ()=>{
        dispatch(counterActions.increment());
    }

    const handleDecrementButton = ()=>{
        dispatch(counterActions.decrement());
    }

    const handleAdditionButton = ()=>{
        dispatch(counterActions.addtion({
                number: inputElement.current.value
            },
        ));
        inputElement.current.value = "";
    }

    const handleSubtractButton = ()=>{
        dispatch(counterActions.subtraction({
                number: inputElement.current.value
            },
        ));
        inputElement.current.value = "";
    }

    const handlePrivacyToggle = ()=>{
        dispatch(privacyActions.toggle());
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