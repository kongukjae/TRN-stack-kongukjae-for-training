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

5. main.ts entry point 생성
6. app.module.ts 생성

## app.module.ts
- 애플리케이션 최상위 모듈로서 동작하며, 아키텍팅 전용 모듈

## app.controller.ts
- 애플리케이션의 라우터 역할을 하는 컨트롤러
- 특히 데코레이터를 사용하여 라우터를 정의한다.
- HTTP 요청(request), 응답(response)을 처리하는 메서드를 정의한다.

## app.service.ts
- 애플리케이션의 비즈니스 로직을 처리하는 서비스
- 예를들어, 데이터베이스에 접근하는 로직을 처리하는 메서드를 정의한다.
- 컨트롤러에서는 서비스를 호출하여 비즈니스 로직을 처리한다.

### app.moudle.ts - app.controller.ts - app.service.ts
- 위 세가지의 파일을 동작하고 유기적으로 관계를 점검하는 것이 Nest.js의 핵심 아키텍처이다.
- 이러한 관계를 통해, Nest.js는 애플리케이션의 구조를 유지하고, 유지보수를 쉽게 할 수 있도록 도와준다.
- 형식에 비해 상당히 큰 '골격'을 가지고 있지만, 유지보수 측면에서는 매우 효율적이다.
