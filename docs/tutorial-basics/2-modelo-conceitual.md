---
sidebar_position: 2
---

# Modelo Conceitual

## Introdução

Este modelo conceitual descreve a estrutura de um sistema de gerenciamento de dados para uma plataforma que permite aos usuários interagir com episódios, personagens e locais de uma série. O objetivo é armazenar e gerenciar informações sobre usuários, seus favoritos, episódios, personagens e locais, permitindo análises e recomendações personalizadas.

## Entidades Principais

### 1. Usuário (`user`)

- **Atributos:**
  - `id`: Id do usuário.
  - `name`: Nome do usuário.
  - `surname`: Sobrenome do usuário.
  - `email`: Email do usuário.
  - `user_password`: Senha do usuário.
  - `data_register`: Data de registro do usuário.
  - `data_update`: Data da última atualização do perfil.
  - `detected_at`: Data de detecção de alguma atividade ou mudança.

- **Relacionamentos:**
  - Vários usuário pode ter vários favoritos (`favoritos`), representando uma relação `N:N`.

### 2. Favoritos  Entity(`favoritos`)

- **Atributos:**
  - `i.d`: Identificador único do item favoritado (pode ser um personagem, episódio ou local).

### 3. Episódios (`episodes`)

- **Atributos:**
  - `id`: Id do episódio.
  - `air_date`: Data de lançamento do episódio.
  - `episode_codigo`: Codigo do episódio.
  - `name`: Nome do episódio.

- **Relacionamentos:**
  - Um episódio pode ter vários personagens (`1:N`).

### 4. Personagens (`character`)

- **Atributos:**
  - `id`: Id do personagem.
  - `name`: Nome do personagem.
  - `species`: Espécie do personagem.
  - `status`: Status do personagem (vivo/morto).
  - `character_type`: Tipo do personagem.
  - `gender`: Gênero do personagem.
  - `alocation_id`: Identificador do local associado ao personagem.

- **Relacionamentos:**
  - Um personagem pode aparecer em vários episódios (`1:N`).
  - Um personagem pode estar associado a um local (`1:1`).

### 5. Local (`location`)

- **Atributos:**
  - `name`: Nome do local.
  - `dimension`: Dimensão ou universo ao qual o local pertence.
  - `location_type`: Tipo de local (por exemplo, planeta, cidade, dimensão alternativa).
  - `address`: Endereço ou descrição do local.

- **Relacionamentos:**
  - Um local pode estar associado a um episódio (`1:1`).
  - Um local pode estar associado a um personagem (`1:1`).

## Relacionamentos entre Entidades

- **Usuário e Favoritos (`1:N`):** Um usuário pode ter vários itens favoritados, como personagens, episódios ou locais.
- **Favoritos e Episódios/Personagens/Locais (`1:N`):** Um favorito pode estar relacionado a um episódio, personagem ou local.
- **Episódios e Personagens (`1:N`):** Um episódio pode ter vários personagens.
- **Episódios e Local (`1:1`):** Um episódio pode estar associado a um local específico.
- **Personagens e Local (`1:1`):** Um personagem pode estar associado a um local.
