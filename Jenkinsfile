node {
    docker.image('node:9.11.1-alpine').inside {
        stage('test') {
            sh 'git --version'
            echo "Branch: ${env.BRANCH_NAME}"
            sh 'printenv'
            }
    }
}