import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020617',
    opacity: 0.9,
  },
  card: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ffffff',

  },
  input: {
    width: '100%',
    height: 40,
    paddingLeft: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#20232a',
    backgroundColor: '#F8F8F8',
    marginBottom: 14,
  },
  title: {
    paddingVertical: 8,
    // color: '#ffffff',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});