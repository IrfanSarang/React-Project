import React, { useReducer, useEffect } from 'react';
import './Input.css';
import { validate } from '../../util/validators';


const inputReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, state.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            };
        default:
            return state;
    }
};

const Input: React.FC<any> = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        validators: props.validators,
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);




    const changeHandler = (event: any) => {
        dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators });
    };

    const touchHandler = () => {
        dispatch({ type: 'TOUCH' });
    };

    const element =
        props.element === 'input' ? (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                value={inputState.value}
                onChange={changeHandler}
                onBlur={touchHandler}
            />
        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                value={inputState.value}
                onChange={changeHandler}
                onBlur={touchHandler}
            />
        );

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && <p>{props.errorText}</p>}
        </div>
    );
};

export default Input;
