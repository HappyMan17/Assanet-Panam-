import { Task } from "@/types/taksType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TaskState {
  tasks: Task[];
  userTasks: Task[];
  currentTask: Task | null;
  isLoading: boolean;
  error: string;
};

const initialState: TaskState = {
  tasks: [],
  userTasks: [],
  currentTask: null,
  isLoading: false,
  error: '',
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean | undefined>) => {
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
    addTasks: (state, action: PayloadAction<Task[] | []>) => {
      if (action.payload.length > 0) {
        state.tasks = action.payload;
      }
    },
    // user tasks
    addUserTaks: (state, action: PayloadAction<Task>) => {
      state.userTasks.push(action.payload);
    },
    updateUserTasks: (state, action: PayloadAction<Task>) => {
      state.userTasks = state.userTasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
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
  addUserTaks,
  updateUserTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
