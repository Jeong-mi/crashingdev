# 행복 Ti 😃🍅

배포 : https://happiness-ti.netlify.app/

react : netlify(https://app.netlify.com/sites/happiness-ti/deploys/6283a907d48fd10008948807)

backend : heroku(https://happiness-ti-back.herokuapp.com/)

data : heroku(https://happiness-ti-data.herokuapp.com/)

당신의 성격을 MBTI로 확인하듯이, 당신의 행복을 행복 Ti로 확인해보세요!

![메인화면](https://user-images.githubusercontent.com/56066290/191168852-87463739-79b0-4d33-858a-76a18522334a.gif)

현재 배포 : http://elice-kdt-ai-4th-team14.elicecoding.com/

## 프로젝트 구성 안내

## 1. 프로젝트 소개

### **😃 주 타겟층 ?**   
자신이 얼마나 행복한지 알고 싶은 사람,
자신과 같은 행복도를 가진 나라가 어디인지 알고 싶은 사람,
어떤 나라가 왜 행복도가 낮은지, 또는 높은지 이유를 알고 싶은 사람

### **😃 데이터세트**

**[kaggle의 World Happiness Report up to 2022](https://www.kaggle.com/datasets/mathurinache/world-happiness-report)**

- 2015년 ~ 2022년동안 갤럽 세계 여론 조사(GWP)의 주요 생활 평가 질문 응답의 전국 평균을 낸 총 153개국의 행복 스코어

### **😃 가설 설정**
  > **행복을 유형화할 수 있을까?**

  - GDP per capita 
  - Social support 
  - Healthy life expectancy
  - Freedom to make life choices
  - Generosity
  - Perceptions of corruption   
  
  위 6개 요인들이 개인의 행복도에 영향을 준다. 즉 해당 데이터로 개인의 행복의 정도를 특징별로 분류할 수 있다.
  
  년도, 사회적 지지, 건강 , 어느 나라에 살고 있는지 등 다양한 지표들을 알고있기만 한다면 나의 행복도가 세계에서 상위 몇퍼센트에 속하는지 , 나와 비슷한 행복도를 가진 나라는 어디인지 시각화된 자료와 함께 알 수 있을 것이다.

따라서 MBTI 처럼 행복의 유형을 나라별로 나누어 유형화 할 수 있을것이다.

### **😃 사용 라이브러리**
pandas / numpy / scipy / matpotlibt / searborn / plotly_express / pycountry

데이터 분석 종류 
   1. 시각화
   2. 통계분석 -> anova 검정

포지션별 사용 라이브러리 사용 정리하기

### **😃 스토리보드 & 시나리오**
[figma UI 디자인](https://www.figma.com/file/IYTcOOUjIc4w0uKgeaJ82I/crashing-dev?node-id=0%3A1)

## 2. 프로젝트 목표

**데이터 분석 결과로 도출되는 인사이트와 웹서비스의 해결과제에 대한 논의 (50자 이상)**
  - 프로젝트 아이디어 동기
  - 문제를 해결하기 위한 특정 질문 명시
  - 데이터를 통해 탐색하려는 문제를 구체적으로 작성


## 3. 프로젝트 기능 설명

### **😃 메인 기능**
  1. **행복Ti 설문조사** : 행복TI를 도출하기 위해 엄선한 총 25개의 질문을 입력받고 결과를 도출한다.
  2. **행복Ti 결과 시각화** : 사용자의 행복Ti와 같은 행복도를 가진 나라를 시각화하여 상위 몇 퍼센트까지 표시하여 구체적으로 보여준다.
  3. **행복도 분석 시각화** : 행복도에 가장 많은 영향을 주는 요인과 년도별 추이 그리고 나라별, 대륙별 행복도를 시각화하여 나타낸다.
  
### **😃 서브 기능**
  1. **top5 순위** : 행복 TI 설문조사의 결과 중, 가장 많이 나온 나라 top5를 랭킹으로 제공합니다.
  2. **자신의 행복 Ti를 확인** : 마이페이지에서 행복Ti 로그를 확인할 수 있다.
  3. **전체 국가의 행복 리스트** : 각 나라의 행복도 정보를 확인할 수 있다.
  4. **팀 소개 페이지** : 개발 팀 소개 페이지
  
### **😃 프로젝트만의 차별점, 기대효과**
 

## 4. 프로젝트 구성도
[figma](https://www.figma.com/file/IYTcOOUjIc4w0uKgeaJ82I/crashing-dev?node-id=0%3A1)

**행복 TI 설문조사**

<img src="https://user-images.githubusercontent.com/56066290/191169529-3ac023ea-80fa-4648-82bb-ccc9e61113ad.png" width="500" />

## 5. 프로젝트 팀원 역할 분담
| 이름 | 역할 |
| ------ | ------ |
|박수정|팀장, 백엔드|
|김광재|프론트엔드, 스크럼 Backlog 담당|
|박정미|프론트엔드|
|이주안|데이터분석, 프론트엔드|
|김다현|데이터분석, 백엔드|
|박지수|백엔드|

**멤버별 responsibility**

1. 팀장 

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 백엔드 & 데이터 담당  

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

## 6. 버전
  - 프로젝트의 버전 기입

## 7. FAQ
  - 자주 받는 질문 정리
