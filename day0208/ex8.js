//두 수를 인자로 받아서 더한 값을 반환하는 함수 3가지
function add1(su1,su2){
    return su1+su2;
}

var add2=function(su1,su2){
    return su1+su2;
}
//화살표 함수에서 리턴하는 한문장만 있으면 return 생략 가능
var add3=(su1,su2)=>su1+su2;

//변수에 받아서 출력
var sum1=add1(5,6);
console.log(sum1);

//반환값 바로 출력
console.log(add2(4,6));
console.log(add3(10,20));