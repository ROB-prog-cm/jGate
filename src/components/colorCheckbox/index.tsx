import React from "react";
import styles from './styles.module.scss'

interface IProps {
  color: ProductColor;
  onClickCheckbox: (color: ProductColor) => void;
  isChecked: boolean
}

export enum ProductColor {
  red = 'Red',
  blue = 'Blue',
  black = 'Black'
}

const ColorCheckbox = ({color, onClickCheckbox, isChecked}: IProps) => {

  const onClick = (): void => {
    onClickCheckbox(color)
  }

  return (
    <div
      onClick={onClick}
      className={`${styles.circle} ${styles[`circle${color}`]} ${isChecked && styles.circleActive}`}>
    </div>
  );
};

export default ColorCheckbox;