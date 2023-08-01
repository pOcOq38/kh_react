import { useState } from "react";

function Ex() {
    const [id, setId] = useState("");
    const handleChange = (event) =>{
        setId(event.target.value);
    }

  
    return (
        <div>
            <input onChange={handleChange} />
            <button onClick={handleClick}  value={id}>로그인</button>
            {id}님 환영합니다.
        </div>
    );
}
export default Ex;