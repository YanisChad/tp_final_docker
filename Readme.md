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
Se connecter à l'interface
Un job est déjà crée, on peut le lancer grâce à l'icone sur la droite
