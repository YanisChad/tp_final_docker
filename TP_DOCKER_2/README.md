
# TP2 Docker

## Question 1
Code ajouté sur le repo

## Question 2
Voir Dockerfile

## Question 3
Pour lancer une image de base de donnée utiliser la commande 
```bash
docker run --name db -e MYSQL_ROOT_PASSWORD=admin -d mysql
```

## Question 4 
Il suffit de décommenter la partie qui permet d'utiliser mysql et de commenter celle qui utilise sqlite dans index.js et de renseigner les bon logs dans db.config.js.
Puis utiliser la commande ```docker compose build```
Ensuite lancer les conteneurs avec ```docker compose up -d```

## Question 5
Voir docker-compose.yml et question 4

## Question 6
Je crois que c'est bon mais pas sur, en fait c'est bon

## Question 7
Créer un fichier .env et renseigner les valeurs dedans tels que le mot de passe et le nom d'utilisateur de la DB
Modifier le fichier docker-compose (voir docker-compose)

## Question 8
Pour isoler les deux conteneurs et les mettre dans un même réseau a part, il faut créer un network et les mettre les deux dans réseau crée. (voir docker-compose)

## Question :
# Q1 
Si un des ports publié est déja utilisé, il sera impossible de déployer le conteneur, on aura une erreur
# Q2
L'option ```--production``` permet de n'installer que les dépendances de production ou ```--omit=dev```
# Q2 bis
Installer seulement lels dépendances de production permet d'installer seulement les dépendances nécéssaire en production ainsi de limiter les risques avec des dépendances avec de possibles failles de sécurité et de réduire le stockage et la ram utilisée
# Q3
Il existe plusieurs outils d'analyse de sécurité d'applications
Aussi lors de l'application des dépendances, il est listé les vulnérabilités des dépendances, on peut aussi utiliser la commande ```npm audit``
# Q4
Le conteneur n'arrive pas a communiquer avec la base de donnée si je laisse localhost comme hostname car pour lui "localhost" est lui même, je dois donc renseigner le nom d'hote de ma base de donnée (ici mysql) pour qu'ils puissent communiquer