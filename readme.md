# vscode

eslint 라는 확장팩을 깔아주시고 프로그램 재시작.

# docekr 

## 설치
https://www.docker.com/get-started

## 프로젝트 실행

docker-compose -f docker-compose.yml up --build 

위 명령어 vscode의 terminal 에서 실행하면 됩니다.

## mysql guid 프로그램 접근

host: localhost
post: 3308
user: user
pwd : 1111

# 게시판

## 원글 필요항목

저자, 비밀번호, 제목, 내용(칼럼 text), 저장일시

## 댓글 필요항목

내용, 날짜

댓글은 2단 댓글로 구성.

# 프로그램 디렉토리

## controll

라우터로 받은 요청을 처리하는 부분

## router

클라이언트에서 요청하는 부분

## db

데이터 베이스에 접근하여 쿼리를 날리는 부분