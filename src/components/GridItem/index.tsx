/* eslint-disable spaced-comment */
/* eslint-disable react/function-component-definition */
import { Level } from '../../helpers/imc';
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
  item: Level;
}

const GridItem = ({ item }: Props) => (
  <div className={styles.main} style={{ backgroundColor: item.color }}>
    <div className={styles.gridIcon}>
      <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30" />
    </div>
    <div className={styles.gridTitle}>{item.title}</div>
    {item.myImc && (
    <div className={styles.yourImc}>
      Seu IMC é de:
      {' '}
      {item.myImc.toFixed(2)}
      {' '}
      Kg/m2
    </div>
    )}
    <div className={styles.gridInfo}>
      IMC está entre
      {' '}
      <strong>{item.imc[0]}</strong>
      {' '}
      e
      {' '}
      <strong>{item.imc[1]}</strong>
    </div>
  </div>
);

export default GridItem;
