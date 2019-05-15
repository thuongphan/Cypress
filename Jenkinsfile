pipeline {
    def repositoryUrl    = "https://github.dev.cybozu.co.jp/garoon/garoon.git" 
    def branch           = "master" 
    
    agent any

    stages {
        stage('Checkout') { 
            git url: repositoryUrl, branch: branch 
        }
    } 
}