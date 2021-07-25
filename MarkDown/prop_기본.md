## 1. propsType 종류
<table>
    <thead>
    </thead>
    <tbody>
        <tr>
            <th>array</th>
            <td>배열</td>
        </tr>
        <tr>
            <th>arrayOf(다른 PropType)</th>
            <td>특정 PropType으로 이루어진 배열을 의미한다.  예를들어 arrayOf(PropTypes.number())는 숫자로 이루어진 배열을 의미한다.</td>
        </tr>
        <tr>
            <th>bool</th>
            <td>true 혹은 false 값</td>
        </tr>
        <tr>
            <th>func</th>
            <td>함수</td>
        </tr>
        <tr>
            <th>number</th>
            <td>숫자 값</td>
        </tr>
        <tr>
            <th>object</th>
            <td>객체</td>
        </tr>
        <tr>
            <th>string</th>
            <td>문자열</td>
        </tr>
        <tr>
            <th>symbol</th>
            <td>ES6의 Symbol</td>
        </tr>
        <tr>
            <th>node</th>
            <td>렌더링 할 수 있는 모든 것(숫자, 문자열, JSX코드. children도 node PropType임)</td>
        </tr>
        <tr>
            <th>instanceOf(클래스)</th>
            <td>특정 클래스의 인스턴스 (instanceOf(MyClass))</td>
        </tr>
        <tr>
            <th>oneOf(['dog', 'cat'])</th>
            <td>주어진 배열 요소 중 하나의 값</td>
        </tr>
        <tr>
            <th>oneOfType([React.PropTypes.string, PropTypes.number])</th>
            <td>주어진 배열 안의 종류 중 한가지</td>
        </tr>
        <tr>
            <th>objectOf(React.PropTypes.number)</th>
            <td>객체의 모든 키 값이 인자로 주어진 propType인 객체</td>
        </tr>
        <tr>
            <th>shape({ name: PropTypes.string, num: PropTypes.number })</th>
            <td>주어진 스키마를 가진 객체</td>
        </tr>
        <tr>
            <th>any</th>
            <td>아무 정보</td>
        </tr>
    </tbody>
</table>

