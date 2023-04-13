import { useEffect } from "react";

export default function UseBeforeLeave() {
    const leave = (event) => {
        console.log(event);
        // 마우스가 왼쪽 상단으로 벗어 날 때 알림
        const {clientX, clientY} = event;
        if (clientX<=200 && clientY<=0){
            alert("You find me! Plz don't go");
        };
    };
    // useEffect + mouseleave event
    useEffect(()=>{
        document.addEventListener("mouseleave", leave)
        return ()=>{document.removeEventListener("mouseleave", leave)};
    }, []);
};