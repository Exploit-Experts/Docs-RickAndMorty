---
sidebar_position: 1
---

# Modelo Lógico

Este documento descreve o modelo lógico do projeto, incluindo as entidades, atributos e relacionamentos entre elas.

## Entidades e Atributos

### 1. User
- **Descrição**: Representa os usuários do sistema.
- **Atributos**:
  - `id (PK)`: Identificador único do usuário (tipo bigint).
  - `active`: Indica se o usuário está ativo (tipo boolean).
  - `name`: Nome do usuário (tipo varchar(30)).
  - `surname`: Sobrenome do usuário (tipo varchar(30)).
  - `email`: E-mail do usuário (tipo varchar(50)).
  - `password`: Senha do usuário (tipo varchar(255)).
  - `data_register`: Data de registro do usuário (tipo DateTime).
  - `data_update`: Data da última atualização do usuário (tipo DateTime).
  - `deleted_at`: Data de exclusão do usuário (tipo DateTime).

### 2. Episodes
- **Descrição**: Representa os episódios disponíveis no sistema.
- **Atributos**:
  - `id (PK)`: Identificador único do episódio (tipo bigint).
  - `name`: Nome do episódio (tipo varchar(100)).
  - `air_date`: Data de exibição do episódio (tipo Date).
  - `episode_code`: Código do episódio (tipo varchar(30)).

### 3. Characters
- **Descrição**: Representa os personagens do sistema.
- **Atributos**:
  - `id (PK)`: Identificador único do personagem (tipo bigint).
  - `name`: Nome do personagem (tipo varchar(100)).
  - `species`: Espécie do personagem (tipo varchar(50)).
  - `status`: Status do personagem (tipo enum('ALIVE', 'DEAD', 'UNKNOWN')).
  - `character_type`: Tipo do personagem (tipo varchar(50)).
  - `gender`: Gênero do personagem (tipo enum('FEMALE', 'MALE', 'GENDERLESS', 'UNKNOWN')).
  - `location_id (FK)`: Chave estrangeira para a localização do personagem (tipo bigint).

### 4. Locations
- **Descrição**: Representa as localizações dos personagens.
- **Atributos**:
  - `id (PK)`: Identificador único da localização (tipo bigint).
  - `name`: Nome da localização (tipo varchar(100)).
  - `dimension`: Dimensão da localização (tipo varchar(50)).
  - `location_type`: Tipo da localização (tipo varchar(20)).

### 5. Favorites_Episodes
- **Descrição**: Relaciona usuários com episódios favoritos.
- **Atributos**:
  - `id (PK)`: Identificador único do favorito (tipo bigint).
  - `episode_id`: Chave estrangeira para o episódio favorito (tipo bigint).
  - `user_id`: Chave estrangeira para o usuário (tipo bigint).

### 6. Favorites_Characters
- **Descrição**: Relaciona usuários com personagens favoritos.
- **Atributos**:
  - `id (PK)`: Identificador único do favorito (tipo bigint).
  - `character_id`: Chave estrangeira para o personagem favorito (tipo bigint).
  - `user_id`: Chave estrangeira para o usuário (tipo bigint).

### 7. Favorites_Locations
- **Descrição**: Relaciona usuários com localizações favoritas.
- **Atributos**:
  - `id (PK)`: Identificador único do favorito (tipo bigint).
  - `location_id`: Chave estrangeira para a localização favorita (tipo bigint).
  - `user_id`: Chave estrangeira para o usuário (tipo bigint).

## Relacionamentos

- **User → Favorites_Episodes**: Um usuário pode ter vários episódios favoritos (relacionamento 1,n).
- **User → Favorites_Characters**: Um usuário pode ter vários personagens favoritos (relacionamento 1,n).
- **User → Favorites_Locations**: Um usuário pode ter várias localizações favoritas (relacionamento 1,n).
- **Characters → Locations**: Um personagem está associado a uma localização (relacionamento 1,1).
- **Episodes → Favorites_Episodes**: Um episódio pode ser favoritado por vários usuários (relacionamento 1,n).
- **Characters → Favorites_Characters**: Um personagem pode ser favoritado por vários usuários (relacionamento 1,n).
- **Locations → Favorites_Locations**: Uma localização pode ser favoritada por vários usuários (relacionamento 1,n).
