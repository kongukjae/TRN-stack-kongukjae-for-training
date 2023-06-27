1. npm init
- 프로젝트 생성

2. npm install --save-dev typescript
- 개발도구로 typscript 설치

3. npm install --save-dev ts-node
- typescript 실행으로 node.js 실행을 하기 위한 유틸리티 모듈
- ts-node를 설치하지 않을 경우, typescript를 javascript로 트랜스파일(변환)한 후, 변환된 *.js 파일을 실행하면 **REPL(Read, Eval, Print, Loop)**환경에서 확인 할 수 있다.
- ts-node를 설치할 경우, 임시로 트랜스파일하여 REPL 환경에 보여주기 때문에, 마치 "ts를 콘솔에 찍는듯한' 편의를 확보할 수 있다.

`npx ts-node 실행할 파일.ts` 
- 프로젝트 환경에서는(로컬 환경)에서는 위와 같이 명령할 수 있다.
`ts-node 실행할 파일.ts`
- 시스템에 전역으로 ts-node가 설치되어있을 경우, 보다 간단한 명령으로 실행 할 수 있다.

4. npm install --save-dev @types/node
- typescript와 node는 전혀 별개이므로 typescript에게 Node.js의 타입 정보(정의)를 설치하는 과정으로 해당 플러그인(추가모듈)을 설치 하지 않는 경우, Node.js의 주요 메서드나 기능들을 에러로 판별한다.

