node {
    docker.image('node:latest').inside {
        stage('test') {
            sh 'git --version'
            echo "Branch: ${env.BRANCH_NAME}"
            sh 'printenv'
            sh 'docker -v'
        }
        stage('Build and run auditboard test') {
                sh 'docker-compose up'
            }
    }
}