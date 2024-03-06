
# TP1 Docker

## Question 3
a. J'utilise la commande suivante pour récupérer l'image sur le docker hub
```bash
 docker pull httpd
```

b. Pour vérifier que je dispose bien de l'image en local j'utilise la commande suivante qui liste toutes les images installés localement
```bash
docker image list
```

c. Création d'un dossier html et d'un fichier index.html dedans

d. Je démarre le conteneur avec la commande suivant : -p est utilisé pour spécifier le port et -v la page a servir
```bash 
docker run -p 80:80 -v C:\Users\yanis\Documents\YNOV\B3\DevOps\Docker-TP1\TP_DOCKER_1\html\:/usr/local/apache2/htdocs/ httpd
```

e. Pour supprimer le conteneur il faut d'abord le stopper avec 
```bash
docker stop [CONTAINER_ID]
```
Puis pour le supprimer on utilise 
```bash
docker rm [CONTAINER_ID]
```
Pour connaitre l'id de son docker on utilise  C:\Users\yanis\Documents\YNOV\B3\DevOps\Docker-TP1\TP_DOCKER_1\html\
```bash
docker ps
```

f. Sans utiliser le -v, on utilise la commande cp
```bash
docker cp  C:\Users\yanis\Documents\YNOV\B3\DevOps\Docker-TP1\TP_DOCKER_1\html\index.html [CONTENEUR_ID]:/usr/local/apache2/htdocs
```

## Question 4

a. Utiliser la commande suivante pour build le fichier 
```bash
docker build -t [nom_choisi] .
```
puis
```bash
docker run -d -p 80:80 [nom]
```

b. On dépalace juste le fichier index.html dans le dossier htdocs

c. Le principal intérêt du dockerfile est sa simplicité, tous les éléments sont renseignés dedans, il ne reste qu'à build et a run, le dockerfile simplifie la tache. 

## Question 5 

a. Utiliser les commandes 
```bash
docker pull mysql
docker pull phpmyadmin/phpmyadmin
```

b. Utiliser les commandes suivantes pour lancer mysql et phpmyadmin
```bash
docker run --name db -e MYSQL_ROOT_PASSWORD=admin -d mysql
docker run -p 80:80 --link db:db phpmyadmin/phpmyadmin      
```

## Question 6

a. Docker run est entierement basé en ligne de commande tandis que docker-compose lit les informations depuis un fichier .yaml, docker run ne peut lancer qu'une seule image en meme temps alors que docker compose peut en lancer plusieurs

b. Voir fichier .yaml
Utiliser la commande suivante pour lancer les conteneurs
```bash
docker-compose up-d
```

## Authors

- [@Yanis CHAD](https://github.com/YanisChad)

