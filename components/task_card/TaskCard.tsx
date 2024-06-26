import { Image, Text, View } from "react-native"
import { styles } from "./styles";
import { Task } from "@/types/taksType";

const DEFAULTIMAGE = 'https://reactnative.dev/img/tiny_logo.png';

interface TaskCardProps {
  task: Task;
  style?: any;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  style = {},
}) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      {
        !task.avatar ?
        <Image
          style={styles.avatar}
          source={{ uri: task.avatar ?? DEFAULTIMAGE }} />
        :
        <Image
          style={styles.avatar}
          source={{ uri: DEFAULTIMAGE }} />
      }
      <View style={{flexDirection: 'column', justifyContent: "flex-start"}}>
        <Text style={styles.text}> {task.name} </Text>
        <Text style={styles.sub_text}> {task.createdAt} </Text>
      </View>
    </View>
  )
}
