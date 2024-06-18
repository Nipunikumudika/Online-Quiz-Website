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
                    bat docker.build('nipunikumudika/quizzania-backend:%BUILD_NUMBER%', './server')
                    bat docker.build('nipunikumudika/quizzania-backend:%BUILD_NUMBER%', './client')
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