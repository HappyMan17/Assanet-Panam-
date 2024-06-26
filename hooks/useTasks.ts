import { RootState } from "@/state/store";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import k from "@/constants/constants";
import {
  addTasks,
  addUserTaks,
  clearTasks,
  setErrorMessage,
  setIsLoading,
  updateUserTasks
} from "@/state/slices/taskSlice";
import { taskMapper } from "@/mappers/taskMapper";
import { Task } from "@/types/taksType";

export const useTasks = () => {
  const {
    currentTask,
    userTasks,
    tasks,
    error,
    isLoading,
  } = useAppSelector((state: RootState) => state.task);
  const dispatch = useAppDispatch();

  const clearMessage = () => {
    setTimeout(() => {
      dispatch(setErrorMessage(''));
    }, 2000);
  }

  const startFetchingTasks = async () => {
    try {
      dispatch(setIsLoading());
      const tasks = await fetch(`${k.API}/elements`).then((res) => res.json());
      const finalTasksList: Task[] = [];
      if (!tasks) {
        dispatch(setErrorMessage('Error fetching tasks'));
        clearMessage();
      }
      tasks.map((task: any) => {
        const currentTask = taskMapper(task);
        if (currentTask) {
          finalTasksList.push(currentTask);
        }
      });
      dispatch(clearTasks());
      dispatch(addTasks(finalTasksList));

      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setErrorMessage('Error fetching tasks'));
      clearMessage();
    }
  };

  // user tasks
  const startCreatingTask = async (taskName: string) => {
    dispatch(setIsLoading());
    const newTask: Task = {
      id: Math.random().toString(),
      name: taskName,
      createdAt: new Date().toDateString(),
      avatar: null,
    }
    dispatch(addUserTaks(newTask))
    dispatch(setIsLoading(false));
  };
  
  const startUpdatingTask = async (task: Task) => {
    dispatch(setIsLoading());
    dispatch(updateUserTasks(task))
    dispatch(setIsLoading(false));
  };

  return {
    // PARAMETERS
    currentTask,
    userTasks,
    tasks,
    error,
    isLoading,
    // METHODS
    startFetchingTasks,
    startCreatingTask,
    startUpdatingTask,
  }

};
