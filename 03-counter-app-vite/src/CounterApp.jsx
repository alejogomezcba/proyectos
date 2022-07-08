import {useState} from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = (event, value) => {
        setCounter(counter+1);
    }

    const handleRem = (event, value) => {
        setCounter(counter-1);
    }
    const handleRes = (event, value) => {
        setCounter(value=0);
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleRem }> -1 </button>
        <button onClick={ handleRes }> Reset </button>
        </>
    )
}

CounterApp.protoTypes = {
value : PropTypes.number.isRequired
}
