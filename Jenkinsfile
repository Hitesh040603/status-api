pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building Docker Image'
                    sh 'docker build -t status-api .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Running tests (Optional if you have tests)'
                    // Add any testing steps here if you implement tests
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying Docker Container'
                    sh 'docker stop status-api || true'
                    sh 'docker rm status-api || true'
                    sh 'docker run -d -p 3000:3000 --name status-api status-api'
                }
            }
        }
    }
}
