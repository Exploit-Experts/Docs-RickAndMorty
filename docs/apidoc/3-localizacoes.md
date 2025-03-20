---
sidebar_position: 3
---

# Localizações

Este endpoint fornece acesso a informações sobre localizações do universo Rick and Morty. Você pode recuperar uma lista de localizações, filtrá-las com base em diferentes atributos ou buscar detalhes específicos sobre uma única localização.

## Endpoints

- `GET /locations` - Recupera todas as localizações da primeira página.
- `GET /locations?page=2` - Recupera todas as localizações de uma página específica.

### Filtragem de Localizações

`GET /locations`

#### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-------------|
| `name` | opcional | Filtra localizações por nome |
| `type` | opcional | Filtra localizações por tipo |
| `dimension` | opcional | Filtra localizações por dimensão |
| `sort` | opcional | Ordena localizações por nome (`NAME_ASC`, `NAME_DESC`), tipo (`TYPE_ASC`, `TYPE_DESC`) ou dimensão (`DIMENSION_ASC`, `DIMENSION_DESC`) |

### Localização Única

`GET /locations/{id}` - Recupera uma localização específica por ID.