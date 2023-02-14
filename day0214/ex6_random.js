var arr=new Array();
arr.push("안녕하세요");
arr.push("오늘은 화요일입니다");
arr.push("우리는 랜덤 함수를 공부하고 있어요");
arr.push("이제 점심시간이 다가오네요");
arr.push("오늘도 화이팅!!!!");

//setInterval로 0.5초마다 위의 문자열중 한개씩
//돌아가면서 출력되도록 프로그램을 작성해주세요

function func(){
    num=parseInt(Math.random()*5);
    console.log(arr[num]);
    }
setInterval(func,1000);

