pipeline {
    agent any

    stage('Build started') {
            steps {
                echo 'Build started'
            }
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YanisChad/tp_final_docker.git'
            }
        }

        stage('Install dependencies') {
            steps {
                dir('TP_DOCKER_2/src') {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('TP_DOCKER_2/src') {
                    sh 'npm run build'
                }
            }
        }

        stage('Build finished') {
            steps {
                echo 'Build completed'
            }
        }
    }
}
