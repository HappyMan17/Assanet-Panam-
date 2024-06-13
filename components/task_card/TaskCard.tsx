import { Image, Text, View } from "react-native"
import { styles } from "./styles";
import { Task } from "@/types/taksType";

const photo = 'https://reactnative.dev/img/tiny_logo.png';
const taskName = 'Task Name';
const taskCreatedAt = '02/10/2024';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({task}) => {
  return (
    <View style={styles.card}>
      {
        !task.avatar ?
        <Image
          style={styles.avatar}
          source={{ uri: task.avatar }} />
        :
        <Image
          style={styles.avatar}
          source={{ uri: photo }} />
      }
      <View style={{flexDirection: 'column', justifyContent: "flex-start"}}>
        <Text style={styles.text}> {task.name} </Text>
        <Text style={styles.sub_text}> {task.createdAt} </Text>
      </View>
    </View>
  )
}
