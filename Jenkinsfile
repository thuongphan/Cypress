pipeline {
    def repositoryUrl = "https://github.com/thuongphan/Cypress.git" 
    def branch = "master" 
    
    agent any

    stages {
        stage('Checkout') { 
            git url: repositoryUrl, branch: branch 
        }
    } 
}