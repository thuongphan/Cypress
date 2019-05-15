#!groovy

agent any
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