<div align="center">
  <br>
  <h2> AI 그림 일기 </h2>
  <h1> 오늘 하루를 그려줘 🎨 </h1>
  <strong> 외부 API Mock 서버 레포지토리</strong>
  <br>해당 레포는 Open AI의 DALL-E API를 Mocking하기 위한 서버입니다.
</div>
<br>

## 프로젝트 소개

'오늘 하루를 그려줘'는 하루동안 느낀 감정과 일상을 기록하면, AI가 멋진 그림으로 당신의 하루를 그려주는 서비스입니다.

오늘의 감정과 일기를 작성하면 AI가 일기 내용을 바탕으로 그림 일기를 생성해요!

[👉🏻 백엔드 레포지토리 바로가기 👈🏻](https://github.com/tipi-tapi/ai-paint-today-BE)

[🤖 안드로이드 플레이스토어 🤖](https://play.google.com/store/apps/details?id=kr.co.devstory.draw_my_today)

[🍎 IOS AppStore 🍎](https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98-%ED%95%98%EB%A3%A8%EB%A5%BC-%EA%B7%B8%EB%A0%A4%EC%A4%98-ai-%EA%B7%B8%EB%A6%BC%EC%9D%BC%EA%B8%B0/id6447301941)

![프로젝트 소개](https://github.com/tipi-tapi/ai-paint-today-BE/assets/42285463/d5b03ee7-4682-4700-b8eb-243c20e9ee07)

## 의존성(라이브러리) 설치

config 편의를 위한 라이브러리 @nestjs/config 설치가 필요합니다.

```bash
$ npm install
```

## 실행

1. 환경변수 입력 : Mock Image Url로 반환할 값 입력

2. 서버 실행

   ```bash
   $ npm run start
   ```

3. 접속

   엔드포인트 : http://localhost:3000
