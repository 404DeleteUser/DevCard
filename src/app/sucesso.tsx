import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { router } from 'expo-router';

export default function Sucesso() {
  function handleRestart() {
    router.replace('/');
  }

  return (
    <View style={styles.container}>

      <View style={styles.content}>

        <View style={styles.circle}>

          <Image
            source={require('../../assets/corect icon.png')}
            style={styles.icon}
            resizeMode="contain"
          />

        </View>

        <Text style={styles.title}>
          Cartão criado {'\n'}com sucesso!
        </Text>

        <Text style={styles.subtitle}>
          Seu cartão de visita digital está pronto.{'\n'}Compartilhe com a galera!
        </Text>

      </View>

      <View style={styles.footer}>

        <TouchableOpacity
          style={styles.button}
          onPress={handleRestart}
        >
          <Text style={styles.buttonText}>
            Criar outro cartão
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRestart}>
          <Text style={styles.link}>
            Voltar ao início
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2c4d',
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    width: 120,
    height: 120,
    borderRadius: 999,

    backgroundColor: 'rgba(34, 197, 94, 0.15)',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 60,
  },

  icon: {
    width: 90,
    height: 90,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    textAlign: 'center',
  },

  footer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 18,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  link: {
    color: '#2563EB',
    fontSize: 15,
  },
});