/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */
const arr = [12, 45, 622, 7223, 3, 32, 25 , 2]
console.log(typeof arr);
// Array.isArray
console.log('-----Array.isArray-----');
console.log(Array.isArray([]));
function isArray(data){
  return Object.prototype.toString.call([]).slice(8,-1).toLowerCase() === 'array'}
function isNull(data){
  return Object.prototype.toString.call([]).slice(8,-1).toLowerCase() === 'null'}

  console.log(Array.isArray(arr));
/* 요소 순환 -------------------------------------------------------------- */

// forEach

const user = {}
arr.forEach(function(item, index){
  this[index] = item}, user)


  const span = document.querySelectorAll('span');

  //이벤트 리스너를 1억개 호출하는건 좋지 않지만 그냥이해를 위한 단순 예시이다.
  console.log(this);
  span.forEach(item=>{
    item.addEventListener('click', function () {    
    })
  })

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse

// arr.reverse()
// splice
arr.splice(1, 3, 23, 5, 6)

arr.sort((a, b)=>a-b)
/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
console.log('-----map------');
arr.map(item=>{
  console.log(item);
})

let double = arr.map(item => item*2);

 let todo = ['독서하기', '탄이 산책시키기', '코테풀기'];

/* let template = todo.map(todoList=>{
  return `<li>${todoList}</li>`
}) 

template.forEach(item => {document.body.insertAdjacentHTML('beforeend', item)})

console.log(template);  */
/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
console.log(arr.indexOf(2));
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]
// find
console.log('-----find-----');
const find = users.find((item, index)=> item.id === 3)
console.log(find);
// findIndex
const findIndex = users.findIndex((item, index)=> item.id === 3)
console.log(findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* let result = arr.filter(num=> num < 100)
arr.filter(num=>) */

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];
// reduce
console.log('----reduce---');

let conclu = friends.reduce(function (acc, cur) 
  {return acc + cur.age},0)
  console.log(conclu);

  let template2 = todo.reduce((acc,cur,index)=>{
    return /* html */ acc + `<li>할일 ${index + 1} : ${cur}</li>`
  },'')
  
  console.log(template2);
  console.log(conclu);
  
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현';

console.log('----split, join----');
// split 문자 -> 배열
let nameArray = str.split(' ');
console.log(nameArray);

// join 배열 -> 문자
console.log(nameArray.join('/'));