# App

GymPass style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possivel se cadastrar;
- [x] Deve ser possivel se autenticar;
- [x] Deve ser possivel obter o perfil de um usuário logado;
- [x] Deve ser possivel obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possivel o usuário obter seu histórico de check-ins;
- [x] Deve ser possivel o usuário buscar academias próximas(10km);
- [x] Deve ser possivel o usuário buscar academias pelo nome;
- [x] Deve ser possivel o usuário realizar check-in em uma academia;
- [x] Deve ser possivel validar o check-in de um usuário;
- [x] Deve ser possivel cadastrar uma academia;

## RNs (Regras de négocios)

- [x] O usuario não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuario não pode fazer 2 check-ins no mesmo dia;
- [x] O usuario não pode fazer check-in se nao estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por admnistradores;

## RNs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistindo em um banco PostgresSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identifado por um JWT (JSON web token)