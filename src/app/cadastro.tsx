import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';
import { useWindowDimensions } from 'react-native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroCargo, setErroCargo] = useState('');
  const [erroAnos, setErroAnos] = useState('');
  const [erroTecnologia, setErroTecnologia] = useState('');
  const [erroCor, setErroCor] = useState('');

  const { width } = useWindowDimensions();

  function gerarCartao() {

    let valido = true;

    setErroNome('');
    setErroCargo('');
    setErroAnos('');
    setErroTecnologia('');
    setErroCor('');

    if (nome.trim().length < 3) {
      setErroNome('Digite pelo menos 3 caracteres');
      valido = false;
    }

    if (!cargo.trim()) {
      setErroCargo('Campo obrigatório');
      valido = false;
    }

    if (!anos.trim()) {
      setErroAnos('Campo obrigatório');
      valido = false;
    } else if (!/^\d+$/.test(anos)) {
      setErroAnos('Digite apenas números');
      valido = false;
    } else if (Number(anos) <= 0) {
      setErroAnos('Digite um número maior que 0');
      valido = false;
    }

    if (!tecnologia.trim()) {
      setErroTecnologia('Campo obrigatório');
      valido = false;
    }

    if (!cor) {
      setErroCor('Selecione uma cor');
      valido = false;
    }

    if (!valido) return;

    router.push({
      pathname: '/preview',
      params: {
        nome,
        cargo,
        empresa,
        anos,
        tecnologia,
        cor,
      },
    });
  }

  const cores = [
    { key: 'azul', color: '#2563EB', label: 'Azul' },
    { key: 'verde', color: '#22C55E', label: 'Verde' },
    { key: 'roxo', color: '#A855F7', label: 'Roxo' },
  ];

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>Cadastro</Text>

        <Text style={styles.footerTop}>
          Preencha seus dados de dev
        </Text>

        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        {erroNome ? (
          <Text style={styles.errorText}>{erroNome}</Text>
        ) : null}

        <Text style={styles.label}>Cargo</Text>
        <TextInput
          style={styles.input}
          value={cargo}
          onChangeText={setCargo}
        />

        {erroCargo ? (
          <Text style={styles.errorText}>{erroCargo}</Text>
        ) : null}

        <Text style={styles.label}>Empresa (opcional)</Text>
        <TextInput
          style={styles.input}
          value={empresa}
          onChangeText={setEmpresa}
        />

        <Text style={styles.label}>Anos de experiência</Text>
        <TextInput
          style={styles.input}
          value={anos}
          onChangeText={setAnos}
          keyboardType="numeric"
        />

        {erroAnos ? (
          <Text style={styles.errorText}>{erroAnos}</Text>
        ) : null}

        <Text style={styles.label}>Tecnologia favorita</Text>
        <TextInput
          style={styles.input}
          value={tecnologia}
          onChangeText={setTecnologia}
        />

        {erroTecnologia ? (
          <Text style={styles.errorText}>{erroTecnologia}</Text>
        ) : null}

        <Text style={[styles.label, { marginTop: 20 }]}>
          Cor do cartão
        </Text>

        <View style={styles.colorsContainer}>
          {cores.map((item) => {
            const selected = cor === item.key;

            return (
              <TouchableOpacity
                key={item.key}
                style={[
                  styles.colorCard,
                  selected && {
                    borderColor: item.color,
                    borderWidth: 2,
                  },
                ]}
                onPress={() => setCor(item.key)}
              >
                <View
                  style={[
                    styles.colorCircle,
                    { backgroundColor: item.color },
                  ]}
                />

                <Text
                  style={[
                    styles.colorText,
                    selected && {
                      color: item.color,
                      fontWeight: 'bold',
                    },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {erroCor ? (
          <Text style={styles.errorText}>{erroCor}</Text>
        ) : null}

      </View>

      <View style={styles.bottomContent}>
        <TouchableOpacity
          style={[
            styles.button,
            { paddingHorizontal: width * 0.290 }
          ]}
          onPress={gerarCartao}
        >
          <Text style={styles.buttonText}>Gerar Cartão</Text>
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
  },

  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: '10%',
  },

  footerTop: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 20,
    opacity: 0.7,
  },

  label: {
    color: '#CBD5E1',
    fontWeight: '600',
    marginBottom: 6,
    fontSize: 13,
  },

  input: {
    backgroundColor: '#404e72',
    padding: 14,
    borderRadius: 10,
    color: '#fff',
    marginBottom: 10,
  },

  errorText: {
    color: '#F87171',
    fontSize: 12,
    marginBottom: 10,
    marginTop: -4,
  },

  colorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#404e72',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    width: '32%',
  },

  colorCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 10,
  },

  colorText: {
    color: '#ffffff',
    fontSize: 14,
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  bottomContent: {
    alignItems: 'center',
    marginBottom: 10,
  },
});