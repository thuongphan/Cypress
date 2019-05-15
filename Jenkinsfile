#!groovy

node('master_node') {
    try {
        stages {
            stage('Checkout'){

                checkout scm
            }    
        }
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}