# Nest.js 설치

- 일반적으로 프로젝트 시작 자체가 Nest.js 프로젝트를 시작하는 방식이 일반적이기 때문에, 해당 예제는 역순으로 진행하는 것과 다름없다
  
## Nest.js로 실행된 프로젝트 아래에서 React.js를 설정하는 것이 훨씬 간편하다.

1.`npm install @nestjs/core`
- Nest.js 코어모듈 설치
2. `npm install @nestjs/common`
- Nest.js 코어모듈 설치
3. `npm install rxjs`
- RxJS, reactive extensions for JavaScript 설치
- RxJS는 비동기 프로그램을 위한 라이브러리로, Nest.js에서는 비동기 프로그래밍을 위해 사용한다.
4. `npm install reflect-metadata`
- Nest.js에서는 TypeScript의 데코레이터를 사용하기 때문에, 데코레이터를 사용하기 위한 라이브러리 설치
- 데코레이터 문법은 매우 특이한 상황이 아니면 설치하여 사용하는 편이다.

