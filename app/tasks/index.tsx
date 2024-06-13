import { Link } from "expo-router";
import { Text, View, TextInput, FlatList, SafeAreaView } from "react-native";
import { styles } from './styles';
import { AppButton } from "@/components/button/AppButton";
import { useCallback, useEffect } from "react";
import { useTasks } from "@/hooks/useTasks";
import { TaskCard } from "@/components/task_card/TaskCard";

export default function Tasks() {
  const {
    userTasks,
    error,
    isLoading,
    startFetchingTasks,
  } = useTasks();

  return (
    <View
      style={styles.container}
    >
      {/* <View style={styles.task_menu}> */}
        {/* <Text style={styles.title}> Create Task </Text>
        <TextInput style={styles.input} placeholder="Task Name" /> */}
        <AppButton
          customButtonStyle={styles.button}
          customTextStyle={styles.title}
          title='New Task'
          onPress={() => {}} />
      {/* </View> */}
      <View style={styles.task_list}>
        <FlatList
          data={userTasks}
          renderItem={({item}) => <TaskCard task={item} />}
          keyExtractor={(item) => item.id}
          />
      </View>
      <Link href='/' style={styles.button}> Home </Link>
    </View>
  );
}
