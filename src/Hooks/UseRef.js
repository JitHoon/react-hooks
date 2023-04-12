import { useEffect, useRef } from "react";

const useClick = (onClick) => {
    // element ref에 들어가야할 변수
    const element = useRef();
    // useEffect(() => {return () =>{};}, []);
    useEffect(() => {
        if (element.current){
            element.current.addEventListener("click", onClick);
        }
        // clean-up function (click하지 않았을 때 event 존재하지 않음)
        return () => {
            if (element.current){
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    // span의 ref에 useRef() 변수를 넣어주어야하므로 element를 return
    return element
};

export default function UseRef() {
    const clickEvent = () => {console.log("You get and click span element using useRef")};
    // onClick 함수 전달
    const clickSpan = useClick(clickEvent);
    return (
        <section>
            {/* useRef() 변수를 반환하는 clickSpan 변수를 넣어야함 */}
            <span ref={clickSpan}>{"3. UseRef() Hook => Click me and Get html element easy"}</span>
        </section>
    );
}