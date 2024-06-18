pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/Nipunikumudika/4067-Mallikarachchi'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t nipunikumudika/rubik-cube:%BUILD_NUMBER% .'
            }
        }

        stage('Login to Docker Hub') {
    steps {
        withCredentials([string(credentialsId: 'Nipuni-DockerhubPassword2', variable: 'PW')]) {
            bat "docker login -u nipunikumudika -p ${PW}"
        }
    }
}

        stage('Push Image') {
            steps {
                bat 'docker push nipunikumudika/rubik-cube:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}