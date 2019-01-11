# esusers-api

## Features:
- [x] Setup Enviroment.
- [x] ES2015,ES2017.
- [x] MySQL.

## Structure's Project:
```bash
.
|--configs
|--public
|--src
   |--routers
   |--models
   |--repositories
   |--services
   |--utilites
|--index.js
```

## Installation
1. Clone the Repo.
2. Config database
3. Go into the folder and hit the npm install command
4. Run the command: npm start

## How to access API with Postman
1. User Manager
- [getAll()-GET] http://localhost:3000/api/user/list
- [addUser()-POST] http://localhost:3000/api/user/add/[{"name","email","phone"}]
- [updateUser()-PUT] http://localhost:3000/api/user/update/:_userID[{"name","email","phone"}]
- [deleteUser()-DELETE] http://localhost:3000/api/user/delete/:_userID
- [addUser()-POST] http://localhost:3000/api/user/search/:keyword
