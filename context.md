

# Context Engineering – E-commerce Puranga Biojoias

## 📌 Objetivo

Este documento define as **estratégias de gerenciamento de contexto** para o projeto Puranga Biojoias. Ele orienta como os dados, prompts, agentes e integrações devem ser estruturados e mantidos, garantindo **consistência, escalabilidade e manutenção eficiente** do e-commerce.

O foco é permitir que futuros desenvolvedores ou agentes de IA compreendam rapidamente:

* A estrutura de dados e prompts
* Regras de negócio do e-commerce
* Integrações com backend (Supabase) e frontend (React)
* Comportamentos esperados para interações automáticas (chat, recomendação, notificações)

---

## 🗂 Estrutura de Contexto

### 1. Dados de Produtos

* **Tabelas Supabase**: `produtos`, `categorias`, `tags`, `estoque`
* **Campos principais do produto**:

  * `id`: UUID
  * `nome`: string
  * `descricao`: string
  * `imagens`: array de URLs
  * `preco`: number
  * `material`: string
  * `categoria_id`: UUID
  * `estoque`: number
  * `status`: enum(`em_estoque`, `esgotado`)
* **Contexto de IA**:

  * Prompts podem acessar `descricao` e `tags` para recomendações inteligentes
  * Sistema deve considerar estoque e status antes de sugerir produtos

### 2. Dados de Usuário

* **Tabelas Supabase**: `usuarios`, `enderecos`, `pedidos`, `favoritos`
* **Campos essenciais**:

  * `id`: UUID
  * `nome`, `email`, `senha_hash`
  * `enderecos`: array de objetos (rua, cidade, CEP, país)
  * `historico_pedidos`: referência à tabela `pedidos`
  * `wishlist`: referência à tabela `produtos`
* **Contexto de IA**:

  * Personalização de recomendações
  * Preenchimento automático de endereços e histórico de compras

### 3. Prompts e Agentes

* **Agente de Recomendação**:

  * Entrada: histórico de compras, produtos visualizados, categorias favoritas
  * Saída: lista de produtos relevantes
  * Regras:

    1. Não sugerir produtos esgotados
    2. Dar prioridade a materiais sustentáveis e locais
* **Agente de Atendimento / FAQ**:

  * Entrada: perguntas do usuário
  * Saída: respostas com base na documentação e políticas da Puranga
  * Contexto: termos de uso, política de devolução, métodos de pagamento, frete

### 4. Contexto de Checkout

* Validação de estoque antes do pagamento
* Cálculo de frete (Correios API)
* Aplicação de cupons e descontos
* Regras de parcelamento (Stripe / PIX)
* Notificação de status por email ou WhatsApp (futuro)

---

## ⚙️ Boas Práticas de Context Engineering

1. **Separação de Contextos**:

   * Produto, usuário, checkout e agentes devem ter contextos isolados, mas interligados quando necessário.

2. **Persistência e Atualização**:

   * Dados críticos (estoque, pedidos, usuários) persistidos em Supabase
   * Logs de interação com agentes para análise futura

3. **Versionamento de Prompts**:

   * Sempre salvar versão de prompt usada em produção
   * Permitir rollback e ajustes rápidos sem quebrar funcionalidades

4. **Segurança e Compliance**:

   * Nunca expor dados sensíveis em prompts
   * Seguir LGPD e melhores práticas de proteção de dados

5. **Escalabilidade**:

   * Estruturar agentes e contexto pensando em múltiplos canais (chat, mobile, email)
   * Modularizar prompts e regras de negócio

---

## 📂 Estrutura de Pastas Recomendada

```
puranga-biojoias/
│
├─ context/
│  ├─ products_context.json      # Estrutura de dados de produtos
│  ├─ users_context.json         # Estrutura de dados de usuários
│  ├─ checkout_context.json      # Regras e validações do checkout
│  ├─ prompts/
│  │   ├─ recommendation_prompt.md
│  │   ├─ faq_prompt.md
│  │   └─ marketing_prompt.md
│  └─ README.md                  # Este documento
│
├─ src/                          # Código da aplicação
├─ public/
└─ README.md                     # Documentação geral do projeto
```

---

## 🧭 Próximos Passos

* Implementar **Supabase** e tabelas de contexto inicial
* Criar **prompts base** para recomendação e atendimento
* Conectar agentes ao frontend (React)
* Testar persistência e atualização de contexto em situações reais de uso

