# React Blog

## 웹 사이트

https://blogh.azurewebsites.net/posts/

## 프로젝트 설명

### 기능

1. 제가 공부한 내용을 올리는 블로그입니다.
2. 카테고리별 검색이 가능합니다.

### 웹 사이트 내부

#### 메인 화면

<img src="https://user-images.githubusercontent.com/53867397/91887706-14828800-ecc6-11ea-94cc-93eec224d355.PNG" width="800px" />   
메인 화면입니다. 블로그 게시물들이 보이고 카테고리별 검색이 가능합니다.

#### 로그인

<img src="https://user-images.githubusercontent.com/53867397/91887757-26fcc180-ecc6-11ea-9559-888136766d6e.PNG" width="800px" />   
로그인 화면입니다. 로그인은 모달창으로 구성하였고 폼 검증을 합니다.

#### 회원가입

<img src="https://user-images.githubusercontent.com/53867397/91887872-527fac00-ecc6-11ea-9d60-8b44e1d1bb7f.PNG" width="800px" />   
회원가입 화면입니다. 로그인과 마찬가지로 모달창으로 구성하였고 폼 검증을 합니다.

#### 게시물 생성

<img src="https://user-images.githubusercontent.com/53867397/91891389-ec962300-eccb-11ea-9b5c-010ac1e35a4f.PNG" width="800px" />   
게시물을 생성하는 화면입니다. 제목, 설명, 카테고리, 그리고 썸네일을 입력할 수 있습니다.   
   
<img src="https://user-images.githubusercontent.com/53867397/91888502-5c55df00-ecc7-11ea-9d93-be827d65dcfc.PNG" width="800px" />   
마크다운으로 게시물 내용을 작성합니다. 미리보기가 가능합니다.

#### 게시물 보기

<img src="https://user-images.githubusercontent.com/53867397/91888559-798aad80-ecc7-11ea-8937-26fcc99b342d.PNG" width="800px" />   
게시물을 클릭하면 보이는 화면입니다. 게시물 작성자이면 수정 및 삭제가 가능합니다.   
   
#### 프로필
<img src="https://user-images.githubusercontent.com/53867397/91888622-932bf500-ecc7-11ea-9de9-af04e106b666.PNG" width="800px" />   
프로필 화면입니다. 프로필 사진 수정이 가능하며 작성한 게시물을 볼 수 있습니다. 본인이 아닌 다른 사람의 프로필을 보면 프로필 사진의 변경이 불가능하고 다른 사람이 작성한 게시물을 볼 수 있습니다.

#### 그 외

<img src="https://user-images.githubusercontent.com/53867397/91888783-d2f2dc80-ecc7-11ea-80a6-caca5d9a02c8.PNG" width="800px" />   
Security Header를 추가하였습니다.

- `Strict-Transport-Security`: HTTP 대신 HTTPS만을 사용하여 통신해야한다고 웹사이트가 브라우저에 알리는 보안 기능입니다.
- `X-Content-Type-Options`: 웹서버가 보내는 MIME 형식 이외의 형식으로 해석을 확장하는 것을 제한하는 크로스사이트스크립트 방어법입니다. 웹서버는 HTTP 응답에 Content-Type: 헤더를 선언하여 자신이 보내는 내용이 어떠한 용도로 사용될 수 있는 지를 지정하며 MIME(Multipurpose Internet Mail Extensions) 형식이 사용됩니다.
- `Referrer-Policy`: 사용자가 어느 사이트에서 링크를 클릭하면 다른 사이트로 이동합니다. 대상 사이트는 사용자의 원본에 대한 정보를 수신합니다. Referrer-Policy를 이용하여 이를 제한할 수 있습니다.
- `X-Frame-Options`: HTTP 응답 헤더는 해당 페이지를 frame 또는 object 에서 렌더링할 수 있는지 확인하며, 사이트 내 콘텐츠들이 다른 사이트에 포함되지 않도록 하여 clickjacking 공격을 막기 위해 이 헤더를 사용합니다.
- `Content-Security-Policy`: Cross Site Scripting(XSS) 공격을 방어하기 위해서 사용합니다. 신뢰할 수 있는 콘텐츠 소스의 허용 목록을 생성할 수 있게 해주는 Content-Security-Policy HTTP 헤더를 정의하고 브라우저에는 이런 소스에서 받은 리소스만 실행하거나 렌더링할 것을 지시합니다.
- `Feature-Policy`: Policy는 사이트가 특정 기능에 대한 브라우저의 기본 동작에 액세스하거나 수정할 수있는 API를 제한합니다. 사이트 또는 포함된 타사 콘텐츠가 개발자의 사전 선택된 규칙을 위반하려고 하면 브라우저가 더 나은 UX로 동작을 재정의하거나 API를 완전히 차단합니다. Feature-Policy 헤더를 이용하여 Policy를 사용할 수 있습니다.

## 프로젝트에 사용된 기술

frontend: react + typescript + scss + mobx  
backend: asp.net core

## 프로젝트 후기

공부하면서 개인 프로젝트를 진행하고 나면 나중에 공부한 내용들이 잘 기억이 나질 않았습니다. 그래서 제가 공부한 내용을 정리할 수 있는 공간이 필요했고 개인 블로그를 만들게 되었습니다. 제가 공부한 내용을 잊어버리지 않고 잘 정리하기 위해서...
