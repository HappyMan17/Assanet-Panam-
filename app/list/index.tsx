import { View } from "react-native";
import { styles } from './styles';
import { useEffect } from "react";
import { useTasks } from "@/hooks/useTasks";
import { TaskList } from "@/components/task_list/TaskList";
import { ErrorMessage } from "@/components/error_message/ErrorMessage";

export default function TaskListScreen() {
  const {
    tasks,
    error,
    isLoading,
    startFetchingTasks,
  } = useTasks();

  useEffect(() => {
    if (tasks.length > 0) {
      return;
    }
    startFetchingTasks();
  }, []);

  return (
    <View
      style={styles.container}
    >
      <TaskList
        data={tasks}
        isLoading={isLoading}
        hasTitle={true} 
        title="Tasks Fetched" />
      {
        error && (
          <ErrorMessage message={error} />
        )
      }
    </View>
  );
};
