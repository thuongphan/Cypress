#!groovy

node('master_node') {
    try {
            stage('Checkout') {
                checkout scm
            }  
            stage('Running unit tests') {
                echo 'Running unit tests'
            }
            stage('Running UI tests') {
                steps {
                    echo 'Running unit tests'
                    sh 'cd Cypress'
                    sh 'npm install'
                    sh  './node_modules/.bin/cypress run --spec cypress/integration/* --browser chrome'
                }
            }  
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}