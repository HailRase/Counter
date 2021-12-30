import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter";
import {CounterSettings} from "./CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "./Redux/store";
import {setCounter, resCounter, setMax, setMin} from "./Redux/counterReducer";


function App() {

    const count = useSelector<StoreType, number | string>(state => state.count.count)
    const minValue = useSelector<StoreType, number>(state => state.count.minValue)
    const maxValue = useSelector<StoreType, number>(state => state.count.maxValue)
    const dispatch = useDispatch()



    // const [count, setCount] = useState<number | string>(0)
    // const [maxValue, setMaxValue] = useState<number>(0)
    // const [minValue, setMinValue] = useState<number>(0)



    useEffect(() => getSetting(), [])
    useEffect(() => localStorage.setItem('counterValue', JSON.stringify(count)), [count])

    const changeCount = () => {
        //setCount(+count + 1)
        dispatch(setCounter(+count + 1))
    }
    const resetCount = () => {
        //setCount(minValue)
        dispatch(resCounter(minValue))
    }

    const setSetting = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        dispatch(setCounter(minValue))
    }
    const getSetting = () => {
        let countFromLS = localStorage.getItem('counterValue')
        if (countFromLS) {
            let newCountFromLS = JSON.parse(countFromLS)
            //setCount(newCountFromLS)
            dispatch(setCounter(newCountFromLS))
        }
        let maxValueFromLS = localStorage.getItem('maxValue')
        if (maxValueFromLS) {
            let newMaxValueFromLS = JSON.parse(maxValueFromLS)
            //setMaxValue(newMaxValueFromLS)
            dispatch(setMax(newMaxValueFromLS))
        }
        let minValueFromLS = localStorage.getItem('minValue')
        if (minValueFromLS) {
            let newMinValueFromLS = JSON.parse(minValueFromLS)
            //setMinValue(newMinValueFromLS)
            dispatch(setMin(newMinValueFromLS))
        }
    }

    const changeMaxValue = (value: number) => {
        //setMaxValue(value)
        //setCount("Press 'set'")
        dispatch(setMax(value))
        dispatch(setCounter("Press 'set'"))
    }
    const changeMinValue = (value: number) => {
        //setMinValue(value)
        //setCount("Press 'set'")
        dispatch(setMin(value))
        dispatch(setCounter("Press 'set'"))
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
