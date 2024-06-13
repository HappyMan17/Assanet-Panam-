import { Task } from "@/types/taksType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TaskState {
  tasks: Task[];
  currentTask: Task | null;
  isLoading: boolean;
  error: string;
};

const initialState: TaskState = {
  tasks: [],
  currentTask: null,
  isLoading: false,
  error: '',
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean | null>) => {
      state.isLoading = action.payload ?? true;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCurrentTask: (state, action: PayloadAction<Task | null>) => {
      state.currentTask = action.payload;
    },
    clearCurrentTask: (state) => {
      state.currentTask = null;
    },
    clearTasks: (state) => {
      state.tasks = [];
    },
    addTasks: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const {
  setIsLoading,
  setErrorMessage,
  setCurrentTask,
  clearCurrentTask,
  clearTasks,
  addTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
