---
date: "2024-10-28T16:57:40+01:00"
title: "Les arnaques sur Discord"
category:
    - Securité
ShowToc: true
TocOpen: true
ShowWordCount: true
---

Discord est sans aucun doute le service de messagerie instantané le plus
populaire de nos jours pour construire une communauté et avec cette grande
popularité vient de grandes responsabilités... Et des risques !

Ce guide ne contient pas une liste exhaustives d'arnaque, tous les jours de
nouvelles arnaques voient le jour et il est difficile de toutes les documenter.

## L'arnaque au faux signalement

Le faux signalement est une technique qui vise à manipuler la victime avec
l'urgence de la situation en contactant la victime pour lui dire qu'iel a été
signalé au support de Discord par erreur et que le compte de la victime va
avoir des problèmes.

Le mode opératoire suit le schéma suivant en 7 étapes:
1. Prise de contacte avec la victime;
2. L'acteur malveillant indique avoir signalé le compte de la victime par
erreur, mais qu'il est possible de fournir des preuves à Discord en prenant
contacte avec l'admin qui est listé dans la capture d'écran;
3. La victime prend contacte avec le compte du dit admin, qui est en réalité
un pirate;
4. Le pirate, se faisant passer pour un admin de Discord, demande à la victime
de désactiver l'authentification multifacteur si elle est activée et si c'est
possible;
5. Le pirate demande à la victime de changer l'adresse mail associé avec le
compte Discord vers une nouvelle adresse mail qui a été fournit par le pirate,
cette adresse mail sera soit disant utilisé pour faire des vérifications;
6. Si l'authentification multifacteur n'est pas désactivé le pirate va demander
le code confirmation à la victime pour finaliser le vol du compte;
7. Une fois les codes fournits et l'email changé, le mot de passe du compte
sera changé ce qui aura pour conséquence de déconnecter tous les clients dont
celui de la victime.

Ces messages arrivent uniquement par message privé et peuvent être personnalisé:

{{<figure src="/guides/sécurité-discord/Discord_fake_report.png" title="Exemple réel de faux rapport" alt="Exemple réel de faux rapport">}}

### Vérifier si votre compte est en règles

Le pirate a voulu utiliser l'urgence d'une situation qui n'existe pas: faire
pression sur un utilisateur qui ne veut pas perdre son compte. Cependant il
existe une façon très simple de vérifier si son compte est en règle:
* Dans Discord: ouvrez les options;
* Ouvrez le menu de confidentialité & sécurité;
* Cliquez sur l'onglet standing.

{{<figure src="/guides/sécurité-discord/Discord_standing.png" title="Vérification de son standing sur Discord" alt="Le standing est tout bon !">}}

Ce menu est accessible depuis l'interface web et sur le client PC.  
Des liens vers les catégories d'aides et d'informations permettent de 
comprendre l'impacte des mesures prises contre votre compte si vous avez
enfreint les conditions d'utilisations de Discord.  
Les kicks, bans et autre pénalité de serveurs ne son pas prit en compte et
ne pénalisent pas votre compte.

{{<figure src="/guides/sécurité-discord/Discord_dialogue_1.png" title="Mise en situation: Faux signalement" alt="Mise en situation: Faux signalement">}}
{{<figure src="/guides/sécurité-discord/Discord_dialogue_2.png" title="Mise en situation: Discussion avec un faux admin (pirate)" alt="Mise en situation: Discussion avec un faux admin (pirate)">}}

## Les offres gratuites ou avantageuses

Une des arnaque les plus courant vise à proposer quelque chose de gratuit à
une potentielle victime comme par exemple un abonnement Nitro.  
Pour profiter de cette offre il suffit de faire une chose: scanner le QR Code
avec l'application Discord sur mobile.

Le scanneur de QR Code de Discord est utilisé pour se connecter sur PC et sur
le client web. C'est une façon plus pratique pour les gens qui ne veulent pas
rentrer une adresse email et un mot de passe pour se connecter, un peu comme
avec les passkey.  
Malheureusement des acteurs malveillant exploitent ces mécanismes de connexion
rapide pour prendre le contrôle des comptes des victimes.

Un pirate s'attaque aux comptes de tout le monde, que vous soyez célèbre ou
absolument personne, car un compte ancien avec de l'historique est un compte
fiable qui peut être utilisé pour spammer d'autres serveurs et votre liste
d'amis avec des arnaques.

Un exemple de message avec un QR Code:
{{<figure src="/guides/sécurité-discord/Discord_dialogue_3.png" title="Discord Nitro gratuit !" alt="Une arnaque à base de QR Code">}}

Dans cet exemple le QR Code ne permet pas de se connecter à Discord, cependant
il ne faut pas scanner de QR Code, même dans le monde réel et il ne faut pas
hésiter à vérifier que le QR Code utilisé dans des restaurant est légitime.

### Les cartes cadeau Steam

Parfois ces fausses offres cible d'autres types de compte comme des comptes
Steam mais toutes ces attaques ont quelque chose en commun: elles forcent la
victime à se connecter sur un faux site qui ressemble à celui du service
concerné.

Ce système vise à reproduire une page qui ressemble à celle de Steam et à
ouvrir une fenêtre de connexion fictive dans le navigateur web pour faire
croire à l'utilisateur qu'il est en train de se connecter sur Steam.  
Cependant la barre d'adresse est fausse et ce n'est pas une nouvelle fenêtre,
mais juste un sous élément de la fenêtre actuelle.

Si vous rentrer vos identifiants vous perdre l'accès à votre compte et votre
identité sera usurpé, si vous disposez de crédits ils seront liquidé et votre
liste d'amis risque de recevoir des messages de la part du pirate.

## L'authentification multifacteur

Ce n'est pas un secret qu'une des meilleurs protection est l'authentification
multifacteur à l'aide de son téléphone par SMS ou via une application qui va
générer des codes temporaire à usage unique.

En réalité la double authentification à l'aide d'un code reçu par SMS n'est pas
forte du tout et il est possible de se faire voler son numéro de téléphone
via une attaque de [SIM swapping](https://en.wikipedia.org/wiki/SIM_swap_scam),
une attaque où le pirate se fait passer pour vous auprès de votre fournisseur
d'abonnement téléphonique pour qu'on lui envoie une nouvelle carte SIM.

Préférez donc les applications qui générent des codes ou des passkeys.

## Les conséquences du vol de compte

Se faire voler un compte peut avoir de lourde conséquences. La première est
l'usurpation d'identité. La seconde conséquence est la pertes des accès à vos
serveurs et ce surtout si vous êtes propriétaire.  
Pour finir vous risquez de perdre vos contacts.

Les pirates volent des comptes pour les revendre et les utiliser à divers
endroits et sous diverses formes. Certains compte sont utilisés pour pirater
d'autres personnes et les tromper.

## Conclusion

Deux des attaques les plus populaires étaient le faux signalement et le fameux
QR Code qui nous fait perdre plus que ce qu'on pense gagner.
