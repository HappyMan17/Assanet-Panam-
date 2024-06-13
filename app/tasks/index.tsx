import { Link } from "expo-router";
import { Text, View, TextInput, FlatList, SafeAreaView } from "react-native";
import { styles } from './styles';
import { AppButton } from "@/components/button/AppButton";
import { useCallback, useEffect, useState } from "react";
import { useTasks } from "@/hooks/useTasks";
import { TaskCard } from "@/components/task_card/TaskCard";
import { CreateTaskModal } from "./modals/CreateTaskModal";

export default function Tasks() {
  const {
    userTasks,
    error,
    isLoading,
    startCreatingTask,
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

  return (
    <View
      style={styles.container}
    >
        <AppButton
          customButtonStyle={styles.button}
          customTextStyle={styles.title}
          title='New Task'
          onPress={onOpenModal} />
      <View style={styles.task_list}>
        <FlatList
          data={userTasks}
          renderItem={({item}) => <TaskCard task={item} />}
          keyExtractor={(item) => item.id}
          />
      </View>
      {
        modalState.isShown && (
          <CreateTaskModal onClose={onCloseModal} onSave={onCreateTask} />
        )
      }
    </View>
  );
}
