import { useRef } from "react";

const useFullScreen = () => {
    const element = useRef();
    const fullScreen = () => {
        if (element.current){
            element.current.requestFullscreen();
        };
    };
    return {element, fullScreen}
};

export default function UseFullScreen () {
    const {element, fullScreen} = useFullScreen();
    return (
        <samp>
            <h3>{"7. UseFullScreen()"}</h3>
            <img ref={element} src="../../logo512.png" alt="logo512" width="250" />
            <button onClick={fullScreen}>Make full screen</button>
        </samp>
    );
};