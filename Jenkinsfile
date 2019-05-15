#!groovy

node('Jenkins_pipeline') {

    def repositoryUrl = "https://github.com/thuongphan/Cypress.git" 
    def branch = "master" 
    
    agent any
    try {
        stages {
            stage('Checkout') { 
                git url: repositoryUrl, branch: branch 
            }
        }
    } catch (err) {

        currentBuild.result = "FAILURE"
        throw err
    }
}