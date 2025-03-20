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
  - Vários personagens podem aparecer em vários episódios (`N:N`).
  - Vários personagens podem estar associados a um local (`N:1`).

### 5. Local (`location`)

- **Atributos:**
  - `id`: Id do local.
  - `name`: Nome do local.
  - `dimension`: Dimensão ou universo ao qual o local pertence.
  - `location_type`: Tipo de local (por exemplo, planeta, cidade, dimensão alternativa).

- **Relacionamentos:**
  - Um local pode estar associado a vários personagens (`1:N`).

## Relacionamentos entre Entidades

- **Usuário e Favoritos (`N:N`):** Vários usuários podem ter vários itens favoritados, como personagens, episódios ou locais.
- **Favoritos e Episódios/Personagens/Locais (`1:1`):** Um favorito pode ser um episódio, personagem ou local.
- **Episódios e Personagens (`N:N`):** Vários episódios podem ter vários personagens.
- **Personagens e Local (`N:1`):** Vários personagens podem estar associado a um local.

<details>
<summary>Modelo Conceitual</summary>
![Modelo Conceitual](/img/modeloConceitual.jpeg)
</details>