//난수 중복처리
var nums=new Array(5);
for(let i=0;i<nums.length;i++){
    //i번지 배열에 1~10사이의 난수값 저장
    nums[i]=parseInt(Math.random()*10)+1;

    //중복처리: 이전 배열에 같은값이 있을 경우 다시 구함
    for(let j=0;j<i;j++){
        if(nums[i]==nums[j]){
            i--; //break후에 i++로 이동했을때 제자리로 갈 수 있도록
            break; // 현재 for문에서 나감 >> i++로 감
        }
    }
}
console.log(nums);