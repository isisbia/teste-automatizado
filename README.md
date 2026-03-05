# 🚀 Projeto de Testes Automatizados - Fatec Matão

![Status do Teste](https://github.com/isisbia/teste-automatizado/actions/workflows/ci.yml/badge.svg)

Este projeto demonstra a implementação de um pipeline de **Integração Contínua (CI)** focado em testes unitários automatizados utilizando Jest e GitHub Actions.

## 🛠️ Tecnologias e Ferramentas

* **Linguagem:** Node.js 🟢
* **Testes:** Jest 🧪
* **Automação:** GitHub Actions 🤖

## ⚙️ Funcionamento do Pipeline

O fluxo de automação é acionado a cada `push` na branch `main`:

1. **Setup:** O robô prepara o ambiente com Node.js v22.
2. **Instalação:** As dependências são baixadas (`npm install`).
3. **Validação:** Os testes de soma e subtração são executados (`npm test`).

## 📊 Monitoramento

Abaixo você pode ver o status em tempo real da última integração. Se o selo estiver verde, o código está saudável!

---
**Desenvolvido por:** Isis | Fatec Matão