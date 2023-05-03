let num = prompt('1~100 사이의 숫자를 입력해 주세요');

if (num >= 1 && num <= 100) {

  let checkPrimNum = [];
  for (let i = 2; i <= num; i++) {
    checkPrimNum.push(i);
  }

  let primFilter = [];
  for (let startNum = 2; startNum <= num; startNum++) {
    let isPrime = true;
    for (let i = 2; i < startNum; i++) {
      if (startNum % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primFilter.push(startNum);
    }
  }

  primFilter.forEach(function (val) {
    alert("소수는 " + val + "입니다.");
  });

} else {
  alert('잘못된 입력값 입니다.');
}
