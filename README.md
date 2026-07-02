# EventPay

Plataforma de venda de ingressos online com checkout, QR Code verificável e validação antifraude — construída para resolver um problema real: **garantir que o ingresso vendido seja o ingresso que entra**.

> Em construção pública. Cada módulo é commitado, documentado e publicado antes do próximo começar.

## Por que esse projeto existe

Organizadores de eventos precisam de confiança em 3 pontos: o pagamento é real, o ingresso não pode ser duplicado, e uma contestação de pagamento (chargeback) não pode continuar dando acesso a alguém. É esse o problema que o EventPay resolve.

## Stack

- **Frontend:** React + Vite
- **Backend (em progresso):** Firebase (Auth, Firestore, Cloud Functions)
- **Pagamento (em progresso):** Stripe Checkout + Webhooks
- **Identificação de ingresso (em progresso):** QR Code com validação server-side

## Status atual

- [x] Estrutura do projeto (Vite + React)
- [x] Git configurado e versionado publicamente
- [ ] Autenticação de usuário (Firebase Auth)
- [ ] Cadastro e listagem de eventos
- [ ] Checkout com Stripe
- [ ] Webhook de confirmação de pagamento
- [ ] Geração de ticket com QR Code
- [ ] Validação antifraude / check-in
- [ ] Tratamento de chargeback e disputa

## Como rodar localmente

\`\`\`bash
git clone https://github.com/AlexMell01/eventpay.git
cd eventpay
npm install
npm run dev
\`\`\`

## Autor

Alexsandro Costa — [LinkedIn](https://www.linkedin.com/in/alex-costa-2b46bb1a9/) · [GitHub](https://github.com/AlexMell01)