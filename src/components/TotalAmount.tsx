import React from 'react';
import { numberFormat } from '../utils/helper'

import styles from './css/TotalAmount.module.css';

type TotalAmountProps = {
  total: number
}

const TotalAmount = ({ total }: TotalAmountProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>합계</span>
      <span className={styles.total}>{`${numberFormat(total)}원`}</span>
      <div className={styles.nextButton}>다음</div>
    </div>
  );
}

export default TotalAmount
