import { useState } from "react";

export default function Hello(props) {
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(props.age);
    const msg = (age > 19) ? "성인입니다." : "미성년자입니다.";

    // 중괄호 내부 변수명도 props.age가 아니라 age로 바꿔줘야 함.
    // 만약 props.age를 직접 변경하려고 하면 에러가 남.

    // msg가 갱신되는 이유는 useState로 인해 age 변경 시 리렌더링이 진행되기 때문
    return <div>
        <h2 id="name">{name} ({age}세) : {msg}</h2>
        <button onClick={()=>{
            setName((name === "Mike") ? "Jane" : "Mike");
        }}>Change Name</button>
        <button onClick={()=>{
            setAge(age+1);
        }}>Add age</button>
    </div>; 
}