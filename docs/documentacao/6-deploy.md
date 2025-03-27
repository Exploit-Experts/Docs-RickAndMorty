---
sidebar_position: 6
---

# Deploy

## Introdução

Descrição passo a passo para realizar o deploy da API REST de Rick and Morty database, desenvolvida em Java com Spring Boot, utilizando o Railway como plataforma de hospedagem. O Railway foi escolhido devido à facilidade de configuração, escalabilidade, suporte a PostgreSQL e baixo custo.

## Pré-requisitos

- Conta Railway ativa ([https://railway.app/](https://railway.app/))
- Criar um projeto no Railway
- Banco de dados PostgreSQL configurado no Railway
- Git instalado e configurado localmente
- JDK 21 instalado
- Maven instalado localmente
- Railway CLI instalado ([https://docs.railway.app/cli](https://docs.railway.app/cli))

## Estrutura do Projeto

```plaintext
RickAndMorty-Spring-API
├── .idea
│   └── dataSources
├── .mvn
│   └── wrapper
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── rickmorthy
│   │   │           ├── config
│   │   │           ├── controllers
│   │   │           ├── dto
│   │   │           ├── enums
│   │   │           ├── exceptions
│   │   │           ├── handlers
│   │   │           ├── infra
│   │   │           │   └── security
│   │   │           ├── interfaces
│   │   │           ├── models
│   │   │           ├── repository
│   │   │           ├── services
│   │   │           ├── utils
│   │   │           └── RickMorthyApplication.java
│   │   ├── resources
│   │   │   ├── application.properties
│   │   │   └── messages.properties
│   └── test
├── target
├── pom.xml
└── dockerfile
```

## Configuração do Dockerfile para o Projeto

```dockerfile
FROM maven:3.9.6-eclipse-temurin-21 AS build  # Usa a imagem oficial do Maven 3.9.6 com JDK 21 para compilar o código.
WORKDIR /app  # Define o diretório de trabalho dentro do container como /app.
COPY pom.xml /app  # Copia o arquivo pom.xml para dentro do container para baixar dependências antes do código-fonte.
COPY src ./src  # Copia a pasta src (código-fonte) para o container.
RUN mvn clean package -DskipTests  # Compila o código e gera um JAR, ignorando os testes para agilizar o build.

FROM eclipse-temurin:21-jre-alpine  # Usa uma imagem menor e otimizada, contendo apenas o JRE 21 para executar a aplicação.
WORKDIR /app  # Define o diretório de trabalho novamente.
COPY --from=build /app/target/rickMorty-1.2.3-SNAPSHOT.jar app.jar  # Copia o JAR gerado na fase de build para a nova imagem.
EXPOSE 8080  # Declara que a aplicação utilizará a porta 8080.
CMD ["java", "-jar", "app.jar"]  # Define o comando que será executado quando o container iniciar.
```

## Configuração do Railway

1. Crie um novo projeto no Railway ([https://railway.app/new](https://railway.app/new)).
2. Clique em **New Service**.
3. Conecte ao GitHub e selecione o repositório.
4. O Railway detectará o `Dockerfile` e tentará construir o serviço. Um erro temporário pode ocorrer, mas isso é normal.
5. Configure o PostgreSQL no Railway:

- Clique em **+ Create** para adicionar um novo serviço e escolha **Database > PostgreSQL**.
- Vá em **Settings** e, na opção **Source Image**, selecione `ghcr.io/railwayapp-templates/postgres-ssl:15`.
- Copie o valor de **Public Networking** (essa será a URL do banco de dados).

6. Clique em **Deploy** para finalizar a configuração.

## Configurando Variáveis de Ambiente

Adicione as seguintes variáveis no Railway:

1. Acesse o serviço da API no Railway.
2. Vá até a seção **Variáveis** e adicione as seguintes chaves e valores:

```plaintext
DATABASE_URL=host:porta/db  # Copie o valor de "Public Networking" no serviço PostgreSQL.
DATABASE_USER=seu_usuario  # Defina o usuário nas variáveis do serviço PostgreSQL.
DATABASE_PASSWORD=sua_senha  # Defina a senha nas variáveis do serviço PostgreSQL.
JWT_SECRET=chave-secreta  # Escolha uma chave secreta para o JWT.
```

## Troubleshooting Comum e Soluções

### Erro: "Application failed to start"

- Certifique-se de que todas as variáveis de ambiente estão configuradas corretamente no Railway.

### Erro 502: Bad Gateway

- Verifique os logs no **Railway Dashboard** para identificar possíveis problemas.

### Erro 500: Internal Server Error

- Consulte os logs no **Railway Dashboard** para obter mais detalhes sobre o erro.
- Verifique se o banco de dados está acessível e se as credenciais estão corretas.
- Confirme se todas as dependências foram instaladas corretamente durante o build.
- Certifique-se de que o arquivo `application.properties` está configurado corretamente.
- Teste a aplicação localmente para identificar possíveis problemas antes do deploy.
