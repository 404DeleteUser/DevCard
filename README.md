# 📱 DevCard

Aplicativo mobile desenvolvido com **React Native + Expo Router** para criação de cartões de visita digitais para desenvolvedores mobile.

---

## 🚀 Tecnologias utilizadas

- React Native  
- Expo  
- Expo Router  
- TypeScript  
- Flexbox  

---

## 📂 Estrutura do projeto

```bash
projeto-devcard/
├── app.json
├── package.json
└── src/
    └── app/
        ├── _layout.tsx
        ├── index.tsx
        ├── cadastro.tsx
        ├── preview.tsx
        └── sucesso.tsx
```

---

## 📱 Telas do aplicativo

### 🏠 Home (`index.tsx`)

Tela inicial de apresentação do aplicativo.

**Elementos:**
- Logo/imagem do cartão  
- Título: **DevCard**  
- Subtítulo: *Seu cartão de visita digital de dev mobile*  
- Botão: **Criar meu cartão**

**Ação ao clicar:**
```ts
router.push('/cadastro')
```

---

### 📝 Cadastro (`cadastro.tsx`)

Tela responsável pela coleta dos dados do usuário.

#### 📌 Campos do formulário

- Nome completo  
- Cargo  
- Empresa (opcional)  
- Anos de experiência  
- Tecnologia favorita  
- Cor do cartão (Azul, Verde, Roxo)  

---

#### ✅ Validações

- Nome obrigatório (mínimo 3 caracteres)  
- Cargo obrigatório  
- Anos de experiência obrigatório  
- Apenas números no campo de anos  
- Anos devem ser maior que 0  
- Tecnologia favorita obrigatória  
- Cor obrigatória  

---

#### 📤 Envio de dados

```ts
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
```

---

### 👀 Preview (`preview.tsx`)

Tela de visualização do cartão digital antes da finalização.

#### ⚙️ Funcionalidades

- `useLocalSearchParams()` para receber dados  
- Cartão dinâmico com cor selecionada  
- Avatar com inicial do nome  
- Exibição dos dados do usuário  

---

#### 📊 Nível do desenvolvedor

| Anos  | Nível  |
|------|--------|
| 0 a 2 | Júnior |
| 3 a 5 | Pleno  |
| 6+    | Sênior |

---

#### 🔘 Ações

- **Editar dados** → volta para cadastro  
- **Finalizar** → vai para sucesso  

---

### 🎉 Sucesso (`sucesso.tsx`)

Tela final de confirmação.

#### 💚 Elementos

- Ícone de sucesso  
- Fundo com círculo verde suave  
- Mensagem: **Cartão criado com sucesso!**  
- Submensagem informativa  

#### 🔘 Ações

- Criar outro cartão  
- Voltar ao início  

```ts
router.replace('/')
```

---

## 🧭 Navegação

| Rota         | Tela      |
|-------------|-----------|
| `/`         | Home      |
| `/cadastro` | Cadastro  |
| `/preview`  | Preview   |
| `/sucesso`  | Sucesso   |

---

## 📱 Responsividade

- Flexbox  
- `useWindowDimensions()`  
- Adaptado para diferentes tamanhos de tela  

---

## ▶️ Como executar o projeto

```bash
npm install
npx expo start
```

---

## 📌 Observação

Projeto desenvolvido com base no **Pixel 8 Pro**.
