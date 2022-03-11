/* eslint-disable no-console */
export type Level = {
  title: string;
  color: string;
  icon: 'up' | 'down';
  imc: number[];
  myImc?: number;
}

export const levels: Level[] = [
  {
    title: 'Magreza', color: '#96a3ab', icon: 'down', imc: [0, 18.5],
  },
  {
    title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.6, 24.9],
  },
  {
    title: 'Sobrepeso', color: '#e2b039', icon: 'down', imc: [25, 30],
  },
  {
    title: 'Obesidade', color: '#c3423f', icon: 'down', imc: [30.1, 99],
  },
];

export const calculateImc = (height: number, weight: number): Level | null => {
  const imc2: number = weight / (height * height);

  const level: Level[] = levels.filter((item) => imc2 > item.imc[0] && imc2 < item.imc[1]);

  console.log('imc: ', imc2);
  console.log('level: ', level);

  if (level === []) {
    return null;
  }
  return {
    ...level[0],
    myImc: imc2,
  };
};
