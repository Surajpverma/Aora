import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text className="text-3xl font-pblack" >Aora!</Text>
      <Link className=' text-orange-400 text-2xl' href="/home">home</Link>
      <StatusBar style="auto" />
    </View>
  );
}
