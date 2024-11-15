---
title: Initialisation de la base de données
---

Pour cette nouvelle étape, nous allons initier la base de donnée. Pour le moment, la base de donnée sera un simple fichier (utilisant la tecnologie SQLite), mais cela pourra etre modifié dans le futur.

Nous allons tout d'abord installer la dépendance `prisma` et réaliser l'initialisation.

```shell
cd api
npm install prisma
npx prisma init
```

Cette dernière commande a créé un fichier `schema.prisma`dans lequel nous allons configurer notre ccès à la base de données et également indiquer le schéma de notre donnée. Nous allons, comme indiqué, utiliser la technologie SQLite. Et pour faire simple, nous allons simplement créer une table **User**. Un utilisateur pourra avoir un identifiant (propriété **id**) et un email.

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
}
```

Nous allons à présent générer la premiere version de notre base de données, grace à la méthode **migrate**. Cette méthode devra etre exécutée à chaque fois que le schéma change.

```shell
npx prisma migrate dev --name init
```

Une fois cette étape réalisée, nous pouvons installer et générer le client TypeScript nous permettant de manipuler notre base de données.

```shell
npm i @prisma/client
npx prisma generate
```

Nous sommes à présent capable d'intéragir avec notre base de données. Pour faire très simple, sur le endpoint que nous avons créé dans une partie précédente, nous allons programmatiquement ajouter un utilisateur dans notre table **User** et retourner ensuite tous les utilisateurs enregistrés (que les emails). Veuillez modifier le fichier `app.controller.ts` pour qu'il ressemble au code ci-dessous.

```typescript
import { Controller, Get } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Controller()
export class AppController {
  constructor() {}

  @Get()
  async getHello() {
    const prisma = new PrismaClient();
    await prisma.user.create({
      data: {
        email: "email@email.org",
      },
    });
    return prisma.user.findMany({
      select: {
        email: true,
        id: false,
      },
    });
  }
}
```

A présent, en navigant sur http://localhost:3000, vous devriez voir votre utilisateur. N'exécutez pas une deuxième fois la requete, car comme nous avons ajouter une contrainte **unique** à notre schéma Prisma, nous ne sommes dans la capacité d'enregistrer deux utilisateurs avec le même email.

Nous verrons dans une prochaine partie comment mieux structure notre code et comment implémenter une API CRUD complète.

Vous pouvez également supprimer le fichier `app.service.ts` qui n'est plus utile pour le moment.

Si vous souhaitez visualiser le contenu de la table, nous vous conseillons d'utiliser l'application [Table Plus](https://tableplus.com/). Cette application, vous permet de se connecter à différents types de données (comme SQLLite).

:::tip[Pour aller plus loin]
[Documentation Prisma](https://www.prisma.io/docs/)
[Table Plus](https://tableplus.com/)
:::
