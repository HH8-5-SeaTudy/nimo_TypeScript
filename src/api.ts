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

/**
 * Timer API
 */

export type ItimerInitialState = {
  timer: Itimer[];
};

export type Itimer = {
  dayStudyTime: string;
  totalStudyTime: string;
  todayLogs: todayLogs[];
};

export type todayLogs = {
  checkIn: string;
  checkOut: string;
};

//StopWatch Time
export type Itime = {
  timeHH: number;
  timeMM: number;
  timeSS: number;
};

//StopWatch function
export type Ivoid = {
  startHandler(): void;
  endHandler(): void;
};
