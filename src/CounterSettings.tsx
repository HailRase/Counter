import React, {ChangeEvent} from "react";
import s from './CounterSettings.module.css'
import SuperButton from "./SuperButton";

type CounterSettingsPropsType = {
    count: number|string
    minValue: number
    maxValue: number
    setSettings: () => void
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
}

export const CounterSettings: React.FC<CounterSettingsPropsType> = (
    {
        count,
        minValue,
        maxValue,
        setSettings,
        changeMaxValue,
        changeMinValue,
    }
) => {

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMinValue && changeMinValue(JSON.parse(e.currentTarget.value))
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValue && changeMaxValue(JSON.parse(e.currentTarget.value))
    }

    const errorMinInputValue = maxValue <= minValue || minValue < 0
    const errorMaxInputValue =  maxValue <= minValue
    const setButtonDisabled = count !== "Press 'set'" || maxValue <= minValue || minValue < 0

    return (
        <div className={s.counterSettingBlock}>
            <div className={s.changeValue}>
                <div className={s.value}>
                    <span className={s.spanStyle}>
                        max value: <input type="number"
                                          className={errorMaxInputValue ? s.inputError : s.inputStyle}
                                          value={maxValue}
                                          onChange={onChangeMaxHandler}/>
                    </span>
                </div>
                <div className={s.value}>
                    <span className={s.spanStyle}>
                        min value: <input type="number"
                                          className={errorMinInputValue ? s.inputError : s.inputStyle}
                                          value={minValue} onChange={onChangeMinHandler}/>
                    </span>
                </div>
            </div>
            <div className={s.setBlock}>
                <SuperButton style={setButtonDisabled? {opacity: "0.5"}:{}} disabled={setButtonDisabled} callback={setSettings}>set</SuperButton>
            </div>
        </div>
    )
}