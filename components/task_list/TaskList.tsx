import { FlatList, Text, View } from "react-native"
import { TaskCard } from "../task_card/TaskCard"
import { styles } from "./styles"
import { LoadingComponent } from "../loading/LoadingComponent";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Task } from "@/types/taksType";
import { useState } from "react";

interface TaskListProps {
  data: any;
  isLoading?: boolean;
  hasTitle?: boolean;
  hasCheckbox?: boolean;
  onTaskPress?: (task: Task, bool: boolean) => void;
  title?: string;
}

export const TaskList:React.FC<TaskListProps> = ({
  data,
  isLoading = false,
  hasTitle = false,
  hasCheckbox = false,
  onTaskPress = () => {},
  title = '',
}) => {

  const filterData = (data: Task[]) => {
    const taskDone: Task[] = [];
    const taskNotDone: Task[] = [];

    data.forEach((task) => {
      if (task.done) {
        taskDone.push(task);
      } else {
        taskNotDone.push(task);
      }
    });

    return [...taskNotDone, ...taskDone]
  }

  return (
    <View style={styles.task_list}>
      {
        hasTitle && (
          <Text style={styles.title}>{title}</Text>
        )
      }
      {
        isLoading ? (
          <LoadingComponent />
        ) : (
          <FlatList
            data={filterData(data)}
            renderItem={({item}) => {
              return (
                <View style={{ flexDirection: 'row', width: '100%' }}>
                  {
                    hasCheckbox && (
                      <BouncyCheckbox 
                        onPress={(isChecked: boolean) => onTaskPress(item, isChecked)}
                        isChecked={item.done}
                        fillColor="black"
                      />
                    )
                  }
                  <TaskCard style={hasCheckbox && { width: "85%" }} task={item} />
                </View>
              )
            }}
            keyExtractor={(item) => item.id}
            />
        )
      }
    </View>
  )
}
