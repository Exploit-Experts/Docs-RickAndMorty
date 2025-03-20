---
sidebar_position: 4
---

# Autenticação e Usuários

Este endpoint fornece acesso a funcionalidades de autenticação e gerenciamento de usuários.

## Endpoints

### Registro de Usuário

`POST /api/v1/auth/register` - Registra um novo usuário.

### Login

`POST /api/v1/auth/login` - Autentica o usuário e retorna um token JWT.

### Atualização de Usuário

- `PUT /api/v1/users/{id}` - Atualiza completamente os dados do usuário (requer autenticação).
- `PATCH /api/v1/users/{id}` - Atualiza parcialmente os dados do usuário (requer autenticação).

### Exclusão de Usuário

- `DELETE /api/v1/users/{id}` - Realiza uma exclusão lógica do usuário (requer autenticação).
