import { View, ActivityIndicator } from "react-native";

export const LoadingComponent = () => {
  return (
    <View style={{ justifyContent: 'center', height: '90%', width: '100%' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>  
  )
}
