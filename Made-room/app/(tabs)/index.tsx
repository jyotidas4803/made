import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://cuddly-funicular-4jqw5p9qxx5wc96j-3000.app.github.dev/' }} 
        style={{ flex: 1 }} 
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator size="large" color="blue" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
