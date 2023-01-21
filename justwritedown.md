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

    보다 많이 쓰는⬇️  전개 연산자(spread operator)
    ```
    let li1 = [1, 2, 3]
    let li2 = [4, 5, 6]
    //전개 연산자 spread operater
    let newArray=[...li1, ...li2]
    ```

- 배열 요소 컨트롤 가능 array.splice()
  
  => slice와 혼동 주의

  ```
  
  ```

- array.forEach(item, index, array)
- array.find()
- array.sort()
  - 오름차순 정렬
    ```
    arr.sort((a, b) => a - b)
    ```
  - 내림차순 정렬
    ```
    arr.sort((a, b) => b - a)
    ```
- arr.reduce()




.
.
.
.
.
.
- [ ]  Call⭐️
- [ ]  reduce⭐️
- [x]  map
- [ ]  find
- [x]  forEach
- [x]  filter
- [ ]  find
- [x]  indexOf
- [x]  sort
- [ ]  join
- [ ]  slice
- [ ]  splice⭐️
    - 특정 인덱스부터 횟수만큼 제거하고 입력하는 만큼 추가할 수 있다.(delete, replace)
- [ ]  concat

- 새로운 중요한 사실을 알았다. 자바스크립트에서는 파이썬과 다르게 이하의 문법이 적용되지 않는다.
    ```
    0< angle < 90
    ```
위 코드는 이하 처럼 변경해 주어야 한다.
    
     0 < angle && angle < 90
     
     
     <img width="564" alt="image" src="https://user-images.githubusercontent.com/80018207/213848566-5cc646c4-49dd-4e44-8231-dedaa1a9ecce.png">

아니 이거 왜 안되는데;;
