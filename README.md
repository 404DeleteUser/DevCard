DevCard

Aplicativo mobile desenvolvido com React Native + Expo Router para criação de cartões de visita digitais para desenvolvedores mobile.

Tecnologias utilizadas
React Native
Expo
Expo Router
TypeScript
Flexbox
Estrutura do projeto

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
Descrição das telas
Tela 1 — Home (index.tsx)

Tela inicial de apresentação do aplicativo.

Elementos da tela:
Logo/imagem do cartão
Título “DevCard”

Subtítulo:

Seu cartão de visita digital de dev mobile

Botão:

Criar meu cartão

Funcionalidade:

Ao clicar no botão, o usuário é direcionado para a tela de cadastro utilizando:

router.push('/cadastro')

ela 2 — Cadastro (cadastro.tsx)

Tela responsável pela coleta dos dados do usuário.

Campos do formulário:
Nome completo
Cargo
Empresa (opcional)
Anos de experiência
Tecnologia favorita
Cor do cartão
Seleção de cor:

O usuário pode escolher entre:

Azul
Verde
Roxo
Validações implementadas:
Nome obrigatório com mínimo de 3 caracteres
Cargo obrigatório
Anos de experiência obrigatório
Campo de anos aceita apenas números
Número de anos deve ser maior que 0
Tecnologia favorita obrigatória
Cor obrigatória
Funcionalidade:

Após todas as validações passarem, os dados são enviados via params para a tela preview:

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

Tela 3 — Preview (preview.tsx)

Tela responsável pela visualização do cartão digital antes da finalização.

Funcionalidades:
Leitura dos dados utilizando:
useLocalSearchParams()

Renderização dinâmica do cartão
Alteração automática da cor do cartão conforme escolha do usuário
Avatar circular com inicial do nome
Exibição:
Nome
Cargo
Empresa
Tecnologia favorita
Sistema de nível:

O nível do desenvolvedor muda conforme os anos de experiência:
| Anos  | Nível  |
| ----- | ------ |
| 0 a 2 | Júnior |
| 3 a 5 | Pleno  |
| 6+    | Sênior |

Botões:
Editar dados → volta para cadastro
Finalizar → navega para tela de sucesso

Tela 4 — Sucesso (sucesso.tsx)

Tela final de confirmação.

Elementos:
Ícone de sucesso
Círculo verde suave ao fundo

Mensagem:

Cartão criado com sucesso!

Submensagem informativa

Botão:

Criar outro cartão

Link:

Voltar ao início

Funcionalidade:

O botão e o link retornam o usuário para a tela inicial:

router.replace('/')

Navegação

A navegação foi implementada utilizando Expo Router.

Rotas:
/ → Home
/cadastro → Cadastro
/preview → Preview do cartão
/sucesso → Tela final
Responsividade

O aplicativo foi desenvolvido utilizando:

Flexbox
useWindowDimensions()

Permitindo adaptação para diferentes tamanhos de tela.

Como executar o projeto

Instalar dependências:

npm install

npx expo start

Disclaimer: o projeto foi feito usando como base o Pixel 8 Pro
