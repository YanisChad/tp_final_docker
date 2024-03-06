pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out your source code repository here
                git 'https://github.com/YanisChad/tp_final_docker.git'
            }
        }

        stage('Install dependencies') {
            steps {
                dir('TP_DOCKER_2/src') {
                    // Run npm install
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('TP_DOCKER_2/src') {
                    // Run npm run
                    sh 'npm run build'
                }
            }
        }

        // Add more stages for testing, deployment, etc. as needed
    }

    // Post-build actions can be added here
    // For example: notifications, publishing reports, etc.
}
