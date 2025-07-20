import React from 'react';
import { View, Text, ScrollView, Button, Linking, StyleSheet } from 'react-native';

export default function ArticuleScreen({ route }) {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description}>{article.description}</Text>
      <Button title="Read Full Article" onPress={() => Linking.openURL(article.url)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 20 }
});