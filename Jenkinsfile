#!groovy

node('master_node') {
    try {
            stage('Checkout') {

                checkout scm
            }  
            stage('Running unit tests') {
                echo 'Running unit tests'
                sh 'cd Cypress'
                sh 'npm install'
            }    
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}