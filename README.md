# local에 ES6 환경 설정
### ES6 ver6 다운로드
<pre><code>npm install --save babel-cli</code></pre>
### ES6 ver7 다운로드
<pre><code>npm install --save @babel/cli @babel/core @babel/node @bable/preset-env</code></pre>
> '--save'의 경우 package.json의 "dependencies" 밑에 저장 시키기 위해사용해준다.
### npx 설치 방법
<pre><code>npm install -g npx</code></pre>
> '-g'의 경우 다운받는 모듈을 전역으로 설정하여 어느 경로에서도 사용 가능하게 한다.
#### npx를 사용하기전
<pre><code>node run [스크립트 이름]</code></pre>
> npx를 사용하기 이전에는 "babel-node [실행 시킬 파일 이름]"라는 스크립트를 작성후 위와 같이 동작을 시켜야 한다.
#### npx를 사용한 후
<pre><code>npx babel-node [실행 시킬 파일 이름]</code></pre>
> 스크립트를 따로 작성하여 실행시켜주지 않고 실행 시킬수 있다. 그리고 다양한 모듈을 터미널에 이식할 필요가 없다.
