import UseInput from './Hooks/UseInput';

export default function App () {
    // use UseInput Hook
    const userName = UseInput("Dr.");
    return (
        // {...userName} same as value={userName.value} onChange={userName.onChange}
        <div>
            <span>{"1-1. useInput() Compoment => "}</span>
            <input placeholder='userName' {...userName}></input>
        </div>
    );
}