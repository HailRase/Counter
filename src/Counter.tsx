import s from "./Counter.module.css";
import SuperButton from "./SuperButton";
import React, {useState} from "react";

type CounterPropsType = {
    count: number | string
    minValue: number
    maxValue: number
    changeCount: () => void
    resetCount: () => void
}

export const Counter: React.FC<CounterPropsType> = (
    {
        count,
        minValue,
        maxValue,
        changeCount,
        resetCount,
    }
) => {

    const errorValue = maxValue === minValue || minValue < 0 || maxValue < 0 || minValue > maxValue
    const buttonDisabled = count === maxValue || count === "Press 'set'"
    const setValueMessage = count === "Press 'set'"

    return (
        <div className={s.counterBlock}>

            <div style={setValueMessage ? {padding: "52px 0 52px 0"} : {}} className={s.countBlock}>
                {
                    errorValue
                        ? <span className={s.errorValue}>Incorrect value</span>
                        : <span style={setValueMessage ? {fontSize: "42px"} : {}}
                                className={count === maxValue ? s.countStyleMax : s.countStyle}>{count}</span>
                }

            </div>
            <div className={s.buttonBlock}>
                <div><SuperButton style={buttonDisabled ? {opacity: "0.5"} : {}} disabled={buttonDisabled}
                                  callback={changeCount}>inc</SuperButton></div>
                <div><SuperButton style={count === "Press 'set'" || count === minValue ? {opacity: "0.5"} : {}}
                                  disabled={count === "Press 'set'" || count === minValue}
                                  callback={resetCount}>reset</SuperButton></div>
            </div>
        </div>
    )
}