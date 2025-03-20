---
sidebar_position: 5
---

# Favoritos

Este endpoint fornece acesso ao gerenciamento de favoritos dos usuários. Todos os endpoints requerem autenticação com token Bearer.

## Endpoints

### Adicionar Favorito

`POST /api/v1/favorites` - Registra um favorito e associa ao usuário.

#### Corpo da Requisição

```json
{
  "apiId": 1,
  "itemType": "CHARACTER|EPISODE|LOCATION",
  "userId": 1
}
```

### Listar Favoritos

`GET /api/v1/favorites/{userId}` - Recupera todos os favoritos de um usuário específico.

#### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-------------|
| `page` | opcional | Número da página a ser recuperada (padrão: 0) |
| `sort` | opcional | Ordena por ID em ordem ascendente ou descendente (padrão: "ASC") |

### Remover Favorito

- `DELETE /api/v1/favorites/{userId}/{favoriteId}` - Remove um favorito específico de um usuário.
- `DELETE /api/v1/favorites/{userId}` - Remove todos os favoritos de um usuário.
