const usePreventLeave = () => {
    const beforeUnload = (event) => {
        event.preventDefault();
        // 나가기 버튼이 생성될 때 출력됨
        console.log("hello")
        // 아래는 beforeunload event 동작을 위해서 꼭 필요한 코드
        event.returnValue = "";
    };
    const prevent = () => window.addEventListener("beforeunload", beforeUnload);
    const unprevent = () => window.removeEventListener("beforeunload", beforeUnload);

    return {prevent, unprevent};
};

export default function UsePreventLeave () {
    // usePreventLeave 함수는 object를 반환하므로
    // 받아주는 변수가 key값과 동일해야한다.
    const {prevent, unprevent} = usePreventLeave();
    return (
        <samp>
            <h3>{"2. UsePreventLeave()"}</h3>
            <button onClick={prevent}>Protect</button>
            <button onClick={unprevent}>Unprotect</button>
        </samp>
    );
};