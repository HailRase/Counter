import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter";
import {CounterSettings} from "./CounterSettings";


function App() {

    const [count, setCount] = useState<number | string>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)

    useEffect(() => getSetting(), [])
    useEffect(() => localStorage.setItem('counterValue', JSON.stringify(count)), [count])

    const changeCount = () => {
        setCount(+count + 1)
    }
    const resetCount = () => {
        setCount(minValue)
    }

    const setSetting = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        setCount(minValue)
    }
    const getSetting = () => {
        let countFromLS = localStorage.getItem('counterValue')
        if (countFromLS) {
            let newCountFromLS = JSON.parse(countFromLS)
            setCount(newCountFromLS)
        }
        let maxValueFromLS = localStorage.getItem('maxValue')
        if (maxValueFromLS) {
            let newMaxValueFromLS = JSON.parse(maxValueFromLS)
            setMaxValue(newMaxValueFromLS)
        }
        let minValueFromLS = localStorage.getItem('minValue')
        if (minValueFromLS) {
            let newMinValueFromLS = JSON.parse(minValueFromLS)
            setMinValue(newMinValueFromLS)
        }
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setCount("Press 'set'")
    }
    const changeMinValue = (value: number) => {
        setMinValue(value)
        setCount("Press 'set'")
    }


    return (
        <div className={s.app}>
            <div className={s.counterSettingBlock}>
                <CounterSettings
                    count={count}
                    minValue={minValue}
                    maxValue={maxValue}
                    setSettings={setSetting}
                    changeMaxValue={changeMaxValue}
                    changeMinValue={changeMinValue}
                />
            </div>
            <div className={s.counterBlock}>
                <Counter
                    count={count}
                    minValue={minValue}
                    maxValue={maxValue}
                    changeCount={changeCount}
                    resetCount={resetCount}
                />
            </div>
        </div>
    );
}

export default App;
