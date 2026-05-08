import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  const { width, height } = useWindowDimensions();

  function handleNavigate() {
    router.push('/cadastro');
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f2c4d',
      paddingHorizontal: 24,
      paddingVertical: 40,
      justifyContent: 'space-between',
    },

    topContent: {
      alignItems: 'center',
      marginTop: height * 0.15,
    },

    image: {
      width: width * 0.6,
      height: width * 0.6,
      marginBottom: -height * 0.10,
    },

    title: {
      fontSize: width * 0.18,
      fontWeight: '500',
      color: '#FFFFFF',
      marginBottom: 10,
    },

    subtitle: {
      fontSize: 16,
      color: '#CBD5E1',
      textAlign: 'center',
      width: '85%',
    },

    bottomContent: {
      alignItems: 'center',
      marginBottom: 20,
    },

    button: {
      backgroundColor: '#2563EB',
      paddingVertical: 18,
      paddingHorizontal: width * 0.25,
      borderRadius: 12,
      marginBottom: 15,
    },

    buttonText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: '600',
    },

    footerText: {
      fontSize: 15,
      color: '#CBD5E1',
      opacity: 0.35,
      marginTop: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image
          source={require('../../assets/BlueCreditCard-removebg-preview.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>DevCard</Text>

        <Text style={styles.subtitle}>
          Seu cartão de visita digital{'\n'}de dev mobile
        </Text>
      </View>

      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}>Criar meu cartão</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Aplicação Móvel • Aula 7
        </Text>
      </View>
    </View>
  );
}