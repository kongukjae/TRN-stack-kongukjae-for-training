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

7. `npm install eslint --save-dev`
- devDependencies에 eslint를 설치한다.

8. `npm install prettier --save-dev`
- eslint와 동일한 방식으로 설치한다.
- eslint와 prettier를 함께 동시에 쓰는 편이지만, 둘의 기능과 목적은 매우 다르다.

9. `npx eslint --init`

> 1. 간단한 문법정도 검사 : To check syntax only
> 2. 문법과 야기될 문제 검사 : To check syntax and find problems
> 3. 문법과 문제, 제안까지 기능 : To check syntax, find problems, and enforce code style

- 일반적인 경우 3번에 해당하는 설정을 진행하는 편이다.(프로젝트마다 매우 상이하다.)

> 1. JavaScript modules (import/export)
> 2. CommonJS (require/exports)
> 3. None of these

- 해당 프로젝트에서는 웹팩, typescript를 사용할 것이기 때문에 1번을 선택한다.

> 1. React
> 2. Vue.js
> 3. None of these

- React, vue.js를 사용하지 않는 경우 3번을 선택한다.(다른 프레임워크도 많으므로 3번을 선택하는 경우도 상당히 많다.
- 설명하기 위해 해당 작업에서는 3번을 선택한다.

> Does your project use TypeScript? » No / Yes

- 프로젝트 특성을 살려 typescript를 선택한다.

> Where does your code run? » Browser / Node

- 둘 다 사용하기 때문에 큰 상관은 없지만, 브라우저에서 동작하는 경우가 많으므로 브라우저를 선택한다.

> How would you like to define a style for your project? 
> 1. Use a popular style guide (Airbnb, Standard, Google, etc.)
> 2. Answer questions about your style

- 1번을 선택하면, eslint가 제공하는 여러가지 스타일 가이드 중 하나를 선택할 수 있다.
- 일반적으로 1번을 선택하고, 특수한 경우 2번을 선택하는 편이다.

> Which style guide do you want to follow?
> 1. Standard: https://github.com/standard/eslint-config-standard-with-typescript
> 2. XO: https://github.com/xojs/eslint-config-xo-typescript

- 두개의 스타일은 약간의 차이가 있지만, 포멧터를 사용할 것이므로 1번을 선택하고 넘어간다.

> What format do you want your config file to be in?
> 1. JavaScript
> 2. YAML
> 3. JSON

- 일반적으로 3번을 선택한다. (프로젝트마다 다르다.)

```  
Checking peerDependencies of eslint-config-standard-with-typescript@latest
The config that you've selected requires the following dependencies:

eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.50.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@*
```

위와 같이(다른 것을 선택했다면, 다른 모듈이 나올 수 있다.) eslint 설치관련 플러그인 모듈들 목록이 나오며 Yes 선택을 진행하면, 해당 모듈들이 설치된다.

10. .eslintrc.js 파일 수정

```
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json" // config 정보 추가
    },
```

- typescript를 사용하기 때문에 parserOptions에 project 정보를 추가한다.

```
    "extends": [
        "standard-with-typescript" // extends 정보 추가
    ],
```


11. `npx eslint ./index.ts`

-정상적으로 eslint가 동작하는지 확인한다.

12. `npm install --save-dev prettier`
12. `npm install --save-dev eslint-config-prettier`
12. `npm install --save-dev eslint-plugin-prettier`

- eslint에 prettier가 정상 작동되도록, 관련 정의 파일과 플러그인 파일을 추가 설치한뒤,
- .eslintrc.js 파일에 다음과 같이 추가한다.

```
    "extends": [
        "standard-with-typescript",
        "plugin:prettier/recommended",
        "prettier" // extends 정보 추가
    ],
```

- 필요에 따라서 extends prettier연산을 만들어 낸다.
  
13. .prettierrc 파일 생성
- 변형하고 싶은 prettier의 기본 설정을 .prettierrc 파일에 작성한다.
    
    ```
    {
        "printWidth": 80,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "quoteProps": "as-needed",
        "jsxSingleQuote": false,
        "trailingComma": "none",
        "bracketSpacing": true,
        "jsxBracketSameLine": false,
        "arrowParens": "avoid",
        "requirePragma": false,
        "insertPragma": false,
        "proseWrap": "preserve",
        "htmlWhitespaceSensitivity": "css",
        "vueIndentScriptAndStyle": false,
        "endOfLine": "lf",
        "embeddedLanguageFormatting": "auto"
    }
    ```

    - 위는 다양한 prettier 설정 예시 이다. 프로젝트의 입맛에 맞게 설정해두거나 필요할 때마다 업데이트 하는 편이다.
    - 개발자들의 코드 일관성이 주 목적이므로, 개발 자체의 직접적인 품질과 관련이 낮지만, 미리 설정해두는 것을 매우 권장한다.
