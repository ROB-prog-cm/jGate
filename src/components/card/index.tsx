"use client";
import React, {useState} from "react";
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from "next/link";
import {ProductColor} from "../colorCheckbox";
import ColorCheckbox from "../colorCheckbox";

interface IProps {
  image: string;
  price: number;
  title: string;
  subtitle: string;
}

const Card = ({image, price, title, subtitle}: IProps) => {
  const [colorProduct, setColorProduct] = useState(ProductColor.red);

  const changeColorProduct = (color: ProductColor): void => {
    setColorProduct(color)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.center}>
        <Image
          width={260}
          height={260}
          className={styles.image}
          src={image}
          alt={'headphones'}
        />
      </div>
      <div className={styles.description}>
        <span className={styles.price}>${price}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
      <div className={styles.radioButtonContainer}>
        <ColorCheckbox color={ProductColor.red} isChecked={colorProduct === ProductColor.red}
                       onClickCheckbox={changeColorProduct}/>
        <ColorCheckbox color={ProductColor.blue} isChecked={colorProduct === ProductColor.blue}
                       onClickCheckbox={changeColorProduct}/>
        <ColorCheckbox color={ProductColor.black} isChecked={colorProduct === ProductColor.black}
                       onClickCheckbox={changeColorProduct}/>
      </div>
      <div className={styles.center}>
        <button className={`${styles.btn} ${styles.btnActive}`}>Add to cart</button>
        <button className={styles.btn}>Buy now</button>
      </div>
      <Link className={styles.link} href="https://nextjs.org/">Read reviews</Link>
    </div>
  );
};

export default Card;