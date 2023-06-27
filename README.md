1. `npm init`
- 프로젝트 생성

2. `npm install --save-dev typescript`
- 개발도구로 typscript 설치

3. `npm install --save-dev ts-node`
- typescript 실행으로 node.js 실행을 하기 위한 유틸리티 모듈
- ts-node를 설치하지 않을 경우, typescript를 javascript로 트랜스파일(변환)한 후, 변환된 *.js 파일을 실행하면 **REPL(Read, Eval, Print, Loop)**환경에서 확인 할 수 있다.
- ts-node를 설치할 경우, 임시로 트랜스파일하여 REPL 환경에 보여주기 때문에, 마치 "ts를 콘솔에 찍는듯한' 편의를 확보할 수 있다.

`npx ts-node 실행할 파일.ts` 
- 프로젝트 환경에서는(로컬 환경)에서는 위와 같이 명령할 수 있다.
`ts-node 실행할 파일.ts`
- 시스템에 **전역(global)**으로 ts-node가 설치되어있을 경우, 보다 간단한 명령으로 실행 할 수 있다.

4. `npm install --save-dev @types/node`
- typescript와 node는 전혀 별개이므로 typescript에게 Node.js의 타입 정보(정의)를 설치하는 과정으로 해당 플러그인(추가모듈)을 설치 하지 않는 경우, Node.js의 주요 메서드나 기능들을 에러로 판별한다.

5. `npx tsc --init`
- typescript의 설정파일을 초기화(initialize)하는 과정으로 typescript는 설정에 맞게 동작하므로 `npm init`과 같이 최초 한번은 진행해야 한다.

6. tsconfig.json 파일 설정
- 위 5번 명령을 실행하면, typescript를 설정할 수 있는 tsconfig.json 파일이 생성된다.
- configuration (구성)이라는 뜻으로, 보통 줄여서 config 라고 부른다.
- ts + config 즉, typescript를 어떻게 구성할 것인지를 결정하는 명세에 해당한다.

- tsconfig.json 파일에는 몇가지를 제외하고, 모두 **주석처리**되어있는 것을 확인 할 수 있다.
- 주석처리 되어있는 여러가지 기능들은 typescript 버전에 따라 다를 수 있다.
- 주석처리로 가려져 있는 키와 값을 비주석처리로 바꾸어 '활성화' 하는 방식을 채택했다.
*물론, 직접 tsconfig.json 파일을 직접 만들어서, 유용한 설정만 따로 가져와 작성하는 방법도 있다.*

> typescript는 반드시 tsconfig.json 파일이 필요하다. 해당 파일이 없이도 구동된다면 전역으로 설치되어있다는 뜻이다.

    "target": "ES2022",         

해당 키를 활용하면, typescript가 해석하는 javascript의 버전을 설정할 수 있다.

    "lib": [],  

해당 키 "lib"를 활용하면, typescript가 해석하는 라이브러리를 설정할 수 있다.
DOM API를 사용하는 경우 다음과 같다.

    "lib": ["ESNext", "DOM"],

위 처럼 작성하면, 자바스크립트 최신버전과 DOM API를 포함해 트랜스파일(컴파일) 하겠다는 설정이 된다.

    "sourceMap": true,

해당 키를 활성화 하면, typescript로 제작하고, javascript로 트랜스파일(컴파일)된 과정에서 추적이 가능하도록 지도역할을 하는 파일이 만들어지며, 트랜스파일 실행과정에서 발생하는 예상밖 에러를 디버깅하는데 매우 큰 도움이 된다. 특수한 경우를 제외하고는 설정을 활성화하는 것이 좋다.

    "noImplicitAny": true,

Typescript에서는 '정적(staic)'으로 명시되지 않은 변수 및 상수를 기본으로 Any라는 특수한 데이터타입으로 판단하는 것이 기본값이다. 사실상 javascript와 typescript를 혼용할 수 있기 때문에, typescript 선택의 목표인 개발 안정성과 거리가 멀다. 개발코드의 일관성면에서도 문제가 있기 때문에 특별한 경우를 제외하고는 활성화시키는 것이 좋다.
특별한 경우 예: javascript로 작성되어있던, 기존 프로젝트를 typescript로 언어를 이식해야 될 때, 점진적인 변환의 목적으로 사용한다.

    "strictNullChecks": true,

한번 선언된 null, undefined는 다른 데이터타입으로 변환되지 않도록 비활성시키는 기능으로, 되도록 null와 undefined를 사용하지 않으려고하는 경향이 담겨있다.

    "rootDir": "./src",
    "outDir": "./dist",

해당 키를 사용하면 해석할 파일과 해석된 파일을 설정할 수 있지만, 해당 작업은 번들러가 대신 해주기 때문에, 특별한 경우를 제외하고는 설정하지 않는 것이 좋다.
- 번들러를 사용하지 않는 경우, 설정하는 편이다.


