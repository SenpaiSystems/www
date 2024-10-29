---
date: "2024-10-28T12:13:34+01:00"
title: "Sécurité 101: Comprendre les dangers sur internet"
category:
    - Securité
ShowToc: true
TocOpen: true
ShowWordCount: true
---

La sécurité est un thème primordial à aborder lorsqu'il s'agit d'utiliser 
internet dans notre vie de tous les jours. Il est donc important d'aborder
certains sujets pour mieux détecter les dangers afin de prévenir plutôt que
guérir.

## On décrypte les phrases qu'on lit trop souvent

> "Je me suis fait hack mon IP"  
> "On m'a piraté mon compte Discord"  
> "Tu as gagné 1000€, ajoutes moi pour empocher ton gain"  
> "Voilà mon jeu.exe, tu peux le tester pour moi ?"
>
> -- Dit par quelqu'un, quelque part...

Ce sont des phrases qu'on a déjà lu quelque part sur les réseaux sociaux, dans
des commentaires, entendu dans des vidéos, etc...

Certaines phrases peuvent être dites par des victimes et d'autres par les
agresseurs, rentrons dans les détails.

### "Je me suis fait hack mon IP"

Sur internet tout le monde dispose d'une adresse IP, elle est parfois partagée
comme l'adresse IPv4 chez vous ou bien elle peut être unique comme l'adresse
IPv6 de tous vos ordinateurs, téléphones, tablettes et autres objets connectés.

Une adresse IP permet aux informations d'être échangé entre un client et un
serveur et parfois entre eux clients dans le cadre du P2P (peer to peer).  
L'adresse IP est toujours utilisé pour ça et est nécessaire, c'est comme
envoyer une lettre par la poste: on doit dire où la lettre doit aller.

Il arrive cependant que certaines personnes mal intentionnées puissent mettre la
main sur l'adresse IP de victimes pour faire pression ou lancer une attack
DoS ou DDos (dénis de service ou dénis de service distribué).  
Il est aussi possible d'obtenir la localisation d'une connexion internet avec
l'adresse IP avec une précision de quelques mètres à plusieurs kilomètres,
voir beaucoup plus loin.

### "Un VPN peut vous rendre invisible et vous protéger"

Même si exposer votre adresse IP peut exposer votre position, c'est une
information nécessaire au fonctionnement d'internet pour pouvoir tout
simplement communiquer sur ce réseau.  
C'est pourquoi certains fournisseurs de VPN ont sauté sur l'occasion pour
vous promettre une protection et un anonymat total sur la toile contre un
abonnement.

Les influenceurs ont tendance à faire la promotion de ces services de VPN à
tort et à travers avec les arguments qu'on leur a fourni. Malheureusement un
VPN n'améliore pas vraiment la sécurité de qui que ce soit sans comprendre
réellement ce que ça fait.

#### Qu'est ce qu'un VPN ?

Un Virtual Private Network, plus communément appelé VPN, est un réseau virtuel
créé entre plusieurs appareils réseau afin de permettre une communication
entre plusieurs appareils comme s'ils étaient sur le même réseau physique.  
La partie virtuelle c'est de permettre à deux machines de se connecter
sur un même réseau à travers internet.

Les VPN sont très utilisé en entreprise pour permettre par exemple aux salariés
d'accéder à des services internes à l'entreprise en dehors des locaux sans
exposer ces services de façon public sur internet.

![Réseau privé virtual sur Wikipedia](/guides/sécurité-101/vpn_schema.png "Réseau privé virtual sur Wikipedia")
Réseau privé virtuel [sur Wikipedia](https://fr.wikipedia.org/wiki/R%C3%A9seau_priv%C3%A9_virtuel).


Dans les jeux vidéo les VPN peuvent être utilisé pour router le traffic réseau
ailleurs et parfois emprunter des routes qui réduisent la latence.

Il est aussi possible d'utiliser un VPN pour accéder à des services qui ne
sont pas accessible dans votre région d'origine comme regarder une
série en streaming sur Netflix aux US quand elle n'est pas disponible au
visionnage en France.  
Il est généralement interdit d'utiliser un VPN pour contourner ce genre de
mesures ou pour avoir accès à des tarifs réduit.

## Méfiance et vigilance

Avant d'aborder les différents sujets de ce guide il est important d'être
méfiant et vigilant sur internet. Les phrases mignonnes comme "je te fais
confiance" doivent avoir moins de valeur qu'une promesse politique.

Même si vous ne risquez pas d'être trompé par vos amis et vos proches, c'est
possible qu'ils tombent dans un panneau et qu'un attaquant vienne s'en prendre
à vous par leur biais d'un de leurs comptes ou numéro de téléphones.  
Un acteur malveillant cherchera à vous berner de toutes les façons possibles
en usant de mensonge et en usurpant l'identité des personnes dont les appareils
sont compromis.

Les attaques peuvent apparaitre sous plusieurs formes:
* Physiques: clef USB, quelqu'un qui utilise votre ordinateur dans votre dos
parce que vous avez oublié de le verrouiller;
* Logiciel: téléchargement de fichiers, failles de sécurité dans votre système
d'exploitation ou dans les logiciels que vous utilisez;
* Vol d'informations: vol d'email, mot de passe, IBAN chez des entreprises
victime d'attaques par des pirates.

## Les attaques physiques

Il arrive de temps en temps de trouver une clef USB par terre ou dans les
transports en commun. Une personne bienveillante envisagera de la ramasser,
peut être en étant sur le chemin du boulot, et va la brancher dans le premier
ordinateur qui passe pour trouver des informations sur le propriétaire.  
Cet acte bienveillant de vouloir réunir le propriétaire et sa clef USB est un
vecteur d'attaque commun pour infecter des machines automatiquement.

Une clef USB pourrait contenir des programmes malveillants, se faire passer pour
un clavier ou un autre type de périphérique et prendrait le contrôle
automatiquement de la machine sur laquelle elle est branché.
Ce genre d'attaque est très rapide, ne nécessite pas forcément de connexion
à internet pour se propager et a été utilisé en [2010 pour attaquer des
centrifugeuses d'enrichissement d'uranium iraniennes](https://fr.wikipedia.org/wiki/Stuxnet).  
Pour un particulier ce genre d'attaque peut tout simplement causer des pertes
de données ou la destruction de votre matériel informatique.

Le second type d'attaque physique est celle de laisse son ordinateur
déverrouiller et d'avoir quelqu'un qui vient en prendre le contrôle physiquement
sans surveillance. Ce genre d'attaque est un peu plus rare car on ne laisse
pas son ordinateur sans surveillance d'habitude et de nombreuses entreprises
incitent leurs employés à les verrouiller dès qu'on quitte son bureau.

Mais ce type d'attaque peut aussi être causé par le petit frère à qui on laisse
l'ordinateur pour jouer à des jeux ou regarder des vidéos. Sans surveillance il
n'est pas impossible que le *petit frère* aille télécharger des fichiers
malveillants sans le savoir. Parfois ce ne sont pas nécessairement des malwares
mais ça peut être de logiciel de triche et ça peut entrainer des bannissement
dans des jeux en ligne.

## Les logiciels malveillants

Les ordinateurs sont fait pour faire tourner des logiciels. Parfois ces
logiciels vont faire des choses que vous ne voulez pas comme:
* Voler vos mots de passes;
* Espionner les frappes au clavier, les micros et les webcams;
* Prendre le contrôle d'applications qui tournent;
* Utiliser votre connexion internet pour des activités illégales;
* Empêcher certaines fonctionnalités de fonctionner correctement;
* Se propager sur votre réseau.

Ces logiciels malveillant s'appellent malware. On peut les appeler virus,
cheval de Troie (Trojan), rootkit, etc...

Un logiciel malveillant peut provenir d'une attaque physique comme depuis une
clef USB, à travers une faille de sécurité dans un logiciel ou juste parce que
vous avez téléchargé un logiciel.

De nos jours les systèmes d'exploitation peuvent mitiger une partie des
attaques mais pour que ça fonctionne il faut que l'utilisateur soit vigilant.  
Lorsque vous vous procurer des logiciels il est important de s'assurer de la
source de ces logiciel, généralement les cracks et autres logiciels associé à
la scène du piratage et du téléchargement illégal sont de cibles idéales pour
propager des malware en aguichant les utilisateurs avec un logiciel ou un jeu
gratuit. Certaines publicités peuvent se faire passer pour des logiciels à
télécharger ou afficher des fausses erreurs dans le but de berner l'utilisateur.

Les logiciels malveillants ne sont pas toujours détecté par les antivirus aussi,
c'est pourquoi il ne faut pas télécharger toutes sortes de fichiers sans
comprendre la provenance et ce que vous télécharger.

Sur Windows par exemple les fichiers exécutable ont généralement une extension
en `.exe` mais ce n'est pas la seul extension à surveiller !  
Les fichiers en `.msi`, `.com` et `.scr` sont des exécutables.  
Les fichiers `.bat` et `.ps1` sont des scripts qui peuvent executer des
actions et d'autres programmes.

Un programme n'est d'ailleurs pas nécessairement associé à une fenêtre, c'est
donc possible de cliquer sur un programme et de le lancer sans avoir de retour
à l'écran. C'est le danger du logiciel car par convention l'utilisateur aura
un retour plus ou moins en direct selon le programme, mais dans le cas de
certains programmes c'est possible de n'avoir ni notification, ni fenêtre.

Si l'un de vos contact sur un logiciel de messagerie tel que Skype ou Discord
vous contacte pour vous envoyer un fichier, même si ça ne semble pas être
un programme vous devez vous méfier. Demander plus de détails et vérifiez bien
que vous parlez à qui vous pensez parler.  
Les promesses de jeux en avant premières, de sponsoring et tout ce qui semble
attrayant est trop beau pour être vrai.

## Les mots de passes

Un vecteur d'attaque dont on parler sans arrêt est celui des mots de passes.  
Nous avons tous réutilisé le même mot de passe sur plusieurs services par le
passé, parfois même avec l'excuse de la flemme ou parce que ce n'était pas
un compte important.

Ces mots de passes qui sont réutilisé sur plusieurs services peuvent permettre
d'une part d'identifier un utilisateur qui utiliserait un mot de passe assez
unique, ce qui pourrait du coup porter atteinte à la vie privée de l'utilisateur
lorsqu'une base de données est volée et est cracké.  
Mais ces mots de passes peuvent aussi être utilisé pour inciter les victimes
à répondre à des arnaques par mail et à des menaces de divulguer des choses
que la victime ne voudrait pas partager avec le monde.

Il est du coup primordial d'avoir un mot de passe unique par service. Ce mot
de passe ne doit pas utiliser de séquence comme un chiffre qui est incrémenté
ou le nom du service. Les mots de passes suivant sont des exemples à ne pas
utiliser:
* `doggo1`;
* `shrek3`;
* `darksasuke666steam`.

Pensez aussi à mélanger les minuscules et les majuscules, à utiliser des
chiffres et des symboles. Un mot de passe doit être long, si un service
impose une longueur maximum n'hésitez pas à vous en approcher le plus possible.

Il est aussi important de ne jamais sauvegarder un mot de passe dans un fichier
qui pourrait être stocké là ou quelqu'un pourrait le voir. Que ce soit un
fichier texte sur votre bureau, un post-it sur l'écran ou une note cachée dans
un tiroir ne pensez pas être à l'abris parce que vous faites confiance.

Il faut aussi ne jamais partager de mot de passe peu importe la raison.  
Aucun service ne vous demandera votre mot de passe, un ami ou un proche ne
doit pas non plus avoir accès à vos mots de passe car votre identité pourrait
être usurpé ou votre mot de passe pourrait être partagé avec quelqu'un d'autres
sans même que vous le sachiez.

Les gestionnaires de mot de passe sont très utiles pour se rappeler de nos
mot de passe pour nous, mais ils peuvent être un maillon faible si on
applique pas des consignes strictes car nos mot de passe les plus solides sont
aussi sûr que le mot de passe le moins solide qui nous sert à accéder à notre
compte email et/ou au gestionnaire de mot de passe.

### L’authentification en deux étapes (2FA)

Pour compléter la sécurité de vos mots de passe il est souvent possible d'activer
l'authentification en deux étapes qui vise à vous faire fournir un code à
usage unique qui change en plus de votre mot de passe.

Dans le cas où un site offre ce service il est possible d'obtenir des codes
par email, SMS ou sur une application votre smartphone. Ces systèmes
sont utilisés par les banques pour les paiements en ligne aussi.

### Les passkeys

Les passkeys sont des clefs qui permettent de valider une authentification
sans utiliser de mot de passe à l'aide d'une empreinte digital ou d'une
autre information biométrique via un smartphone.

L'avantage des passkeys c'est que vous n'avez pas besoin de rentrer le moindre
mot de passe dès le moment où votre smartphone peut se connecter à votre
ordinateur au moment où vous avez besoin de vous connecter.

De nombreux services s'en servent déjà et incitent les utilisateurs à s'en
servir pour rendre l'authentification plus pratique.

Le désavantage des passkeys est que votre smartphone est compromis c'est
possible qu'on puisse usurper votre identité et se connecter à votre place
en validant l'authentification biométrique. Par exemple si vous avez
enregistré l'empreinte digital d'un de vos proches sur votre smartphone.

## Phishing

L'hameçonage en français, c'est la technique qui vise à tromper une victime
pour lui sous tirer des informations personnelles et confidentiels.

Que ce soit des numéros de cartes, des mots de passe, des emails ou quoi que
ce soit est une information précieuse qu'un acteur malveillant veut obtenir.  
Le phishing cible généralement les personnes qui pourraient donner des
informations sans trop de difficultés via l'usurpation d'identité et l'abus
de confiance.

Parfois il est aussi possible que ce genre d'attaque se transforme en quelque
chose de pire pour qu'un acteur malveillant puisse accéder à des comptes
bancaire afin de les vider.

## Conclusion

Il est difficile de couvrir toutes les formes d'attaques, d'arnaques et leurs
mitigations. Le but de cette page était d'informer avant tout et d'essayer
d'expliquer certaines choses. Malheureusement cette page est dense en
informations car il y a beaucoup trop de choses à couvrir.
