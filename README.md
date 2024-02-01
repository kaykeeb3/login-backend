# Login - Backend

Este é o backend do projeto de uma tela de login, uma aplicação de exemplo para gerenciar autenticação de usuários. Este projeto é construído com Node.js, Express.js, Jest, Prisma, PostgreSQL e utiliza JWT para autenticação.

## Como Iniciar

Antes de começar, certifique-se de ter o Docker e o Docker Compose instalados em seu sistema.

1.  **Clone o Repositório:**

    ```bash
    git clone https://github.com/Kayke-Ti/login-backend.git

    cd login-backend

    npm install
    ```

2.  **Crie um arquivo .env: Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:**

    ```bash
      DATABASE_URL=postgresql://user:password@localhost:5432/login_db
    JWT_SECRET=sua_chave_secreta_para_jwt

    ```

3.  **Inicie o Docker Compose:**

    ```bash
      docker-compose up -d
    ```

4.  **Instale as Dependências e Execute as Migrações:**

    ```bash
      npm install
      npx prisma migrate dev
    ```

5.  **Inicie o Servidor:**

    ```bash
    npm start
    ```

6.  **Padrão de PASTAS & ARQUIVOS:**
    ```
    |-- src
    | |-- controllers
    | | |-- authController.js
    | | |-- userController.js
    | |-- middlewares
    | | |-- authenticationMiddleware.js
    | |-- routes
    | | |-- authRoutes.js
    | | |-- userRoutes.js
    | |-- services
    | | |-- authService.js
    | | |-- userService.js
    | |-- utils
    | | |-- jwtUtils.js
    | |-- app.js
    | |-- db.js
    |-- .env
    |-- .gitignore
    |-- package.json
    |-- prisma
    | |-- schema.prisma
    |-- tests
    | |-- authService.test.js
    | |-- authController.test.js
    | |-- userController.test.js
    |-- docker-compose.yml
    |-- README.md
    ```
