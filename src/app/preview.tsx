import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

type Params = {
  nome: string;
  cargo: string;
  empresa?: string;
  anos: string;
  tecnologia: string;
  cor: string;
};

export default function Preview() {
  const { nome, cargo, empresa, anos, tecnologia, cor } =
    useLocalSearchParams<Params>();

  const anosNum = Number(anos);

  function getCardColor() {
    switch (cor) {
      case 'azul':
        return '#2563EB';
      case 'verde':
        return '#22C55E';
      case 'roxo':
        return '#A855F7';
      default:
        return '#1E293B';
    }
  }

  function getNivel() {
    if (anosNum <= 2)
      return {
        label: 'Júnior',
        textColor: '#0F172A',
        bg: '#a7a7a7',
      };

    if (anosNum <= 5)
      return {
        label: 'Pleno',
        textColor: '#0F172A',
        bg: '#008cff',
        shadow: '#008cff',
      };

    return {
      label: 'Sênior',
      textColor: '#0F172A',
      bg: '#FBBF24',
      shadow: '#FBBF24',
    };
  }

  const nivel = getNivel();
  const avatarLetter = nome ? nome.charAt(0).toUpperCase() : '?';
  const showEmpresa = empresa && empresa.length > 0;

  return (
    <View style={styles.container}>

      <Text style={styles.headerTitle}>Seu Cartão</Text>

      <View style={[styles.card, { backgroundColor: getCardColor() }]}>

        <View style={styles.flare1} />
        <View style={styles.flare2} />

        {/* AVATAR */}
        <View style={styles.avatarShadow}>
          <View style={styles.avatar}>
            <Text
              style={[
                styles.avatarText,
                { color: getCardColor() }
              ]}
            >
              {avatarLetter}
            </Text>
          </View>
        </View>

        {/* 👇 NOME (ISOLADO) */}
        <View style={styles.nameBox}>
          <Text style={styles.name}>{nome}</Text>
        </View>

        {/* 👇 CARGO (ISOLADO) */}
        <View style={styles.cargoBox}>
          <Text style={styles.info}>{cargo}</Text>
        </View>

        {/* 👇 EMPRESA (ISOLADO) */}
        {showEmpresa && (
          <View style={styles.empresaBox}>
            <Text style={styles.info}>{empresa}</Text>
          </View>
        )}

        {showEmpresa && <View style={styles.line} />}

        {/* 👇 ESPECIALISTA EM (ISOLADO) */}
        <View style={styles.especialistaBox}>
          <Text style={styles.techLabel}>Especialista em</Text>
        </View>

        {/* 👇 TECNOLOGIA (ISOLADO) */}
        <View style={styles.techBox}>
          <Text style={styles.tech}>
            {tecnologia}
          </Text>
        </View>

        <View style={[styles.badge, { backgroundColor: nivel.bg }]}>
          <Text style={[styles.badgeText, { color: nivel.textColor }]}>
            {nivel.label}
          </Text>
        </View>

        <Text style={styles.expText}>
          {anosNum} anos de experiência
        </Text>

      </View>

      <View style={styles.buttons}>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => router.back()}
        >
          <Text style={styles.editText}>Editar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.finalButton}
          onPress={() => router.replace('/sucesso')}
        >
          <Text style={styles.buttonText}>Finalizar</Text>
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
    justifyContent: 'center',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 50,
    marginTop: -100,
    alignSelf: 'flex-start',
  },

  card: {
    width: '100%',
    borderRadius: 20,
    padding: 36,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 12,
  },

  flare1: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 120,
    height: 120,
    backgroundColor: '#FFFFFF',
    opacity: 0.06,
    borderRadius: 60,
  },

  flare2: {
    position: 'absolute',
    top: 30,
    right: -50,
    width: 140,
    height: 140,
    backgroundColor: '#FFFFFF',
    opacity: 0.04,
    borderRadius: 860,
  },

  avatarShadow: {
    backgroundColor: 'rgba(0,0,0,0.08)',
    padding: 5,
    borderRadius: 60,
    marginBottom: 10,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
  },

  // 👇 NOVOS BLOCOS
  nameBox: {
    alignItems: 'center',
  },

  cargoBox: {
    alignItems: 'center',
  },

  empresaBox: {
    alignItems: 'center',
  },

  especialistaBox: {
    alignItems: 'center',
    fontSize: 14000,
  },

  techBox: {
    alignItems: 'center',
  },

  techLabel: {
    fontSize: 14,
    color: '#e2f0e6',
    opacity: 0.9,
    fontWeight: 'heavy',
  },

  name: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
  },

  info: {
    fontSize: 14,
    color: '#f0e9e2',
    marginTop: 4,
    fontWeight: '400',
  },

  tech: {
    fontSize: 20,
    color: '#f0e9e2',
    marginTop: 4,
    fontWeight: 'bold',

  },

  line: {
    marginTop: 30,
    marginBottom: 30,
    width: '80%',
    height: 1,
    backgroundColor: '#f0eae2',
    opacity: 0.3,
    marginVertical: 8,
  },

  badge: {
    marginTop: 30,
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  badgeText: {
    fontWeight: 'bold',
  },

  expText: {
    marginTop: 10,
    color: '#E2E8F0',
    fontSize: 13,
    opacity: 0.85,
  },

  buttons: {
    marginTop: 30,
    width: '100%',
    gap: 20,
  },

  editButton: {
    borderWidth: 2,
    borderColor: '#0a40c0',
    padding:15,
    borderRadius: 12,
    alignItems: 'center',
  },

  editText: {
    fontSize: 20,
    color: '#E2E8F0',
    fontWeight: 'bold',
  },

  finalButton: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});