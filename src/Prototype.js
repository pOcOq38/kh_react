/*컴포넌트로 만들어진 함수는 다른데서 재사용이 가능하다.
리액트는 컴포넌트의 위치를 상관하지 않는다. 
함수 아래에 만들었어도 위에서 사용 가능*/


function Animals(props) {
    return(
        <p>
            <hi>고양이와 {props.name}</hi>
        </p>
    );
}

function Prototype() {
    return (
        <div>
        <Animals name = "사자"/>
            
        </div>
    );
}
export default Prototype;