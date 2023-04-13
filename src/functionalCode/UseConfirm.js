const useConfirm = (message='', callback) => {
    if (typeof callback !== "function"){
        return;
    };
    const confirmAction = () => {
        // window.confirm() : 확인과 취소 두 버튼을 가지며 메시지 대화 상자를 띄운다.
        // 대화 상자에서 확인을 누를 시 callbak 함수 호출
        if (window.confirm(message)){
            callback();
        };
    };
    return confirmAction;
};

export default function UseConfirm () {
    const callbackDelete = () => console.log("Delete the World...");
    const deleteWorld = useConfirm("Are you sure???" , callbackDelete);
    return (
        <samp>
            <h3>{"1. UseConfirm()"}</h3>
            <button onClick={deleteWorld}>Delete the world</button>
        </samp>
    );
};