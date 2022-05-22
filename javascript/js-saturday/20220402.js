// # 함수

const func1=(name)=>{
    return name.length
};

const qs=(className)=>{
    const res=document.querySelectorAll(`.${className}`);
    return res;
}

// 코드 조각을 재사용할 수 있도록 한 덩어리로 묶는 것
// input을 처리해서 output을 출력
// 리턴값이 있으면 일반적으로 변수에 담아 사용

//리터럴 : 사람이 이해할 수 있는 최소한의 범위

// ## 함수 정의
//1. 선언문
function add(x,y){
    return x+y
} // 실행x
console.log(add(2,5)); 

