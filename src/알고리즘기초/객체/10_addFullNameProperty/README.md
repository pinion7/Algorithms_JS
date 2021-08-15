### 10_addFullNameProperty

***

###### 문제 

객체를 입력받아 'firstName', 'lastName' 속성값 사이에 띄어쓰기 하나를 둔 단일 문자열을 fullName 속성값으로 할당해야 합니다.

##### 입력

인자 1 : obj
- firstName, lastName 속성을 가진 객체

##### 출력

- 별도의 리턴문(return statement)을 작성하지 않습니다.

##### 입출력 예시

const person = {
  firstName: 'Jade',
  lastName: 'Smith',
};

addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'