import { useState, useEffect } from "react";

const UpdateTitle = (initialTile) => {
    const [title, setTitle] = useState(initialTile);
    const updateTitle = () => {
        const headTitle = document.querySelector("title");
        headTitle.innerText = title
    };
    // title이 변경될 때 마다 updateTitle 함수 실행
    useEffect(updateTitle, [title]);
    return setTitle
};

export default function UseEffect() {
    // UpdateTitle()에서 modifier 함수인 setTitle을 반환받으므로
    const titleUpdator = UpdateTitle("Loading...");
    // titleUpdator("Home") = setTitle("Home")과 같은 의미
    setTimeout(() => titleUpdator("Home"), 5000);
    return (
        <section>
            <span>{"2. useEffect() Hook => Look at Title (Loading... -> Home)"}</span>
        </section>
    );
}