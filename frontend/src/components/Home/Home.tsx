import React, { useState } from "react";
import styles from "./Home.module.css";

import Modal from "../Modal/Modal";

import logoImg from "../../assets/logo.png";
import leafImg from "../../assets/leaf.png";
import strawberryImg from "../../assets/strawberry.png";
import bananaImg from "../../assets/banana.png";
import leftVectorImg from "../../assets/leftVector.png";

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    height: "",
    desiredWeight: "",
    currentWeight: "",
    age: "",
    bloodType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const isFormComplete =
    formData.height &&
    formData.desiredWeight &&
    formData.currentWeight &&
    formData.age &&
    formData.bloodType;

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <img src={leafImg} alt="Leaf" className={styles.leaf} />
      <img src={bananaImg} alt="Banana" className={styles.banana} />
      <img src={strawberryImg} alt="Strawberry" className={styles.strawberry} />
      <img
        src={leftVectorImg}
        alt="Left Vector"
        className={styles.leftVector}
      />

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logoImg} alt="SlimMom Logo" className={styles.logo} />
          <h1 className={styles.logoText}>
            <span className={styles.slim}>lim</span>
            <span className={styles.mom}>Mom</span>
          </h1>
        </div>
        <nav className={styles.nav}>
          <a href="/login" className={styles.link}>
            Log In
          </a>
          <a href="/register" className={styles.link}>
            Registration
          </a>
        </nav>
      </header>
      <main className={styles.main}>
        <h2 className={styles.subtitle}>
          Calculate your daily calorie intake right now
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="height">Height *</label>
            <input
              type="number"
              id="height"
              placeholder="Write down your height in cm."
              value={formData.height}
              onChange={handleChange}
              step="10"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="desiredWeight">Desired weight *</label>
            <input
              type="number"
              id="desiredWeight"
              placeholder="Your desired weight in kg."
              value={formData.desiredWeight}
              onChange={handleChange}
              step="10"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="age">Age *</label>
            <input
              type="number"
              id="age"
              placeholder="Write down your age."
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="currentWeight">Current weight *</label>
            <input
              type="number"
              id="currentWeight"
              placeholder="Write down your weight in kg."
              value={formData.currentWeight}
              onChange={handleChange}
              step="10"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Blood type *</label>
            <div className={styles.radioGroup}>
              {[1, 2, 3, 4].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="bloodType"
                    value={type}
                    onChange={(e) =>
                      setFormData({ ...formData, bloodType: e.target.value })
                    }
                  />{" "}
                  {type}
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={!isFormComplete}
            onClick={handleOpenModal}
          >
            {isFormComplete ? "Start losing weight" : "Fill in your data"}
          </button>
        </form>
      </main>
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          calories={2900}
          restrictedFoods={[
            "Flour products",
            "Milk",
            "Red meat",
            "Smoked meats",
          ]}
        />
      )}
    </div>
  );
};

export default Home;
