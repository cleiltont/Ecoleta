# Ecoleta

![](website.gif)

## About
As we are in the semantics of the environment, nothing better than making an application focused on it.
Ecoleta is an application for garbage collection. You can find the nearest point to your home to take your trash there. You can register your recycling company.

## Technologies
-	Backend: NodeJs
-	Web: React
-	Mobile: React Native

## starting
Siga todas as etapas para executar com sucesso

### 1 Clone o repósitorio na sua maquina usando:
	https://github.com/cleiltont/Ecoleta.git

### 2. Verifique seu IPv4
	- Windows: digite 'ipconfig' no terminal.
	- Linux: digite 'hostname -I'.
	- MacOS: Entre em "Abrir as Preferencias Rede...".

### 3. Modifique os endereço IPv4 dos sequintes arquivos, coloque o seu. O que acabou de verfificar na etapa anterios.
	- ecoleta/server/src/controllers/ItemsController.ts
	- ecoleta/server/src/controllers/PointController.ts
	- ecoleta/web/src/services/api.ts


### 4. Run backend
Abra o cmd na pasta **server** e execute os seguintes comandos pela ordem.
>Instalando dependencias: $ npm install

>Iniciar migrate: $ npm run knex:migrate

>Setar bando de dados: $ npm run knex:seed

>Rodar o server: $ npm run dev


### 5. Run web
Abra o cmd na pasta **web** e execute os seguintes comandos pela ordem.
>Instalando dependências> $ npm install

>Rodar aplicação: $ npm start


### 6. Run mobile
Abra o cmd na pasta **mobile** e execute os seguintes comandos pela ordem.
>Instalando dependências> $ npm install

Observe, você pode executar com __start__ ou __expo__.

>Rodanpm start ou expo start


---


| Este projeto esta sob [licença MIT ](https://github.com/ENSE).

|				Criado com :heart: by [Cleilton Timoteo](https://github.com/name)