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

On crée un fichier Jenkinsfile qui contiendra toutes les actions à effectuer pour lancer les test. (voir Jenkinsfile)  
On peut soit définire un moment ou les test seront lancés ou soit cliquer sur "Lancer un build"  


## GitHub Actions

Créer un dossier workflows dans un fichier .github  
Dans ce dossier créer un fichier .yml  
Dans ce fichier .yml, renseigner toutes les actions que notre Action Github devra effectuer (voir .github\workflows\test.yml)  
(Ici), lors d'un push ou d'une pull request sur main, les actions seront effectuées  
On peut retrouver les résultats sur l'onglet Actions du repo  


## GitLab
Commencer par récupérer la dernière image de GitLab Ce via la commande  
```docker
docker pull gitlab/gitlab-ce:lts
```
Puis lancer un conteneur avec la commande 
```
docker run --detach ^
  --hostname localhost ^
  --publish 443:443 --publish 80:80 --publish 22:22 ^
  --name gitlab ^
  --restart always ^
  --volume C:\srv\gitlab\config:/etc/gitlab ^
  --volume C:\srv\gitlab\logs:/var/log/gitlab ^
  --volume C:\srv\gitlab\data:/var/opt/gitlab ^
  gitlab/gitlab-ce:latest
```
Acceder a localhost:80  
Une fois sur la page de connexion entrer la commande suivante dans le terminal pour récupérer le mot de passe root
```
Créer un nouveau projet  
Ajouter un fichier .gitlab-ci.yml et ajouter la configuration de la pipeline  
Se rendre dans Parametre > CI/CD / Runnner et créer un runner
Renseingner les options pouis utiliser la commande
```
.\gitlab-runner.exe run
```
La pipeline devrai s'executer correctement