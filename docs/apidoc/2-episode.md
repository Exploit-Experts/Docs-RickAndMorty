---
sidebar_position: 2
---

# Episódios

Este endpoint fornece acesso a informações sobre episódios da série Rick and Morty. Você pode recuperar uma lista de episódios, filtrá-los com base em diferentes atributos ou buscar detalhes específicos sobre um único episódio.

## Endpoints

- `GET /episodes` - Recupera todos os episódios da primeira página.
- `GET /episodes?page=2` - Recupera todos os episódios de uma página específica.

### Filtragem de Episódios

`GET /episodes`

#### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-------------|
| `name` | opcional | Filtra episódios por nome |
| `episode` | opcional | Filtra episódios por código (formato esperado: SXXEXX) |
| `sort` | opcional | Ordena episódios por nome (`NAME_ASC`, `NAME_DESC`) ou código de episódio (`EPISODE_CODE`, `EPISODE_CODE_DESC`) |

### Episódio Único

`GET /episodes/{id}` - Recupera um episódio específico por ID.