import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  calories: number;
  restrictedFoods: string[];
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  calories,
  restrictedFoods,
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>
          Your recommended daily calorie intake is
        </h2>
        <p className={styles.calories}>{calories} kcal</p>
        <h3>Foods you should not eat:</h3>
        <ul className={styles.listFood}>
          {restrictedFoods.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
        <button className={styles.actionButton}>Start losing weight</button>
      </div>
    </div>
  );
};

export default Modal;
