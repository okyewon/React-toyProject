function generateRandomNumber() {
    // 1 ~ 9까지 숫자 사용
    const condidates = [1,2,3,4,5,6,7,8,9];

    // 랜덤하게 섞어서 4자리 숫자만 이용할 예정
    const pickedNumbers = shuffle(condidates).splice(0, 4);

    return pickedNumbers;
}

function shuffle(array) {
    return array.sort(() => {
        return Math.random() - 0.5 // 50% 확률로 음수와 양수를 반환
    })
}

export default generateRandomNumber;