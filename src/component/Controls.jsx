import { useRef } from "react";
import { useDispatch } from "react-redux"
const Controls = () => {
    const inputElement=useRef()
    const dispatch = useDispatch()
    const handleIncrement = () => {
        return dispatch({ type: "INCREMENT" })

    }
    const handleDecrement = () => {
        return dispatch({ type: "DECREMENT" })
    }
    const handleAdd = () => {
        return dispatch({ type: "Add" ,payload:{num:inputElement.current.value}});
        inputElement.current.value="";
    };
    const handleSubtract = () => {
        return dispatch({ type: "Subtract" ,payload:{num:inputElement.current.value}});
        inputElement.current.value="";
    };
    const handlePrivacy = () => {
        return dispatch({ type: "Privacy"});
    }


    return <><div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>

        <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
        <button type="button" class="btn btn-danger" onClick={handlePrivacy}>Privacy</button>

    </div>
       
       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
         <input
           type="text"
           placeholder="Enter number"
           className="number-input"
           ref={inputElement}
           
         />
         <button type="button" className="btn btn-info" onClick={handleAdd}>
           Add
         </button>
 
         <button
           type="button"
           className="btn btn-danger"
           onClick={handleSubtract}
           
         >
           Subtract
         </button>
       </div>
       </>
}
export default Controls;