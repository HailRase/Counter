import React, {DetailedHTMLProps, HTMLAttributes, useState} from 'react';
import s from './SuperButton.module.css'
import './App.module.css';
type DefaultButtonPropsType = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type SuperButtonPropsType = DefaultButtonPropsType & {
  callback?: () => void
    disabled?:boolean
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({callback, ...restProps}) => {
  return (
    <div className={s.button}>
        <button onClick={callback} {...restProps}></button>
    </div>
  );
}

export default SuperButton;
