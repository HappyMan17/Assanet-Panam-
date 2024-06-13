import { FlatList, Text, View } from "react-native"
import { TaskCard } from "../task_card/TaskCard"
import { styles } from "./styles"
import { LoadingComponent } from "../loading/LoadingComponent";

interface TaskListProps {
  data: any;
  isLoading?: boolean;
  hasTitle?: boolean;
  title?: string;
}

export const TaskList:React.FC<TaskListProps> = ({
  data,
  isLoading = false,
  hasTitle = false,
  title = '',
}) => {
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
            data={data}
            renderItem={({item}) => <TaskCard task={item} />}
            keyExtractor={(item) => item.id}
            />
        )
      }
    </View>
  )
}
