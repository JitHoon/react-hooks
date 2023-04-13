import { useEffect, useRef } from "react";

const useFadeIn = (duration=1, delay=0) => {
    const element = useRef();
    useEffect(() => {
        if (element.current){
            const {current} = element;
            current.style.transition=`opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity=1;
        };
        return () => {};
    }, []);
    return {ref: element, style: {opacity: 0}};
};

export default function UseFadeIn() {
    const sampFadeIn = useFadeIn(20);
    const hFadeIn = useFadeIn(20);
    return(
        <samp {...sampFadeIn}>
            <h3 {...hFadeIn}>{"5. UseFadeIn()"}</h3>
        </samp>
    );
};