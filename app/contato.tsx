import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';


export default function Contato() {
return (
<ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
<Text style={styles.pageTitle}>Contato</Text>
<Text style={styles.sectionText}>Email: contato@negosdoces.org</Text>
<Text style={styles.sectionText}>Instagram: @negosdoces</Text>
</ScrollView>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#1a1a1a' },
pageTitle: { fontSize: 28, fontWeight: '700', color: '#FFA500', marginBottom: 12 },
sectionText: { color: '#fff', fontSize: 16, lineHeight: 22, marginBottom: 8 },
});