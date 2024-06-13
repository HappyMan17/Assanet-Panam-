import { View } from "react-native";
import { styles } from './styles';
import { AppButton } from "@/components/button/AppButton";
import { useState } from "react";
import { useTasks } from "@/hooks/useTasks";
import { CreateTaskModal } from "./modals/CreateTaskModal";
import { TaskList } from "@/components/task_list/TaskList";
import { ErrorMessage } from "@/components/error_message/ErrorMessage";
import { Task } from "@/types/taksType";

export default function TasksScreen() {
  const {
    userTasks,
    error,
    isLoading,
    startCreatingTask,
    startUpdatingTask,
  } = useTasks();

  const [modalState, setModalState] = useState({
    isShown: false,
  })

  const onOpenModal = () => {
    setModalState({
      isShown: true,
    });
  }
  
  const onCloseModal = () => {
    setModalState({
      isShown: false,
    });
  }

  const onCreateTask = (value: string) => {
    onCloseModal();
    const taskName = value.trim().toLowerCase();
    if (taskName.length === 0) {
      return;
    }
    // create task
    startCreatingTask(taskName);
  };

  const onTaskDone = (task: Task, bool: boolean) => {
    const newTask = {
      ...task,
      done: bool,
    };
    startUpdatingTask(newTask);
  }

  return (
    <View
      style={styles.container}
    >
      <AppButton
        customButtonStyle={styles.button}
        customTextStyle={styles.title}
        title='New Task'
        onPress={onOpenModal} />
      <TaskList
        data={userTasks}
        isLoading={isLoading}
        hasCheckbox={true}
        onTaskPress={onTaskDone}
      />
      
      {/* Modals */}
      {
        modalState.isShown && (
          <CreateTaskModal onClose={onCloseModal} onSave={onCreateTask} />
        )
      }
      {
        error && (
          <ErrorMessage message={error} />
        )
      }
    </View>
  );
}
