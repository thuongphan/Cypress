#!groovy

node('master_node') {
    try {
            stage('Checkout') {

                checkout scm
            }  
            stage('Running unit tests') {
                echo 'Running unit tests'
            }    
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}