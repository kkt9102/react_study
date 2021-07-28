# 이벤트 이름은 카멜 표기법으로 작성하기(대소문자!)
<table>
    <thead>
        <tr>
            <th>html</th>
            <th>React</th>
            <th>이벤트</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>onclick</td>
            <td>onClick</td>
            <td>클릭시 이벤트</td>
        </tr>
        <tr>
            <td>onkeyup</td>
            <td>onKeyUp</td>
            <td></td>
        </tr>
    </tbody>
</table>

# 이벤트에 실행 할 JavaScript Code를 전달하는 것이 아닌 함수 형태의 값을 전달!

# DOM 요소(엘리먼트)에만 이벤트를 설정할 수 있다.
    - div, button, input, form, span 등의 DOM 요소(엘리먼트)에는 이벤트를 설정할 수 있지만 
    직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없다.
    예를들어 MyComponent에 onClick 값을 설정할 시 MyComponent를 클릭할 때 
    onClick에 설정된 함수를 실행하는 것이 아닌 
    이름이 onClick인 props를 MyComponent에게 전달해줄 뿐이다.

    <MyComponent onClick={doSomething}/>  
    
    즉 컴포넌트 자체적으로는 이벤트를 설정할 수 없다.
    하지만 전달받은  props를 컴포넌트 내부의 DOM(엘리먼트) 이벤트로는 설정할 수 있다.  

    <div onClick={this.props.onClick}>  
        { /*(...)*/ }  
    </div>  