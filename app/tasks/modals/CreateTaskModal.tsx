import { Modal, Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import { AppButton } from "@/components/button/AppButton"
import { useState } from "react"

interface CreateTaskModalProps {
  onClose: () => void
  onSave: (value: string) => void
}

export const CreateTaskModal:React.FC<CreateTaskModalProps> = ({
  onClose,
  onSave,
}) => {

  const [taskName, setTaskName] = useState('');

  return (
    <Modal
      animationType="slide"
      visible={true}
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}> Create Task </Text>
          <TextInput
            style={styles.input}
            placeholder="Task Name"
            value={taskName}
            autoFocus={true}
            onChangeText={(e) => setTaskName(e)}
          />
          <AppButton
          title='Add Task'
          onPress={() => onSave(taskName)} />
        </View>
        <View style={{marginTop: 15}}>
          <AppButton
          title='Close'
          customButtonStyle={styles.close_button}
          onPress={onClose} />
        </View>
      </View>
    </Modal>
  )
}
