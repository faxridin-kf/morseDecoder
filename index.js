const input = 'R.---- T...-- E..-------- --...   .---- ...-- --... --...';

const morseNumbers = [
  '.----', //1
  '..---', //2
  '...--', //3
  '....-', //4
  '.....', //5
  '-....', //6
  '--...', //7
  '---..', //8
  '----.', //9
  '-----', //0
]

const groups = input.split(/\s{3}/);

const decodeCipher = (type, s) => {
  const morse = s.substr(1);
  switch (type) {
    case 'T':
      return morse.split('').reverse().join('')
    case 'E':
      return morse.split('').filter((_, i) => (i + 1) % 2).join('')
    case 'R':
      return morse[morse.length - 1] + morse.substr(1, morse.length - 2) + morse[0]
    default:
      return s
  }
}

const getNumByMorse = morse => {
  return morseNumbers.indexOf(morse) > 8 ? 0 : morseNumbers.indexOf(morse) + 1
}

const decodeGroup = group => group.map(c => {
  let decoded = getNumByMorse(c);
  if (['R', 'T', 'E'].indexOf(c[0]) >= 0) {
    const m = decodeCipher(c[0], c)
    decoded = getNumByMorse(m)
  }
  return decoded
});
console.log(groups.map((group) => decodeGroup(group.split(' ')).join('')).join(' '));