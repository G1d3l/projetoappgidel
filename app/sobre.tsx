import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';


export default function Sobre() {
return (
<ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
<Text style={styles.pageTitle}>Sobre Nós</Text>
<Text style={styles.sectionText}>
A ONG Negos Doces eleva a autoestima negra através de acolhimento, educação e projetos culturais que ajudam jovens a florescer e encontrar seu espaço.
</Text>
</ScrollView>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#1a1a1a' },
pageTitle: { fontSize: 28, fontWeight: '700', color: '#B060FF', marginBottom: 12 },
sectionText: { color: '#fff', fontSize: 16, lineHeight: 22 },
});