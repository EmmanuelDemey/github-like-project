---
title: Initialisation Repository GIT
---

Lorsque vous travaillez sur des projets personnels et professionnels, il peut être nécessaire d'utiliser des configurations Git différentes. Par exemple, vous pourriez avoir :

- Une adresse e-mail professionnelle pour les commits liés à votre entreprise.
- Une adresse e-mail personnelle pour vos projets open source ou personnels.
- Des configurations spécifiques à vos projets (comme des templates de messages de commit).

Une mauvaise configuration peut entraîner des problèmes tels que des commits effectués avec la mauvaise identité, ce qui peut poser des soucis pour la traçabilité ou la conformité.


Git permet de surcharger les configurations globales par des configurations locales (au niveau d’un projet ou d’un répertoire).


Vous pouvez également définir des configurations globales pour tous les projets sous un répertoire parent (comme ~/work) en modifiant ou en créant un fichier .gitconfig spécifique :

```
# ~/.gitconfig-work
[user]
    name = Votre Nom Professionnel
    email = votre.email.pro@entreprise.com
```

```
# ~/.gitconfig-perso
[user]
    name = Votre Nom Personnel
    email = votre.email.perso@example.com
```

Puis, associez cette configuration avec un alias Git en utilisant le fichier ~/.gitconfig global :

```
Copy code
[includeIf "gitdir:~/work/"]
    path = ~/.gitconfig-work

[includeIf "gitdir:~/perso/"]
path = ~/.gitconfig-perso
```