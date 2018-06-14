node {
    def app
    def dockerfile = './api/Dockerfile-dev'
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
             docker.image('mongo:latest').withRun('-e "MONGO_DB_DEV_PORT=27007" -e "MONGO_DB_DEV_HOST=db-dev" -e "MONGO_DB_DEV_URL=mongodb://db-dev:27007/" -v "./db:/data/db" -p 27007:27017') { c ->
                    sh 'mongod --config /data/db/mongod.conf'
                    app = docker.build("dfsco1prince/jenkins-dockernode","-f ${dockerfile} ./api")
                }
                                                    
                 /*                                   
                                                    {
                timeout(5) {
                    waitUntil {
                        script {
                            def r = sh script: 'mongod --config /data/db/mongod.conf', returnStatus: true
                            return (r == 0);
                        }
                    }
                }             
            }
             app = docker.build("dfsco1prince/jenkins-dockernode","-f ${dockerfile} ./api")*/
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