import "./App.css";
import { useState } from "react";

function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(initialArray);
  // 함수 실행
  // useState의 결과물은 배열! [state, state를 제어하는 함수]
  // 좌측은 구조분해 할당
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit} ,`;
    });
    // 하나 하나 순회 => for문
    // forEach도 함수다
    setResult(tempResult.slice(0, -2));
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      // filter의 콜백함수 : 얘를 필터링 할지 말지를 결정함
      if (fruit.includes(query)) {
        // includes -> 배열이 아니라 문자도 가능
        return true;
      } else {
        return false;
      } // 여기서 결정 = true면 통과, false면 통과 X
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase(); // 요소마다 콜백함수가 시작되는 것
    });
    // Map의 역할 : 원본 배열을 가공해서 복제
    setResult(mappedList.join(", "));
  };

  const handleReduce = () => {
    const reducedList = array.reduce((acc, cur) => `${acc} + ${cur}`);
    setResult(reducedList);
  };
  // return문에는 누적될 수 있는 값을 넣어줘야 함.
  // reduce : 배열의 개수 -1 만큼 실행이 됨.

  const handlePush = () => {
    if (!query) {
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };
  // pop 쓸 때는 백업해야 함.

  const handleSlice = () => {
    const newArr = array.slice(0, -2);
    setResult(newArr.join(", "));
  };
  // 시작하는 위치, 끝나는 위치

  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setArray(newArr);
    setResult(newArr.join(", "));
  };
  // 시작하는 위치, 지우는 값의 수, 삽입할 요소

  const handleIndexOf = () => {
    const idx = array.indexOf(query);
    setResult(idx);
  };
  // 값과 일치하는 마지막 element를 반환, 없으면 -1 반환

  const handleIncludes = () => {
    const includedList = array.includes(query);
    setResult(includedList.toString());
  };
  // 찾으려는 특정 값이 배열에 있으면 true, 없으면 false 반환

  const handleFind = () => {
    const foundList = array.find((item) => item.includes(query));
    setResult(foundList || "Not Found");
  };
  // 조건을 만족하는 첫 번째 element를 반환

  const handleSome = () => {
    const someList = array.some((item) => item.includes(query));
    setResult(someList.toString());
  };
  // 배열 내 요소들에 대해 특정 동작을 수행함.

  const handleEvery = () => {
    const everyList = array.every((item) => item.length > 5);
    setResult(everyList.toString());
  };
  // callback 함수가 배열의 모든 요소에 대해 참이면 true를 반환

  const handleSort = () => {
    const sortedList = [...array].sort(function (a, b) {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
    setResult(sortedList.join(", "));
  };

  // sort는 기본적으로 오름차순으로 정렬

  return (
    <div className="App">
      <h1>Standard반 배열 API</h1>
      <div>
        <input
          placeholder="Enter text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
      </div>
      <div className="array-box">
        <strong>원본 배열 </strong>: {array.join(", ")}
      </div>
      <div className="array-box">
        <strong>결과물 </strong>: {result}
      </div>
    </div>
  );
}

export default App;
