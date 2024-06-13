import { Link } from "expo-router";
import { FlatList, Text, TextInput, View } from "react-native";
import { styles } from './styles';
import { useCallback, useEffect } from "react";
import { useTasks } from "@/hooks/useTasks";
import { TaskCard } from "@/components/task_card/TaskCard";

export default function Tasks() {
  const {
    tasks,
    error,
    isLoading,
    startFetchingTasks,
  } = useTasks();

  useEffect(() => {
    if (tasks.length === 0) {
      return;
    }
    startFetchingTasks();
  }, []);


  return (
    <View
      style={styles.container}
    >
      <View style={styles.task_list}>
        <Text style={styles.title}> Fetch Task List </Text>
        <FlatList
          data={tasks}
          renderItem={({item}) => <TaskCard task={item} />}
          keyExtractor={(item) => item.id}
          />
      </View>
      <Link href='/' style={styles.button}> Home </Link>
    </View>
  );
};
