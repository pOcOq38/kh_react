import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  /*
  npx => 폴더 설치, 초기에 패키지를 최신으로 업데이트
  npm start -> 리액트 실행 
  script 작성
  css, javascript 활동을 적는다. 
  변수 선언, 상태 변경은 여기에서 진행해준다. 
  기능 작동 위해 만드는 것

  useState : 상태값 관리자, 초기값 세팅/변환 가능
  */ 
 
//let count = 0;
//const [useState(0), 변환될 값] = useState(초기값) 
// useState([]) : 빈 값

//state : 
//     - 상태 변화 값, 컴포넌트 내부에서 선언한 값
//     - setState를 통해서 내부 값을 변경할 수 있다.

  const [number, setNumber] = useState(100);
  const [time, setTime] = useState(0);

  const updateTime = () =>{
    setTime(time + 1);
  }

  const plus = () => {
    //값이 증가하는 자바스크립트
    //count = count + 1

    setNumber(number + 1);
    console.log(number);
  }

  const minus = () => {
    //값이 감소하는 자바스크립트
    //count = count - 1

    setNumber(number - 1);
    console.log(number);
  }

  return (
    /*html만 적는다.
    화면에 보이게 뿌려줌
    return 안에 div는 한 번만 사용*/
    <div className="App"> 

    {/* return 안에서의 주석 
     <div className="App">은 <html>태그와 비슷한 역할을 한다.
     리액트에서 onClick={}으로 표기 

     위에서 변수 선언한 값을 가져오기 위해서는 {변수} 
    */}

    <h2>{number}</h2>
    <button onClick={plus}> + </button>
    <button onClick={minus}> - </button>
   
    <h2>{time}시</h2>
    <button onClick={updateTime}> 시간올리기 </button>
    </div>
  );
}

export default App;
