import React from 'react';

import styles from './css/Item.module.css';

type SelectBoxProps = {
  title: string;
  count: number;
  buttonText: string;
  onSelected: (selected: { item: string, count: number }) => void
}

const SelectBox = ({ title, count, buttonText, onSelected }: SelectBoxProps) => {
  return (
    <div className={styles.container}>
      <div>{title}</div>
      <select size={10}>
        {Array(100).fill('').map((el, i) => (
          i + 1 === count
          ? <option
            key={i}
            value={i + 1}
            onClick={() => onSelected({ item: title, count: i + 1 })}
            selected
          >
            {i + 1}
          </option>
          : <option
            key={i}
            value={i + 1}
            onClick={() => onSelected({ item: title, count: i + 1 })}
          >
            {i + 1}
          </option>
        ))}
      </select>
      <div>
        <div>{buttonText}</div>
        <div >완료</div>
      </div>
    </div>
  );
}

export default SelectBox
