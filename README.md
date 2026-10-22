# Iftness_Web3

Aplicação web em desenvolvimento para registro de atividades físicas.  
O projeto é dividido em duas partes: um **backend** em Java com Spring Boot e um **frontend** em Angular.  
No momento, a aplicação funciona apenas em ambiente local.

## Tecnologias

- **Backend:** Java + Spring Boot
- **Frontend:** Angular

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Java JDK](https://www.oracle.com/java/technologies/downloads/) (versão 11 ou superior)
- [Node.js e npm](https://nodejs.org/) (para o frontend)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

## Como executar

### 1. Backend (Spring Boot)

```bash
# Clone o repositório
git clone https://github.com/Cordeiroovelha/Iftness_Web3.git

# Acesse a pasta do backend
cd Iftness_Web3/ifitness

# Execute a aplicação Spring Boot
./mvnw spring-boot:run
```
## 2ª opção (SpringTools)
```bash
# Clone o repositório
git clone https://github.com/Cordeiroovelha/Iftness_Web3.git

# clone no spring tools como projeto mavin existente
C:\diretorio-da-instalação

# Execute a aplicação pelo próprio Spring Tools
```

O backend será iniciado em `http://localhost:8080` (porta padrão do Spring Boot).

### 2. Frontend (Angular)

Em outro terminal:

```bash
# Acesse a pasta do frontend
cd Iftness_Web3/ifitness-ui

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

O frontend será iniciado em `http://localhost:4200` (porta padrão do Angular).

## Acesso

Após iniciar os dois servidores, abra o navegador e acesse:

```text
http://localhost:4200
```
