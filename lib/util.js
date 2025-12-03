/* 앞으로 자주 사용할 코드는 이 파일에 모아놓고 나만의 라이브러리로 삼자*/

/*
매개변수가 10보다 작은 1의 자리수라면 앞에 문자"0" 붙이기
*/
function getZeroNum(n){
    let result = n;
    if(n < 10) {
        result = "0" + result;
    }

    return result;
}
/*
    -------------------------------------------
    쿠키에 들어있는 데이터 중 원하는 데이터를 접근하기 위해 key를 매개변수로 호출하면 된다
    ex) "name=zino; email=naver"와 같이 쿠키값이 구성되어 있을 경우 만약 이름을 
    가져오고 싶다면, key값의 name이라는 문자열을 전달하면 된다.
*/

function getCookie(key) {
    let arr = document.cookie.split("; ");

    for(let i = 0; i < arr.length; i++) {
        let kv = arr[i].split("=");
        if(kv[0] == key) {
            return kv[1];
        }
    }
}

// 좀 더 짧고 세련된 방식
/*
    선언적 프로그래밍 - 예를 들어 반복문을 수행 시 개발자로 하여금 반복의 과정을 제어하지 말고,
                    오히려 무엇을 할지에 집중할 수 있도록 지원하는 프로그래밍 방식..
                    전통적 방식은 반복문 수해 시 개발자 몇부터 ~ 몇까지 돌려라...
                    선언적 프로그래밍 방식에서는 개발자가 프로그래밍 언어에서 반복해라!!
    함수형 프로그래밍 - 원본 데이터를 건드리지 않음.. 원본 데이터를 훼손시키지 말자
                    배열 등 새로운 데이터를 반환하여 처리..(원본을 직접 수정하지 않음)
    고차함수형 프로그래밍 - 매개변수로 함수도 가능한 함수정의법
*/
function getCookie2(key){
    return (document.cookie.split("; ")
        .find(row=>row.startsWith(key))
        .split("=")[1]
    );
}