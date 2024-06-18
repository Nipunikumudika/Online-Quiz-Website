pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(10) {
                    git branch: 'main', url: 'https://github.com/Nipunikumudika/Online-Quiz-Website'
                }
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                script {
                    def backendImage = "nipunikumudika/quizzania-backend:${BUILD_NUMBER}"
                    docker.build(tag: backendImage, context: './server')
                    def backendImage = "nipunikumudika/quizzania-frontend:${BUILD_NUMBER}"
                    docker.build(tag: backendImage, context: './client')
                }
            }
        }
        stage('Login to Docker Hub') {
    steps {
        withCredentials([string(credentialsId: 'Nipuni-DockerhubPassword2', variable: 'PW')]) {
            bat "docker login -u nipunikumudika -p ${PW}"
        }
    }
}

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }

    }
    post {
        always {
            bat 'docker logout'
        }
    }
}