/* 
Author: mjuuso at https://github.com/mjuuso
Code has been modifed to test on my env - Thanks Miiro for sharing
jgarzon: This is a scripted pipeline.
         Scripted Pipeline is serially executed from the top of a 
         Jenkinsfile downwards, like most traditional scripts in Groovy 
         or other languages. 
*/

node {
    def app
    def branch = "${env.BRANCH_NAME}"
    
    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        echo "${env.BRANCH_NAME}"
        if ( branch == 'master') {
            echo 'Checkout from master branch...'
            checkout scm
        } else {
            echo "Checkout from branch..."
        }
        
    }
    
    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("onegarzon/pipeline-docker-20180826")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Test passed..."'
        }
    }
    
    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

   
}
