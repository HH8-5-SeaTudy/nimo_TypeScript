/**
 * Category Todo API
 */

// * Category IInitialState
export type IDateTodosInitialState = {
  dateTodos: ITodos[];
};
// * Category TodoList 전체조회
export type ITodos = {
  categoryId: number;
  categoryName: string;
  memberCateDto: {
    memberId: number;
    email: string;
  };
  // category: ICategory[];
  selectDate: string;
  todoList: ITodoList[];
  success: boolean;
  error: null;
};
// * TodiList Type
export type ITodoList = {
  content: string;
  done: number;
  selectDate: string;
  todoId: number;
  categoryId: number;
};
// * Category Type
export type ICategory = {
  categoryId: number;
  categoryName: string;
  selectDate: string;
  memberCateDto: {
    memberId: number;
    email: string;
  };
};

/**
 * Timer API
 */
export interface Iitem {
  todoId: string;
  content: string;
  selectDate: string;
}
export interface Itime {
  timer: [];
  timeWatch: string;
}
