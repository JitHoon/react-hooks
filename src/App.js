import UseInput from './Hooks/UseInput';

export default function App () {
    // use UseInput Hook
    const userName = UseInput("Dr.");
    return (
        // {...userName} same as value={userName.value} onChange={userName.onChange}
        <samp>
            <h4>{"1-1. UseInput() Compoment"}</h4>
            <input placeholder='userName' {...userName}></input>
        </samp>
    );
}