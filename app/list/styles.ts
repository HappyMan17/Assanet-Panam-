import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    paddingTop: 5,
    backgroundColor: '#ffffff',
  },
  task_list: {
    width: '100%',
    maxHeight: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // marginTop: 5,
  },
  button: {
    width: 200,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    textAlign: 'center',
    fontSize: 30,
  },
  title: {
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
