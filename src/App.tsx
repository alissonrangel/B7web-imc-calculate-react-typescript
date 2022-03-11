/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { calculateImc, levels, Level } from './helpers/imc';
import GridItem from './components/GridItem';
import leftArrowImage from './assets/leftarrow.png';

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      const level = calculateImc(heightField, weightField);
      setToShow(level);
      setDisabled(true);
    } else {
      // eslint-disable-next-line no-alert
      alert('Digite todos os campos.');
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setWeightField(0);
    setHeightField(0);
    setDisabled(false);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="logo" width="150" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado
            pela Organização Mundial de Saúde para calcular o peso ideal
            de cada pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            step="0.01"
            disabled={disabled}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 50.5 (em quilos)"
            value={weightField > 0 ? weightField : ''}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            step="0.01"
            disabled={disabled}
          />
          <button disabled={disabled} type="submit" onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          { !toShow && (
          <div className={styles.grid}>
            {levels.map((level) => (
              <GridItem key={level.title} item={level} />
            ))}
          </div>
          )}
          { toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="ícone para voltar" width={30} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
