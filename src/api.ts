/**
 * Category Todo API
 */
// * Category IInitialState
export type IDateTodosInitialState = {
  dateTodos: ITodos[];
  allTodos: ITodos[];
};
// * Category TodoList 전체조회
export type ITodos = {
  categoryId: number;
  categoryName: string;
  selectDate: string;
  memberCateDto: {
    memberId: number;
    email: string;
  };
  todoList: ITodoList[];
  success: boolean;
  error: null;
};
// * TodoList Type
export type ITodoList = {
  content: string;
  done: number;
  selectDate: string;
  todoId: number;
  categoryId: number;
};

// * Timer API
export type ItimerInitialState = {
  timer: Itimer[];
};

export type Itimer = {
  dayStudyTime: string;
  totalStudyTime: string;
  todayLogs: todayLogs[];
  isStudy: boolean;
};

export type todayLogs = {
  checkIn: string;
  checkOut: string;
};

// * StopWatch Time
export type Itime = {
  timeHH: number;
  timeMM: number;
  timeSS: number;
};

// * UserData
export type IUser = {
  userData: IUserData[];
  userProfile: IUserData;
};

export type IUserData = {
  id: number;
  email: string;
  nickname: string;
  defaultFish: string;
  point: number;
};

// * StopWatch function
export type Ivoid = {
  startHandler(): void;
  endHandler(): void;
};

export type Ilocation = {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: { id: string };
};

//D-day Data
export type IDdayInitialState = {
  DdayData: IDday[];
};

export type IDday = {
  ddayId: number;
  title: string;
  dday: number;
  targetDay: string;
};

// * Button Type
export type IButtonProps = {
  width: string;
  height: string;
  margin: string;
  padding: string;

  display: string;
  alignItems: string;
  justifyContent: string;

  border: string;
  borderRadius: string;

  fontColor: string;
  fontSize: string;
  children: any;
  ref: any;
  onClick: () => void;
  disabled: boolean;

  theme: any;
};

// * Input Type
export type IInputProps = {
  width: any;
  height: string;
  margin: string;
  padding: string;
  display: string;
  border: string;
  borderRadius: string;
  defaultValue: string;
  type: string;
  placeholder: string;
  ref: any;
  onChange: (e: any) => void;
  onClick: (e: any) => void;
  fontSize: string;
  outline: string;
  transition: string;
  readOnly: boolean;
  value: any;
  color: string;
  fontWeight: string;
  cursor: string;
  backgroundColor: string;
};

// * Grid Type
export type IGridProps = {
  width: string;
  height: string;

  margin: string;
  padding: string;

  display: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;

  fontColor: string;
  fontSize: string;

  backgroundColor: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  background: string;

  border: string;
  borderRadius: string;

  defaultValue: any;
  placeholder: string;
  ref: any;
  disabled: boolean;
  theme: any;

  cursor: string;
  children: any;
  onClick: () => void;
};

// * Rank IInitialState
export type IRankInitialState = {
  dayRank: IRank[];
  weekRank: IRank[];
  dayMyRank: IDayMyRank;
  WeekMyRank: IWeekMyRank;
};

export type IDayMyRank = {
  nickname: string;
  myRank: number;
};

export type IWeekMyRank = {
  nickname: string;
  myRank: number;
};

// * Rank Info
export type IRank = {
  nickname: string;
  email: string;
  dayStudy: string;
  weekStudy: string;
  fish: string;
};
// * Position IInitialState
export type IPositionInitialState = {
  position: IPosition[];
};
// * Position Info
export type IPosition = {
  fishNum: number;
  left: number;
  top: number;
};
