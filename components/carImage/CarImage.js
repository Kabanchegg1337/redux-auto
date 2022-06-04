import React from "react";
import { useSelector } from "react-redux";
import styles from "./CarImage.module.scss";
import CarPart from "./CarPart/CarPart";
export default function CarImage() {
    const parts = useSelector(state => state.parts.data)
  return (
    <div className={styles.image_container}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 989.12 1386.36">
            {parts.map(part => <CarPart key={part.id} part={part} />)}
        </svg>
    </div>
  );
}
