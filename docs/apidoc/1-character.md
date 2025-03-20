---
sidebar_position: 1
---

# Personagens

Este endpoint fornece acesso a informações detalhadas sobre personagens do universo Rick and Morty. Você pode recuperar uma lista de personagens, filtrá-los com base em vários atributos ou buscar detalhes específicos sobre um único personagem, incluindo sua imagem de avatar.

## Endpoints

- `GET /api/v1/characters` - Recupera todos os personagens da primeira página.
- `GET /api/v1/characters?page=1` - Recupera todos os personagens de uma página específica.

### Filtragem de Personagens

`GET /api/v1/characters`

#### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-------------|
| `sort` | opcional | Ordena por um atributo específico (`NAME_ASC`, `NAME_DESC`, `STATUS_ASC`, `STATUS_DESC`) |
| `name` | opcional | Filtra personagens por nome |
| `status` | opcional | Filtra personagens por status (`ALIVE`, `DEAD`, `UNKNOWN`) |
| `species` | opcional | Filtra personagens por espécie |
| `type` | opcional | Filtra personagens por tipo |
| `gender` | opcional | Filtra personagens por gênero (`FEMALE`, `MALE`, `GENDERLESS`, `UNKNOWN`) |

### Personagem Único

`GET /api/v1/characters/{id}` - Recupera um personagem específico por ID.

### Avatar do Personagem

`GET /api/v1/characters/avatar/{id}.jpeg` - Recupera o avatar de um personagem específico por ID.


