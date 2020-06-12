import React from 'react';
import useSelectBoxActions from '../hooks/useSelectBoxActions'

import styles from './css/SelectBox.module.css';

type SelectBoxProps = {
  title: string;
  defaultValue: number;
  buttonText: string;
  onSelected: (selected: number) => void;
  setClose: () => void;
  setItem: () => void;
}

const SelectBox = ({ title, defaultValue, buttonText, onSelected, setClose, setItem }: SelectBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <select
        className={styles.select}
        size={5}
        onChange={(e) => onSelected(Number(e.target.value))}
      >
        {Array(100).fill('').map((el, i) => (
          i + 1 === defaultValue
          ? <option
            key={i}
            value={i + 1}
            selected
          >
            {i + 1}
          </option>
          : <option
            key={i}
            value={i + 1}
          >
            {i + 1}
          </option>
        ))}
      </select>
      <div className={styles.buttonContainer}>
        <div
          className={styles.cancelButton}
          onClick={setClose}
        >
          {buttonText}
        </div>
        <div
          className={styles.doneButton}
          onClick={setItem}
        >
          완료
        </div>
      </div>
    </div>
  );
}

export default SelectBox
