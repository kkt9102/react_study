## Key 정의
- 리엑트에서 Key는 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용한다.  예를들어 유동적인 데이터를 다룰 때에는 원소를 새로 생성,제거,수정 할 수 있다.  Key가 없을 때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지한다.  하지만 Key가 있다면 어떤 변화가 일어났는지 더 빠르게 알 수 있다.

- Key값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정하면 된다.  Key값은 언제나 유일해야한다. 따라서 데이터가 가진 고유값을 Key값으로 설정해야한다.
- 예제
```javascript
const articleList = articles.map(article => (
    <Article
        title = {article.title}
        wrtier = {article.wrtier}
        key = {article.id}
    />
))
```