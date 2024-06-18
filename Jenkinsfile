pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/Nipunikumudika/Online-Quiz-Website'
                }
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                script {
                    docker.build('nipunikumudika/quizzania-backend:%BUILD_NUMBER%', './server')
                    docker.build('nipunikumudika/quizzania-backend:%BUILD_NUMBER%', './client')
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