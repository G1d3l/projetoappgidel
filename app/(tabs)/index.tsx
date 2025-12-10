import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.logo} />
        <Text style={styles.title}>ONG Negos Doces</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bem-vindo</Text>
        <Text style={styles.sectionText}>

Transformando autoestima negra em potência real.
Aqui, cada identidade é celebrada como única e valiosa, cada voz é reconhecida e cada história tem espaço para florescer. Nosso propósito é potencializar talentos, fortalecer confiança e abrir caminhos para que a comunidade negra acesse novas oportunidades, conquiste seu lugar e construa futuros repletos de possibilidades, autonomia e orgulho. Trabalhamos para que cada pessoa se enxergue como protagonista da própria jornada — e para que essa potência seja vivida, sentida e reconhecida todos os dias.


        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}></Text>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/projetos')}>
          <Text style={styles.cardTitle}>Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/sobre')}>
          <Text style={styles.cardTitle}>Sobre Nós</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/contato')}>
          <Text style={styles.cardTitle}>Contato</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a' },
  header: { alignItems: 'center', paddingTop: 36, paddingBottom: 12 },
  logo: { width: 280, height: 160, resizeMode: 'contain', marginTop: 8 },
  title: { fontSize: 28, fontWeight: '700', color: '#FFA500', marginTop: 8 },
  section: { padding: 20 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#6d07d3ff', marginBottom: 8 },
  sectionText: { color: '#fff', fontSize: 16, lineHeight: 24 },
  card: { backgroundColor: '#2a2a2a', padding: 14, borderRadius: 12, marginBottom: 12, marginTop: 6 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#FFA500' },
});