#!groovy

node('master_node') {
    try {
            stage('Checkout Git repository') {
                checkout scm
            }
            stage('Deploy to dev env') {
                echo 'Deploying to dev env......'
            } 
            stage('Running UI tests') {
                echo 'Running unit tests'
                sh 'cd Cypress'
                sh 'npm install'
                sh  './node_modules/.bin/cypress run --spec cypress/integration/* --browser chrome'
            }  
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    } finally {
        // Success or failure, always send notifications
         //notifyBuild(currentBuild.result)
         slackSend(channel: '#qa_jenkins_noti', color: '#00FF00', message: "blabla")

  }
}

/*def notifyBuild(String buildStatus = 'STARTED') {
  // build status of null means successful
  buildStatus =  buildStatus ?: 'SUCCESSFUL'

  // Default values
  def colorName = 'RED'
  def colorCode = '#FF0000'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"

  // Override default values based on build status
  if (buildStatus == 'STARTED') {
    color = 'YELLOW'
    colorCode = '#FFFF00'
  } else if (buildStatus == 'SUCCESSFUL') {
    color = 'GREEN'
    colorCode = '#00FF00'
  } else {
    color = 'RED'
    colorCode = '#FF0000'
  }

  // Send notifications
  slackSend (channel: '#qa_jenkins_noti', color: '#00FF00', message: "blabla")
}*/
