import { catfactsapi_get_fact_read } from "../../store/catFactsAPI/catfactsapi_response_get_GetFacts.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(catfactsapi_get_fact_read());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.yjbBIAhG}><Text style={styles.XwWRTRmV}>{"Can you see me?"}</Text></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  yjbBIAhG: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  XwWRTRmV: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled3;