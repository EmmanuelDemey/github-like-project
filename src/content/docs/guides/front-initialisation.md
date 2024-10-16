---
title: Initialisation Nuxt.js
---

Nous allons à présent initialiser l'application Web. Pour cela, nous allons utiliser un framework Nuxtjs, permettant de développer des applications web pour lesquelles les pages seront générées coté serveur.

Pour cela, vous devez exécuter la commande suivante dans votre terminal. La commande va vous poser quelques questions, veuillez garder les options par défaut.

```shell
npx nuxi@latest init front
```

Une fois cette commande exécutée, vous pouvez exécuter les commandes suivantes afin de lancer l'API.

```shell
cd front
npm run dev
```

Nous venons de créer notre "première application". Si vous ouvrez un nouvel onglet dans votre navigateur et que vous allez visiter l'URL `http://localhost:3000`, vous devez voir la page par défaut généréé pour une application Nuxtjs.

**Nuxt** activera automatiquement son module DevTools permettant de nous aider pendant la phase de développement. Depuis votre page, un bouton apparaitra sur la partie basse de votre écran pour activer les DevTools.

Nous expliquerons en détail le fonctionnement de Nuxtjs tout au long de ce projet.

:::tip[Pour aller plus loin]
[Documentation Nuxtjs](https://nuxt.com/)
[Nuxt DevTools](https://devtools.nuxt.com/development/contributing)
:::
