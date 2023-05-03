let num = prompt('1~100 사이의 숫자를 입력해 주세요');
if( num >= 1 && num <= 100 ){

    let checkPrimNum = [];
    for (var i = 0; i < num; i++) {
        checkPrimNum.push(i);
    }
    for (let startNum = 2; startNum <= num; startNum++){
        for (let i = startNum; i < startNum; i++) {
                if (startNum % i === 0) {
                    
                } else if (startNum == i){
                    let primFilter = checkPrimNum.filter(function (val) { return val == i });
                }
            }
    }
    primFilter.forEach(
        function (val) {
            alert("소수는" + val + "입니다.");
        }
    )

} else {
    alert('잘못된 입력값 입니다.')
}