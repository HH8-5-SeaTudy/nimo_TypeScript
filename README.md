# 🐬 SeaTUDY 스터디 스케줄러
함께 공부하는 즐거움을 주어 공부에 지속적인 동기부여 를 주고,
게임화(Gamification)를 더하여 경쟁심을 자극해 자발적인 공부를 유도 하며,
자기주도 학습능력 향상을 통한 목표지향적 능력 개발 도모 하는 서비스를 만들고 싶었습니다.
공부포인트를 쌓아 물고기캐릭터도 모으고, 랭킹 시스템을 통해 재밌게 공부해보세요!

> [SeaTUDY 바로가기](https://www.seatudy.com)
> 
> [팀노션 바로가기](https://www.notion.so/5-28efb5cf5701425eb16b1d4e9e449678)
> 
> [8기 5조 - '역전의 명수' GitHub](https://github.com/HH8-5-SeaTudy)
> 
> [FrontEnd GitHub](https://github.com/HH8-5-SeaTudy/nimo_TypeScript)
> 
> [BackEnd GitHub](https://github.com/HH8-5-SeaTudy/BE_SeaTudy)
> 
> [MVP중간발표 영상](https://youtu.be/wD_P41b4NOI)
> 
> [프로젝트 최종발표영상](https://youtu.be/w7xAVflEV3c)

---
## 🗓 프로젝트 기간
2022/8/26 - 2022/10/7(6주간)

----


## 🔎 주요 기능

### 📱 소셜로그인 (Oauth)
- 유저가 많이 사용하는 3가지 소셜의 로그인을 이용할 수 있다.
![](https://velog.velcdn.com/images/leejpsd/post/1fb142ff-3d95-4a13-838c-892962a3a772/image.gif)


### ⏰ 체크인/체크아웃 시스템
- 공부시간을 기록(총 공부시간 & 하루 공부시간)한다.
- 매일 오전 5시 리셋되어 새로운 하루의 기록이 시작된다.
- 리랜더링시에도 체크아웃을 하지 않는 이상 타이머가 유지된다.
![](https://velog.velcdn.com/images/leejpsd/post/b03abb06-def1-41bb-8775-b0b17dd4decd/image.gif)


### 📈 공부량 추적 (통계페이지)
- 전체 회원의 랭킹을 일일별/주간별 확인가능하다.
- 내 포인트 확인가능 → 포인트는 총 공부량의 시간 = 1 point / 1 hour
- 한 주동안 요일별 내 공부량, 주차별 내 공부량 그래프로 확인가능하다.
- 1년동안 공부량 확인가능(= Github 잔디심기)하다.
- 다음 물고기 획득까지 달성율을 알 수 있다.
- 메인 상단바(헤더)에서도 나의 랭킹과 다음 물고기 획득까지 달성율을 볼수있다. 
![](https://velog.velcdn.com/images/leejpsd/post/84a19448-3b8a-4351-85d1-2f52b896c190/image.gif)

### 🐠 프로필 수정 페이지와 물고기 도감
- 공부량을 기반으로 unlock된 물고기를 나의 프로필 사진으로 바꿀 수 있다.
- 닉네임을 설정(조회/수정)할 수 있다. 
- 사용자의 공부량 데이터를 기반으로 물고기 획득까지 남은 포인트를 알 수 있다.
- 게임적 요소: 물고기마다 재밌는 정보를 넣어 다음 물고기의 획득까지 동기부여 한다.
![](https://velog.velcdn.com/images/leejpsd/post/f553e49f-5bba-46d8-af9e-8ee693259448/image.gif)


### 🏖 바다(물고기) 꾸미기 
- 공부량을 기반으로 unlock된 물고기를 드래그앤드랍을 이용해 메인페이지에 꾸밀 수 있다.
- 물고기 각각의 위치는 서버에 저장해 리랜더링시에도 유지된다.
- 물고기 각각의 위치를 초기화하여 다시 인벤토리에 넣을 수 있다.
- 게임적 요소: 물고기를 unlock하여 메인페이지를 꾸밀 수 있도록 동기부여 한다.
![](https://velog.velcdn.com/images/leejpsd/post/c9441896-7bbb-4893-b833-de7905f17b28/image.gif)

### 📅 달력을 이용한 TodoList & D-day 관리
- 카테고리별로 TodoList 관리(추가/조회/수정/삭제)할 수 있다.
- 달력에서 TodoList 완료율을 도넛그래프로 확인할 수 있다.
- 메인 페이지에서도 TodoList 완료 체크 및 삭제가 가능하다.
- D-day (추가/조회/수정/삭제)를 설정할 수 있다.
- 가장 가까운 D-day는 메인 상단바(헤더)에서 확인 가능하다.
- 달력에 빨간색으로 표시하여 D-day 확인 가능하다.
![](https://velog.velcdn.com/images/leejpsd/post/a38279b4-ef7e-430f-b2ff-7c71d290b7cb/image.gif)

### 💬 실시간 채팅 (Stomp)
- 5개의 고정된 채팅방이 있다.
- 상대방이 입장/퇴장시 확인 가능하다.
- 실시간으로 채팅 참여자 확인 가능하다.
- 채팅방에 입장한 유저의 공부시간을 이용한 랭킹을 확인할 수 있어 경쟁심을 부여한다.
![](https://velog.velcdn.com/images/leejpsd/post/4f740402-3192-49e7-b05d-7bbc516ef9f6/image.gif)

### 🎶 Asmr 기능 
- 공부할때 듣기 좋은 4가지의 다른 Asmr을 제공한다.
![](https://velog.velcdn.com/images/leejpsd/post/682a8d5a-a225-4297-9274-000cc53bb37b/image.gif)

----

## ⛓ 기술스택
### FRONTEND

![](https://velog.velcdn.com/images/leejpsd/post/6d54d820-f9b6-4a8b-b9ad-341c5470b974/image.png)![](https://velog.velcdn.com/images/leejpsd/post/618098ab-8b86-471c-bbee-08f7329814c2/image.png)![](https://velog.velcdn.com/images/leejpsd/post/f771cbb0-8dde-47c1-8688-5e93fc2aa107/image.png)

### BACKEND

![](https://velog.velcdn.com/images/leejpsd/post/8dc7464c-1a01-46cd-a3e8-fa06c57260dd/image.png)![](https://velog.velcdn.com/images/leejpsd/post/2bb1d85b-18b2-4147-99ca-5827ec7d231b/image.png)![](https://velog.velcdn.com/images/leejpsd/post/f8591051-2ef4-4ce3-b00e-05bfb6f5bce3/image.png)![](https://velog.velcdn.com/images/leejpsd/post/996fe84c-bf79-48de-897b-e39f6c5b43aa/image.png)


----

## 🛠️ 아키텍처 
![](https://velog.velcdn.com/images/leejpsd/post/b8df093c-689c-4f3c-ba3b-85854ddb81a5/image.jpeg)

----

## 🔧 기술적 의사결정

|사용 기술|기술 설명 |
|------|---|
|TypeScript|코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나함수들에서 에러를 발생시켜 버그를 사전에 제거하기위해 도입하였습니다.|
|Redux|코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거하기위해 도입하였습니다.|
|Redux-toolkit|코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거하기위해 도입하였습니다.|
|Axios|별도의 모듈을 설치해야하지만 브라우저 호환성과 자동으로 JSON데이터 형식으로 바꿔준다는 점,promise API를 사용할 수 있다는 점을 고려햐여 도입하였습니다. |
|Styled-components| 조건부 스타일링과 CSS-in-JS 방식으로 자바스크립트 환경을 최대한 활용하기 위해 도입했습니다.|
|Stomp|프론트엔드와 백엔드의 효율적인 협업을 위해, 자동배포를 진행했습니다.|
|Redis|각 채팅방에 입장한 유저들의 인원수를 카운트하기 위해 세션ID와 채팅방 정보를 저장해둘 필요가 있었고, RDS를 사용하기에는 잦은 채팅방 입장/퇴장 이벤트가 일어나기 때문에 쿼리문을 계속해서 보내줄 필요없는 in-memory DB ‘Redis’가 최적이라고 생각하였습니다.|
|Oauth 로그인|사용자들이 회원가입의 번거로움을 덜고, 편리하게 서비스를 이용할 수 있도록 하기위해 사용하였습니다.|
|Nginx|DDos와 같은 공격으로부터 보호하고(Https SSL 인증서), 좀 더 빠른 응답을 위해 적용하였습니다.|
|Github Actions|프론트엔드와 백엔드의 효율적인 협업을 위해, 자동배포를 진행했습니다.|
|MySQL|프론트엔드와 백엔드의 효율적인 협업을 위해, 자동배포를 진행했습니다.|


----

## 🎯 트러블 슈팅 

### 🔵 FE: CheckIn & CheckOut 
#### 체크인 시스템의 첫번째 문제와 해결
> ![](https://velog.velcdn.com/images/leejpsd/post/0403a2d4-983e-4711-a7a7-574d0e7b3d17/image.png)

타이머는 헤더에 존재하고 타이머 버튼은 형제컴포넌트인 메인페이지에 존재한다. 타이머를 작동시키기 위해 리덕스에 isStudy란 state를 만들고 이 조건을 이용해 타이머를 작동시켰다.
또한 새로고침시에도 체크인 상태라면 서버에서 isStudy :true 값을 받아 타이머가 자동으로 시작해야하는 문제를 해결하였다.

#### 체크인 시스템의 두번째 문제와 해결
> ![](https://velog.velcdn.com/images/leejpsd/post/c0bbb0ed-fea9-4321-89e9-a25fa1bef7bd/image.png)
> 
타이머는 setInterval을 사용하였는데 처음엔 서버에서 받아오는 시,분,초를 각각 setInterval을 이용해 시간을 늘렸으나 시간이 흐를수록 각각 오차가 생겨 아예 다른 시간이 되는 문제가 생겼다.
setInterval의 오차를 없애기 위해 시,분,초 중에 초만 setInterval을 이용하여 1초에 한번씩 +1 을 해주고 분은 초가 60씩 돌때마다(60의 배수가 될때마다) +1 을 시켜준다. 
마찬가지로 시 또한 분이 60씩 돌때마다(60의 배수가 될때마다) +1 을 시켜주었다. 즉 setInterval은 초만 이용하여 오차를 없앨수 있었다.


### 🔵 FE: TodoList Input Modal

카테고리를 추가하고 투두리스트 입력창을 열어 카테고리에 맞는 투두리스트를 추가할 수 있다. 
하지만 .map() 함수를 이용해 그리고 있어 하나의 투두리스트 입력창만 열고 싶지만 모든 투두리스트 의 입력창이 열린다. 이를 해결하기위해 처음으로 .map()의 Index 파라미터를 제대로 사용해보았다.

```javascript

  const [todoInputShow, setTodoInputShow] = useState<any>([
    false,
    false,
    false,
    false,
  ]);
  
```
  
```javascript

  function onSubmitHandler() {
   if (dateTodos.length < 4)
    dispatch(__postCategory({ categoryName: category, selectDate: date }));
  else {
    alert("4개까지만 생성가능");
  }
    setCategory("");
}
```

```javascript
  function todoBoxIndex(index: number) {
    let temp = [...todoInputShow];
    temp[index] = !temp[index];
    setTodoInputShow(temp);
  }
  ```
  
>  ![](https://velog.velcdn.com/images/leejpsd/post/f6e01e5e-9c84-4d06-bb93-688fb78d4d0c/image.png)
>  ![](https://velog.velcdn.com/images/leejpsd/post/e92b39d1-aa7d-450c-8d44-bb0786fbc713/image.gif)


  
### 🔵 FE: Fish Inventory Drag and Drop
#### Drag and Drop 시스템의 첫번째 문제와 해결
물고기 이미지는 map을 이용해 그리고 있다. 당연하게도 물고기 한마리씩 드래그 되지 않고 모두 한번에 움직였다. 이것을 해결하기 위해 지난 주 사용했던 index 파라미터를 이용해야겠다 생각했다. 25개의 초기값 0,0 (물고기의 위치가 될 좌표 left,top)배열을 가진 state를 만들어주었고 이곳에 물고기 하나씩 데이터를 저장해주며 인라인스타일로 물고기의 position left,top에 그대로 넣어준다.

- 25마리의 물고기 left,top 좌표를 넣을 state생성

```javascript
const [fishPos, setFishPos] = useState(
    Array.from({ length: 25 }, (v, i) => {
      return [0, 0];
    })
  );
```

- 드래그가 도중에 실행되는 함수

```javascript
function dragHandler (e: any, i: number) {
    let tempData = [...fishPos];
    tempData[i][0] = e.target.offsetLeft + e.clientX - clientPos.x;
    tempData[i][1] = e.target.offsetTop + e.clientY - clientPos.y;
    setFishPos(tempData);
    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);
  };
```

- dragEndHandler 즉 드래그가 종료되는 시점에 서버에 해당 물고기의 index값과 left,top 좌표를 저장한다.

```javascript
function dragEndHandler (e: any, i: number) {
    let tempData = [...fishPos];
    tempData[i][0] = e.target.offsetLeft + e.clientX - clientPos.x;
    tempData[i][1] = e.target.offsetTop + e.clientY - clientPos.y;
    setFishPos(tempData);
    dispatch(
      __postFishPosition({
        fishNum: i,
        left: fishPos[i][0],
        top: fishPos[i][1],
      })
    );
    // 캔버스 제거
    const canvases = document.getElementsByClassName("canvas");
    for (let i = 0; i < canvases.length; i++) {
      let canvas = canvases[i];
      canvas.parentNode?.removeChild(canvas);
    }
    // 캔버스로 인해 발생한 스크롤 방지 어트리뷰트 제거
    document.body.removeAttribute("style");
    document.body.style.overflow = "hidden";
  };
```

- 서버에 저장해둔 물고기 좌표의 배열(positionData)을 index와 비교하여 inline스타일로 left와 top에 넣어준다.

```javascript
<InvenLayout ref={containerRef}>
      {fishImages.map((data: any, i: number) => {
        return (
          <Label key={i}>
            <FishImg
              draggable={userPoint >= data.point ? true : false}
              onDragStart={(e) => dragStartHandler(e)}
              onDrag={(e) => dragHandler(e, i)}
              onDragOver={(e) => dragOverHandler(e)}
              onDragEnd={(e) => {
                dragEndHandler(e, i);
              }}
              style={{
                left:
                  positionData.find((x) => x.fishNum === i)?.left === 0
                    ? "0.5em"
                    : positionData.find((x) => x.fishNum === i)?.left,
                top:
                  positionData.find((x) => x.fishNum === i)?.top === 0
                    ? "0.5em"
                    : positionData.find((x) => x.fishNum === i)?.top,
              }}
              src={data.image}
              alt=""
            />
```

#### Drag and Drop 시스템의 두번째 문제와 해결
물고기 좌표(positionData)를 그대로 서버에 저장하고 받아와서 받아온 데이터를 그대로 물고기 position에 넣어주었지만 넣는 순간 내가 서버로 보내는 물고기 좌표값 자체가 이상하게 틀어진다. 이를 해결하기 위해 서버에서 받아온 데이터를 다시한번 State에 저장해 해결했다.
              
```javascript
useEffect(() => {
    let tempData = [...fishPos];
    positionData.map((v) => {
      tempData[v.fishNum] = [v.left, v.top];
    });
    setFishPos([...tempData]);
  }, [positionData]);
```              
              
```javascript
          <Label key={i}>
            <FishImg
              draggable={userPoint >= data.point ? true : false}
              onDragStart={(e) => dragStartHandler(e)}
              onDrag={(e) => dragHandler(e, i)}
              onDragOver={(e) => dragOverHandler(e)}
              onDragEnd={(e) =>dragEndHandler(e, i)}
              style={{
                left: fishPos[i][0] === 0 ? "0.5em" : fishPos[i][0],
                top: fishPos[i][1] === 0 ? "0.85em" : fishPos[i][1],
              }}
              src={data.image}
              alt=""
              onContextMenu={(e) => FishDeleteHandler(e, i)}
            />              
```

              
### 🔵 FE: Websoket 
              
> ![](https://velog.velcdn.com/images/leejpsd/post/3c291d68-b90c-4d2a-85ea-c29cd08ecbaa/image.png)

채팅에 글자마다 혹은 send 등 이벤트가 일어날때마다 소켓이 실행된다.
              
useEffect와 의존성배열을 이용해보기도하고 데이터를 저장하는 onChange 함수를 최적화 시도했지만 채팅을 보낼때엔 무조건 이벤트 즉 렌더링이 일어나고 소켓이 실행되었다.
              
소켓을 실행하는 함수를  함수 바깥에서 실행해서 페이지가 렌더링 되더라도 한번만 연결되게 수정하였다.
              
> ![](https://velog.velcdn.com/images/leejpsd/post/c952658d-2e44-4bdb-9d16-0a0ff09a9627/image.png)


              
### 🔵 FE: ASMR 
> ![](https://velog.velcdn.com/images/leejpsd/post/c68e40ba-86f1-4e41-8cc7-3ecc0933e0e1/image.png)

audio.play()가 최초엔 실행이 되지만 audio.pause() 함수가 정상적으로 작동하지 않는다. 

처음엔 api를 받아오는 무료 라이센스 서버에서의 통신이 오래걸려 타임아웃 에러가 난다고 생각하여 우리 백엔드 서버에 오디오를 저장해 불러왔으나 역시나 실패했다.

생각보다 나와 같은 문제를 겪는 글들이 굉장히 많았다. 스택오버플로우를 참조하여 URL을 바로 변수에 할당하는 것이 아닌 useState를 이용해 저장하여 사용하였고 문제가 해결되었다.
              
> ![](https://velog.velcdn.com/images/leejpsd/post/ae531ad4-12a1-495c-8516-14348cc8c695/image.png)
              

### 🔵 FE: PrivateRoute    

- Router.tsx

``` javascript 
const Router = () => {
  const token: string = process.env.REACT_APP_TOKEN as string;
  // const token: string = getCookie("token") as string;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={EnumPages.HOME}
          element={<PrivateRoute token={token} component={<Home />} />}
        />
        <Route path={EnumPages.INTRO} element={<Intro />} />
        <Route
          path={EnumPages.MAIN}
          element={<PrivateRoute token={token} component={<Main />} />}
        />
        <Route
          path={EnumPages.CHATROOM}
          element={<PrivateRoute token={token} component={<ChatRoom />} />}
        />
        <Route
          path={EnumPages.STATISTICS}
          element={<PrivateRoute token={token} component={<Statistics />} />}
        />
        <Route
          path={EnumPages.UNLOCK}
          element={<PrivateRoute token={token} component={<UnLock />} />}
        />
        <Route path={EnumPages.LOGIN} element={<Login />} />
        <Route path={EnumPages.KAKAOLOGIN} element={<KakaoLogin />} />
        <Route path={EnumPages.NAVERLOGIN} element={<NaverLogin />} />
        <Route path={EnumPages.GOOGLELOGIN} element={<GoogleLogin />} />
        <Route path={EnumPages.WAVE} element={<Wave />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
```

- PrivateRoute.tsx

```jfunction 
PrivateRoute({ token, component: Component }) {
  return token 
  ? (Component) 
  : (<Navigate to="/login" {...alert("로그인이 필요한 페이지입니다.")} />);
}
export default PrivateRoute;
```

> ![](https://velog.velcdn.com/images/leejpsd/post/6025d3d7-5df1-40bc-8b96-9c6669f044b3/image.png)

프라이빗라우터를 사용하여 토큰이 있어야 홈 화면에 입장이 가능한데 로그인시 토큰을 저장해도 페이지 접근이 불가능했다.

setTimeout을 이용해 토큰을 저장하고 몇초 후 페이지에 접근하게 만들어 보았으나 실패 , 이후 디버깅 결과 로그인을 하기 전에도 라우터는 렌더링되므로 이미 토큰을 읽고 undefind 가 들어간 상태이다. 로그인을 해서 토큰을 저장해도 토큰이 업데이트 되지 않았다.

라우터에서 검증을 삭제하고 페이지 컴포넌트에서 쿠키에 저장한 토큰을 불러와 useEffect를 이용 토큰이 없을경우 접근이 불가능하게 만들었다.

```javascript
useEffect(() => {
    if (token === undefined) {
      navigate("/login");
      alert("로그인이 필요한 페이지입니다.");
    }
    document.body.style.overflow = "hidden";
  }, [token]);
```

### 🔵 FE: 로그인 단계에서 불필요한 통신과 에러 
> ![](https://velog.velcdn.com/images/leejpsd/post/4d907fe4-7829-4065-9f92-793ee73afd7b/image.png)

위의 프라이빗라우터와 마찬가지인 이유로 로그인 단계에서 이미 렌더링이 일어나 헤더에 있는 통신들이 useEffect에 의해 시작된다. 하지만 아직 로그인을 하여 토큰을 저장하지 않았으므로 token은 undefind 가 되어 당연하게 에러가 난다.
위의 프라이빗라우터를 해결하며 힌트를 얻어 로그인전 불필요한 통신과 에러를 방지하기 위해 useEffect에 조건과 의존성배열에 token을 추가해 에러를 없앴다.

```javascript
useEffect(() => {
    if (token !== undefined) {
      dispatch(__getDayMyRank());
      dispatch(__getWeekMyRank());
      dispatch(__getUserProfile());
      return () => {
        dispatch(__getCheckOutTimer());
      };
    }
  }, [token]);
```

  ----
### 🟠 BE: 채팅방 인원수 카운트 오류
각 채팅방에 입장한 인원수 카운트를 할 때, 만약 한 유저가 두 브라우저를 띄우고 같은 채팅방에 입장시 2명으로 인원수가 카운트 되어지는 문제

중복허용이 되지 않는 Set을 이용: 입장시 세션ID(키)와 닉네임(밸류)을 저장한 후, 닉네임(밸류)을 기준으로 Set에 저장하여 중복카운트 방지 → 입장은 중복없이 카운트가 되었으나, 퇴장시 아직 하나의 브라우저가 남아있음에도 인원이 -1명이 됨(유저가 여전히 채팅방에 있음에도 나간 것으로 확인)

입장시, 1번과 동일하게 value 기준으로 Set을 만들어 카운트(중복제거)하고, 퇴장시 세션ID(키)를 찾아 제거 후 다시 value기준 Set으로 카운트
> ![](https://velog.velcdn.com/images/leejpsd/post/2887843a-dd16-4dc9-9d25-df47f844af3e/image.png)
> ![](https://velog.velcdn.com/images/leejpsd/post/ed97c2ec-a0ac-4615-8a20-ca16661d34ea/image.png)

              
### 🟠 BE: 시간 세팅
공부시간 기록서비스이다보니 자정을 기준으로 하루를 초기화하게되면 유저가 공부하는 중간에 체크인/체크아웃을 다시 해줘야하는 번거로움이 발생하는 경우가 많음
(팀회의를 거쳐 항해의 시스템과 동일한 새벽5시에 하루초기화 결정)

만약 자정이 넘은 시간에 체크인을 하게 된 경우, 체크인 시간값에서 -5시간을하여  DB에 저장하여 같은 하루의 공부량으로 기록하도록 함.
하지만, 체크인/아웃을 할 때마다 -5시간을 적용해줘야해서 성능의 저하가 우려

서버시간자체를 자정에 하루를 초기화하는 것이 아닌 오전5시에 초기화되도록 로직 수정. 체크인/체크아웃 시간에서 -5시간을 할 필요없이 현재 시간 자체를 DB에 저장하여도 같은 하루로 설정되도록 함
> ![](https://velog.velcdn.com/images/leejpsd/post/16b0cf6a-e2cc-4258-a59b-417967901e68/image.png)
              

### 🟠 BE: 시간 세팅
자동배포 성공 후에도 서버가 작동하지 않는 문제

GitHub Action으로 자동배포시에 .gitignore 로 설정된 application.properties 파일은 커밋되있지 않기 때문에 빌드시에 값들이 지정되지 않아서 작동이 되지않음.
따라서, GitHub 시크릿에 값을 하나하나 설정하여 빌드 때에 이 설정값들이 지정될 수 있도록 하여 빌드성공. 하지만, 설정값이 많은데 일일이 값을 시크릿 설정으로 해줘야하는 번거로움이 있음

GitHub 시크릿에 하나하나 설정값을 지정하지 않고 전체 설정값을 GitHub 시크릿에 저장해두고, CI/CD를 진행할 때 application.properties 파일을 생성한 후 이 값 전체를 넣어주도록 설정함
> ![](https://velog.velcdn.com/images/leejpsd/post/72407c4b-d2a6-47b0-af9f-1fa4327ccef9/image.png)

---
## 🏍 프론트엔드 최적화 
> 1. 컴포넌트의 분리.
2. React.memo()를 사용한 메모이제이션.
   - 리렌더링이 자주 일어나지 않는다면 굳이 사용할 필요가 없다. (메모리에 불필요하게 남아있을 필요 없음)
3. 흩어진 useEffect 의존성배열 활용.
5. 온클릭시 일어나는 함수는 화살표함수에서 funtion 함수로 변경.
   - 화살표 함수, 특히 축약형 화살표 함수는 기존 함수에 비해 실행하는데 더 많은 시간이 걸린다.
6. 불필요한 통신이 일어나는건 전부 막기.
7. debounce와 throttle를 이용한 최적화.

### ✔ 로그인페이지
![](https://velog.velcdn.com/images/leejpsd/post/3bf8a268-489b-4cca-a52f-05ee96c19a75/image.png)
### ✔ 메인페이지![](https://velog.velcdn.com/images/leejpsd/post/7b9d88f8-5e93-4544-9877-ca6ecd6ecb04/image.png)
### ✔ 통계페이지![](https://velog.velcdn.com/images/leejpsd/post/67cd7693-4b9f-434d-91ac-ef178882e650/image.png)
### ✔ 도감페이지![](https://velog.velcdn.com/images/leejpsd/post/8a289d66-cfa3-4241-b880-e1c951977cec/image.png)
              
----
## 💻 팀원소개 
### FRONTEND(이중표/은예찬/유동건)
 ![](https://velog.velcdn.com/images/leejpsd/post/b04fb21a-77ef-4e69-aed6-4015997fbd72/image.png)
### FRONTEND(이중표/은예찬/유동건)
![](https://velog.velcdn.com/images/leejpsd/post/8b546231-f29d-48eb-958a-06d9754a49c4/image.png)
### 팀원 GitHub 
|이름|포지션|분담|GitHub|
|------|---|---|---|
|이중표🔸|FE, DE|소셜로그인, 체크인체크아웃시스템,</br> 달력모달(Calendar & TodoList & D-day),</br> 통계페이지, 물고기드래그앤드랍, Asmr기능|https://github.com/leejpsd|
|은예찬|FE, DE|실시간채팅, 체크인체크아웃시스템, 도감페이지, 프로필관리,</br> 프라이빗라우터|https://github.com/eunyechan|
|유동건|FE|기술고문|https://github.com/peppermintt0504|
|김명수🔸|BE|Todo카테고리 조회/생성/수정/삭제, TodoList 조회/생성/수정/삭제,</br> 물고기 위치 변경/조회|https://github.com/PaulKim330|
|김혜림|BE|소셜로그인(카카오/네이버/구글), 실시간채팅, CI/CD,</br> 엔티티 연관관계설정|https://github.com/hlim9022|
|박민정|BE|Todo카테고리 조회/생성/수정/삭제, TodoList 조회/생성/수정/삭제|https://github.com/minjpark3|
|박민정|BE|D-day 조회/생성/수정/삭제, 체크인/체크아웃 기능,</br> 전체랭킹(주간/일간) & 개인랭킹(주간/일간) 조회|https://github.com/ghwo68|
