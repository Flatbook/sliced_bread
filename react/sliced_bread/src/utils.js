export const getRandomSeinfeldCharacter = () => {
  const names = [
    'Jerry Seinfeld',
    'Elaine Benes',
    'George Costanza',
    'Cosmo Kramer',
    'Jackie Chiles',
    'J. Peterman',
  ];

  return names[Math.floor(Math.random() * names.length)].split(' ');
};

export const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};
