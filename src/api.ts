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
};

export type IUserData = {
  id: number;
  email: string;
  nickname: string;
  defaultFish: string;
  loginType: string;
  point: string;
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
  width: string;
  height: string;

  border: string;
  borderRadius: string;

  display: string;

  margin: string;
  padding: string;
  defaultValue: any;
  type: string;
  placeholder: string;
  ref: any;
  onChange: () => void | {} | undefined;
};

// * Grid Type
export type IGridProps = {
  width: string;
  height: string;

  margin: string;
  padding: string;

  display: string;
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
