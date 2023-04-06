import { useReducer } from "react"

const intialInputState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action)=>{
if(action.type === 'INPUT')return {value: action.value, isTouched: state.isTouched}
if(action.type === 'BLUR')return {value: state.value, isTouched: true}
}

const useInput = (validateValue)=>{
   const [inputState, dispatch] = useReducer(inputStateReducer, intialInputState);
   const valueIsValid = validateValue(inputState.value)
   const hasError = !valueIsValid && inputState.isTouched;

   const valueChangeHandler = e => {
    dispatch({type: 'INPUT', value: e.target.value})
   }
   const inputBlurHandler = e => {
    dispatch({type: 'BLUR'})
   }
   return {value: inputState.value, hasError, valueChangeHandler, inputBlurHandler, isValid: valueIsValid}
}

export default useInput;