---
title: Initialisation API Nestjs
---

Nous allons tout d'abord initialiser un projet **Nest.js** qui nous permettra de créer l'API. Une API est pattern permettant de pouvoir 
de faire communiquer une application web dans un navigateur avec une base de donneé. L'API ne s'exécutera pas sur le navigateur du client, mais
plutot sur un serveur. 

Pour cela, vous devez exécuter la commande suivante dans votre terminal. La commande va vous poser quelques questions, veuillez garder les options par défaut. 

```shell
npx @nestjs/cli new api
```

Une fois cette commande exécutée, vous pouvez exécuter les commandes suivantes afin de lancer l'API. 

```shell
cd api
npm run start
```

Nous venons de créer notre "première API". Si vous ouvrez un nouvel onglet dans votre navigateur et que vous allez visiter l'URL `http://localhost:3000`, vous devez voir la réponse "Hello World!" venant du serveur. 

Nous expliquerons en détail le fonctionnement de Nest.js tout au long de ce projet. 