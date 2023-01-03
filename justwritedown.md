# 무지성으로 몰랐던거 메모
## 그냥 적어버리기
> 마크다운 미리보기 단축키 : shift + cmd + v  구뜨!

- 실수를 정수로 바꾸는 다양한 방법들
  1. Math.ceil(), .floor(), .round(), trunc()
  2. parseInt()
  3. 틸트연산자 ~~
    ex)
    ```
      let num1 = 3
      let num2 = 2
      consloe.log(~~(num1/num2))
    ```
  
  => parseInt 쓰면 될듯....!

- 함수에서 사용하기 좋은 아주 좋은 녀석, arguments
    ```
    let calculateTotal = function () {
      console.log(arguments);
    };
    ```

- 진짜 배열을 만들어 주는 
    ```
    Array.from(유사배열)
    Array.prototype.slice.call(유사배열)
    ```

- 배열 합치기
    ```
    let newArray = [1, 2, 3].concat([4, 5], [6, 7])
    ```

    보다 많이 쓰는⬇️
    ```
    let li1 = [1, 2, 3]
    let li2 = [4, 5, 6]
    //전개 연산자 spread operater
    let newArray=[...li1, ...li2]
    ```
