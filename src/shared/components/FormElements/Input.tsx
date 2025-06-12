import React, { useEffect, useReducer } from "react";

import "./Input.css";
import { validate } from "../../util/validators";

const inputReducer = (
  state: any,
  action: { type: any; val: any; validators: any }
) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input: React.FC<any> = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: <props className="initialValid"></props> || false,
  });

const{id, onInput} =props;
const {value, isValid}=inputState;


  useEffect(() => {
    props.onInput(props.id, inputState.value, inputState.isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event: any) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
      val: undefined,
      validators: undefined,
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.id}
        placeholder={props.holder}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    );

  return (
    <div
      className={`form-control ${
        inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
