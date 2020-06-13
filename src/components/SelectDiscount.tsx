import React from 'react';


import styles from './css/SelectBox.module.css';

type SelectDiscountProps = {
  title: string;
}

const SelectBox = ({
  title
}: SelectDiscountProps) => {

  return (
    <div className={styles.container}>
      {title}
    </div>
  );
}

export default SelectBox
