# TP Final DevOps B3 Cyber

## Jenkins
Commencer par récupérer la dernière image de jenkins via la commande  
```docker
docker pull jenkins/jenkins:lts
```

Puis lancer le conteneur
```docker
docker run -d -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home --name jenkins jenkins/jenkins:lts
```

L'interface web de Jenkins sera accessible à localhost:8080
Se connecter à l'interface (pour la première connexion, trouver le mot de passe dans /var/jenkins_home/secrets/initialAdminPassword)

Sur la page d'accueil, cliquer sur “Créer un job”
Choisir pipeline d’intégration
Dans l’onglet Général, choisir GithubProject et renseigner l’URL du projet GitHub
Dans l’onglet PipeLine choisir, Pipeline script from SCM
Renseigner l’URL du repo, la branche sur laquelle tester et le noms du fichier jenkinsfile
On peut maintenant sauvegarder.

Il faut maintenant ajouter NPM à Jenkins, soit par les plugins soit par ligne de commande.

Par ligne de commande : 
```
docker exec -u 0 -it <nom_de_votre_conteneur_jenkins> /bin/bash
apt-get install -y nodejs
apt-get install -y npm
```

On crée un fichier Jenkinsfile qui contiendra toutes les actions à effectuer pour lancer les test.
On peut soit définire un moment ou les test seront lancés ou soit cliquer sur "Lancer un build"


## GitHub

Se rendre sur l'onglet action de GitHub, le test s'effectue
On peut consulter le fichier .yml dans .github\workflows
