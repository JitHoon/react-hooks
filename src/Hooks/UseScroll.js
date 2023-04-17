import { useEffect, useState } from "react";

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = () => {
        setState({x: window.scrollX, y:window.scrollY });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state
};

export default function UseScroll() {
    const { y } = useScroll();
    return(
        <samp>
            <h3 style={{color: y > 1200 ? "red" : "blue"}}>
                {"6. UseScroll()"}
            </h3>
        </samp>
    );
};