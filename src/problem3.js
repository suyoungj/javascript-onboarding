const ARRAY_369 = [3, 6, 9];

function getClapCount(numberStr) {
  const digits = numberStr.split('').map((n) => parseInt(n, 10));

  return digits.filter((digit) => ARRAY_369.includes(digit)).length;
}

function problem3(number) {
  let answer = 0;
  const regex369 = /[369]{1}/;

  for (let i = 1; i <= number; i++) {
    const numberStr = `${i}`;

    if (regex369.test(numberStr)) {
      answer += getClapCount(numberStr);
    }
  }

  return answer;
}

module.exports = problem3;
