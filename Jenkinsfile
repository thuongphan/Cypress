#!groovy

node('master_node') {
    try {
            stage('Checkout'){

                checkout scm
            }    
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}