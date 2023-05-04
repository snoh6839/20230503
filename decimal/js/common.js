let num = prompt('1~100 사이의 숫자를 입력해 주세요');

if (num >= 1 && num <= 100) {


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

    alert("소수는 " + primFilter + "입니다.");

    // primFilter.forEach(function (val) {
    // alert("소수는 " + val + "입니다.");
    // });

} else {
    alert('잘못된 입력값 입니다.');
}



if (num >= 1 && num <= 100) {

    let primFilter = Array.from({ length: num - 1 }, (_, i) => i + 2)
        .filter(n => {
            for (let i = 2; i < n; i++) {
                if (n % i === 0) {
                    return false;
                }
            }
            return true;
        });

    alert("소수는 " + primFilter + "입니다.");

} else {
    alert('잘못된 입력값 입니다.');
}
