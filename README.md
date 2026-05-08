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

## 📱 Tela do index.tsx
<img width="369" height="805" alt="image" src="https://github.com/user-attachments/assets/33efbe40-06bf-409e-b398-a58725acf463" />


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

## 📱 Tela do cadastro.tsx
<img width="364" height="791" alt="image" src="https://github.com/user-attachments/assets/6c9e9c92-50a1-42c4-bb5e-f4de0a8a5212" />


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

## 📱 Tela do preview.tsx
<img width="361" height="783" alt="image" src="https://github.com/user-attachments/assets/2fb950f4-443a-42bf-9a82-d086feaf08b4" />


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

## 📱 Tela do Sucesso.tsx
<img width="358" height="812" alt="image" src="https://github.com/user-attachments/assets/19557a44-d9d9-43d2-b48a-fa65a3b2127a" />

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
