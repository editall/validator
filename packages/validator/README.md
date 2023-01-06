# @edit-all/validator

## 개요
복잡한 값을 검증하는 정교한 밸리데이션 라이브러리 입니다.

## 설치
validator 라이브러리는 아래와 같이 설치합니다.
```bash
npm install @edit-all/validator
```

## 시작하기
흔한 경우 부터 차근 차근 작성해보겠습니다.

### 아이디에 대한 밸리데이터 작성하기
아이디에 대한 제약을 6 ~ 14자, 영문으로 시작해야하고 숫자와 영문 소문자로만 구성할 수 있는 제약을 걸고 싶습니다.
이런 경우 validator는 다음과 같이 작성합니다.

```typescript
import { RuleValidator } from "@edit-all/validator";

const idValidator = new RuleValidator( cases=>{
  // 1
  cases( rules=>{
    rules.isString(); //문자열인가
    rules.isFirstLower(); //첫번째가 소문자인가
    rules.isRangeLength(6, 14); //6 ~ 14의 길이를 갖고 있는가 
    rules.isLowerNumber(); //소문자와 숫자만 포함하는가
  } );
  
} );
```
1. 우선 밸리데이터를 생성할 때 인자로 람다를 하나 받는데 이 람다는 인자로 cases라는 함수가 전달됩니다.
2. cases함수는 인자로 rules를 받을 람다를 받습니다.
3. 하나의 밸리데이터는 여러 개의 case를 순차적으로 평가하여 그 중 하나라도 만족되면 통과됩니다.
4. 하나의 case안에서는 rules를 이용해 복잡한 제약조건을 순차적으로 적용할 수 있게 작성합니다.

이렇게 만들어진 ```idValidator```는 check라는 메소드를 갖고 있으며 호출시 Result객체를 반환합니다.

```typescript
const result = idValidator.check("hika00");

console.log(
  result.isOk, // true
  result.value, // "hika00"
  result.message // ""
);
```

check메소드의 결과는 언제나 Result로 여기에는 세 가지 속성이 주어집니다.

1. isOk : 밸리데이션 통과 여부
2. value :
   * 밸리데이션을 통과한 경우 - 최종 값([값의 변형](##값의 변형)에 추가 설명)
   * 밸리데이션에 실패한 경우 - 원래 check함수에 넘겼던 값
3. message : 밸리데이션 실패 시 그 원인을 알 수 있는 메세지입니다. 단 성공 시에는 빈 문자열입니다.

만약 다음과 같이 조건을 충족시키지 않는 값이 check에 주어진다면 isOk는 false가 될 것입니다.

```typescript
const result = idValidator.check("hika"); // 6~14 제약에 어긋남

console.log(
  result.isOk, // false
  result.value, // "hika"
  result.message // "invalid"
);
```

### 에러메세지를 커스터마이즈하기

위의 예에서 메세지가 "invalid"로 나옵니다. 이 메세지는 validator의 기본값으로 메세지에 대한 설정을 하지 않았을 때 나오는 기본 메세지 입니다.
만약 idValidator수준에서 에러메세지를 지정한다면 다음과 같이 할 수 있습니다.

```typescript
import { RuleValidator } from "@edit-all/validator";

const idValidator = new RuleValidator(
  cases=>{
    cases( rules=>{
      rules.isString();
      rules.isFirstLower();
      rules.isRangeLength(6, 14); 
      rules.isLowerNumber();
    });
  },
  "id invalid"  //생성 시 밸리데이터 전용 메세지를 넘김 
);

const result = idValidator.check("hika");

console.log(
  result.isOk, // false
  result.value, // "hika"
  result.message // "id invalid" //기본 메세지 대신 idValidator의 메세지가 나옴
);
```

밸리데이터를 생성할 때 두 번째 인자로 에러메세지를 넘긴다면 이후 모든 에러메세지는 해당 밸리데이터의 전용으로 표시됩니다.
하지만 이 정도로도 정확한 메세지라고는 할 수 없습니다. 무엇 때문에 밸리데이션에 걸린건지 알 수 없기 때문입니다.
이를 위해서는 개별 rule에 메세지를 지정해야 합니다.

```typescript
import { RuleValidator } from "@edit-all/validator";

const idValidator = new RuleValidator(
  cases=>{
    cases( rules=>{
      //개별 rule에 메세지를 지정함
      rules.isString("문자열이 아님");
      rules.isFirstLower("첫번째 글자가 소문자가 아님");
      rules.isRangeLength(6, 14, "6 ~ 14자의 길이가 아님"); 
      rules.isLowerNumber("소문자, 숫자 외의 문자가 포함됨");
    });
  },
  "id invalid"   
);

console.log(idValidator.check(12).message); // 문자열이 아님
console.log(idValidator.check("01hika").message); // 첫번째 글자가 소문자가 아님
console.log(idValidator.check("hika").message); // 6 ~ 14자의 길이가 아님
console.log(idValidator.check("hiKA00").message); // 소문자, 숫자 외의 문자가 포함됨
```
이러한 메세지는 각 사이트마다 혹은 언어마다 달라질 수 있기 때문에 개별 밸리데이터를 작성할 때 거기에 맞춰 지정해줄 수 있게 되어있습니다.
하지만 6 ~ 14자의 길이가 아님의 경우 몇 자라서 안되는지까지 보여주고 싶다면 어떻게 해야할까요?
이런 경우 메세지 리플레이서(replacer)를 사용해야 합니다.
메세지 리플레이서의 형식은 다음과 같습니다.

```typescript
(message: string, value: any) => string 
```

message는 에러 발생시 주어질 에러메세지고 value 그 당시의 값입니다. 다음과 같이 에러 메세지를 작성해보죠.

```typescript
rules.isRangeLength(6, 14, "@length@자 입니다. 6 ~ 14자의 길이로 작성해주세요.");
```

여기에 맞춰 리플레이서를 작성한다면 다음과 같을 것입니다.

```typescript
(message: string, value: any):string => {
  return message.replace("@length@", value.length);
}
```

즉 주어진 message와 value를 이용해서 원하는대로 한 번 더 변경할 트리거를 작성할 수 있는 거죠. 
이런 리플레이서는 우선 밸리데이터를 생성할 때 세번째 인자로 전달할 수 있습니다.

```typescript
import { RuleValidator } from "@edit-all/validator";

const idValidator = new RuleValidator(
  cases=>{
    cases( rules=>{
      //개별 rule에 메세지를 지정함
      rules.isString("문자열이 아님");
      rules.isFirstLower("첫번째 글자가 소문자가 아님");
      rules.isRangeLength(6, 14, "@length@자 입니다. 6 ~ 14자의 길이로 작성해주세요."); 
      rules.isLowerNumber("소문자, 숫자 외의 문자가 포함됨");
    });
  },
  "id invalid",
  (message, value)=>message.replace("@length@", value.length) //리플레이서 설정
);
```

하지만 이러면 개별 rule마다 다른 리플레이서를 쓸 수 없게 됩니다. 따라서 rule에 맞게 설정할 수도 있습니다.

```typescript
import { RuleValidator } from "@edit-all/validator";

const idValidator = new RuleValidator(
  cases=>{
    cases( rules=>{
      rules.isString("문자열이 아님");
      rules.isFirstLower("첫번째 글자가 소문자가 아님");
      rules.isRangeLength(
        6, 14, "@length@자 입니다. 6 ~ 14자의 길이로 작성해주세요.",
        (message, value)=>message.replace("@length@", value.length) // rule에 리플레이서를 설정
      ); 
      rules.isLowerNumber("소문자, 숫자 외의 문자가 포함됨");
    });
  },
  "id invalid"
);

console.log(idValidator.check("hika").message); // 4자 입니다. 6 ~ 14자의 길이로 작성해주세요.
```

이제 각 상황별로 정확하게 값을 고려해 메세지를 만들어낼 수 있게 되었습니다.

### 아이디에 이메일도 받아주기

만약 아이디가 위의 조건으로 만들거나 혹은 이메일 둘 중 한 가지를 허용한다면 어떻게 해야할까요?
이런 경우 하나의 값이 하나 이상의 케이스에 대응하는 것이므로 이를 case로 나눠서 작성해야 합니다.
밸리데이터에서는 cases함수를 한 번 더 호출하여 case를 추가합니다.

```typescript
import { RuleValidator } from "@edit-all/validator";

const idValidator = new RuleValidator(
  cases=>{
    cases(rules=>{
      rules.isString("문자열이 아님");
      rules.isFirstLower("첫번째 글자가 소문자가 아님");
      rules.isRangeLength(
        6, 14, "@length@자 입니다. 6 ~ 14자의 길이로 작성해주세요.",
        (message, value)=>message.replace("@length@", value.length)
      ); 
      rules.isLowerNumber("소문자, 숫자 외의 문자가 포함됨");
    });
    
    //이메일을 위해 case를 추가
    cases(rules=>{
       rules.isString("문자열이 아님");
       rules.isEmail("정상적인 이메일이 아님");
    });
  },
  "id invalid"
);

console.log(idValidator.check("hika00@gmail.com").isOk); // true
```
이제 하나의 밸리데이터가 여러 개의 케이스에 대응하도록 작성할 수 있게 되었습니다.

* [Rules가 제공하는 전체 rule리스트](./docs/ruleList.md)
* [사용자 정의 rule만들기](./docs/customRule.md)

## license
MIT
