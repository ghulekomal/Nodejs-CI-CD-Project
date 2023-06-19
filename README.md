
Automated Deployment of Nodejs Web-App 

![New Whiteboard](https://github.com/ghulekomal/node-todo-cicd/assets/54700625/8b38e545-4eaa-4e20-be6c-eebbd3334157)


Project Summary:

The project aims to automate the deployment of a Node.js web application by leveraging various tools such as Jenkins, SonarQube, and Docker. By integrating these tools, the project establishes a continuous integration and continuous deployment (CI/CD) pipeline. This pipeline is triggered automatically whenever a developer commits changes to the GitHub repository.

By automating the deployment process, the project greatly reduces manual effort and minimizes the chances of human error. It enables faster and more efficient releases of the web application, ensuring that the latest changes are quickly deployed to production. This automated CI/CD pipeline enhances the development workflow, increases overall productivity, and improves the reliability of the Node.js web application.




## 🛠 Tools
*Jenkins

It is responsible for executing the CI/CD pipeline and coordinating the various stages of deployment. When a commit is made, Jenkins initiates the appropriate job to run the pipeline, ensuring that the latest changes are incorporated into the application.

*SonarQube

SonarQube, a code quality and security analysis platform, is integrated into the pipeline. It scans the codebase and provides valuable insights regarding code quality, potential bugs, and security vulnerabilities.

*Docker

The deployment process utilizes Docker, a containerization platform. 


## Run Locally

Clone the project

```bash
  git clone https://github.com/ghulekomal/Nodejs-CI-CD-Project.git
```

Go to the project directory

```bash
  cd Nodejs-CI-CD-Project
```

Install dependencies
```bash
  npm install
```
Start the server
```bash
  npm run start
```
Run project
```bash
  node app.js
```


## Access Web-app
![image](https://github.com/ghulekomal/node-todo-cicd/assets/54700625/0d3d880a-978e-4b6f-becb-eda5c17a79d2)


