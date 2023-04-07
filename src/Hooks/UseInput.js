import PropTypes from "prop-types";
import { useState } from "react"

// Hook 구현 예시 (App.js 에서 Hook 사용 확인)
export default function UseInput (initialValue) {
    const [value, setValue] = useState(initialValue);

    // maxLen에서 10자 이하일 때 (유효성 통과) true 반환
    const maxLen = initialValue => initialValue.length <= 10;

    const onChange = (event) => {
        const etv = event.target.value;
        let willUpdate = true;
        // 유효성 통과일 때만 willUpdate true
        if (maxLen) {
            willUpdate = maxLen(etv);
        }
        // willUpdate가 true 일 때 (유효성 통과) value state update
        if (willUpdate) {
            setValue(etv);
        }
    }

    return {value, onChange}
}

UseInput.propTypes = {
    initialValue: PropTypes.string.isRequired,
};
