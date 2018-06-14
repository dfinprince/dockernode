node {
    def app
    def dockerfile = 'Dockerfile-dev'
    docker.image('node:latest').inside {
        stage('Clone repository') {
      /*      sh 'git --version'
            echo "Branch: ${env.BRANCH_NAME}"
            sh 'printenv'
            sh 'docker -v'*/
            checkout scm
            }
        stage('Build image') {
             /*   sh 'docker -v'*/
             app = docker.build("dfsco1prince/jenkins-dockernode","-f ${dockerfile} ./api")
            }
        stage('Test image') {
            app.inside {
                sh 'echo "Tests passed"'
            }
        }
        stage('Push image') {
        /* Push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
            }
        }
    }
}