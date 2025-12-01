import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function Projetos() {
return (
<ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
<Text style={styles.pageTitle}>Projetos</Text>


<View style={styles.card}>
<Text style={styles.cardTitle}>Mentoria de Autoestima</Text>
<Text style={styles.cardText}>Encontros semanais para fortalecimento emocional e identidade.</Text>
</View>


<View style={styles.card}>
<Text style={styles.cardTitle}>Oficinas Criativas</Text>
<Text style={styles.cardText}>Arte, escrita, dança e expressão corporal para jovens negros.</Text>
</View>


<View style={styles.card}>
<Text style={styles.cardTitle}>Círculos de Conversa</Text>
<Text style={styles.cardText}>Troca de vivências e fortalecimento comunitário.</Text>
</View>
</ScrollView>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#1a1a1a' },
pageTitle: { fontSize: 28, fontWeight: '700', color: '#FFA500', marginBottom: 16 },
card: { backgroundColor: '#2a2a2a', padding: 14, borderRadius: 12, marginBottom: 12 },
cardTitle: { fontSize: 18, fontWeight: '700', color: '#FFA500' },
cardText: { color: '#fff', fontSize: 15 },
});