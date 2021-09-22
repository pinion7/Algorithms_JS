### 09\_(Advanced) [멱집합] 집밥이 그리워

---

###### 문제

Array 타입을 리턴해야 합니다.
밥과 함께 먹을 수 있는 반찬의 모든 경우의 수가 담긴 배열

##### 입력

인자 1: sideDishes

- String 타입의 영문으로 된 반찬이 나열되어 있는 배열

##### 출력

- Array 타입을 리턴해야 합니다.
- 밥과 함께 먹을 수 있는 반찬의 모든 경우의 수가 담긴 배열

##### 주의사항

- 반찬은 영문으로 작성이 되어 있습니다.
- 반찬은 중복되지 않습니다.
- 반찬을 먹지 않는 것도 포함됩니다. (출력되는 2차원 배열은 빈 배열을 포함합니다.)
- 반찬은 3개 이상 99개 이하입니다.
- 출력되는 배열은 전부 사전식 순서(lexical order)로 정렬되어야 합니다.

##### 예시

let output = missHouseMeal(["eggroll", "kimchi", "fishSoup"]);
console.log(output);
/_
[ [], 
[ 'eggroll' ], 
[ 'eggroll', 'fishSoup' ], 
[ 'eggroll', 'fishSoup', 'kimchi' ], 
[ 'eggroll', 'kimchi' ], 
[ 'fishSoup' ], 
[ 'fishSoup', 'kimchi' ], 
[ 'kimchi' ]
] 
_/
