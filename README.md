# visitors

Accolite Visitors - Phase I

Accolite visitors is a web application which will be used for managing the visitor details who are visiting across Accolite offices. The receptionist can set the location of the application using a drop down and create a record for each visitor. Basic details like email, mobile, name, In time, ID details will be captured and stored for reporting purposes. For the guest visitor, the purpose of the visit and contact person is also captured. 


Phase - I:

Set Office Location: User can set the office location in a dropdown.

Create a New Visitor:

Create a record for each visitor. 

2 Types of visitors: Guest and Employee. 

Guest user - purpose of visit, contact person, coming from information also will be captured.


Report:

List all the created visitors.

Search based on visited date.

Delete a visitor.

Update the Out Time of a visitor.

Search based on user information.


AWS details:

Instance IP Address: 13.233.40.37

Username: ubuntu

Contact for access:  Srinivasulu Korrapati <srinivasulu.korrapati@accolitelabs.com>
            
Dev Env:

http://visitors-dev.accolitelabs.com

S3 bucket:  accolite-visitors-dev-app 

Prod Env:

http://visitors.accolitelabs.com/

S3 bucket: accolite-visitors-app

GIT Repo URL: https://github.com/accolite/visitors.git


Technologies Used:

Front End: AngularJS

Backend: Java, Mongo-DB


Mongo DB details:           

Collections: 

1.visitor 

id - primary key

   Mandatory fields: firstName, lastName, phoneNumber, emailId, visitorType
   
   Unique fields: emailId, idNumber, employeeId

2.visit_summary 

id - primary key

visitor - foreign key


Jenkins Integration and deploying the war to Tomcat server:

Jenkins Url: http://13.233.40.37:8080/

Username: visitors-app

Password: visitors@123


Steps done:

Checkout the code from Github.

Compile the java code using Maven.

Package it as a war file from the compiled classes using Maven and it will be automatically placed inside Jenkins directory
(i.e., /var/lib/jenkins/workspace/Visitors-Dev/visitors-backend/target/)

Then the war file will be deployed into /var/lib/tomcat8/webapps/ directory.


Below are the jobs created for Dev and Prod Backend deployment:

Visitors-Dev-Backend (visitors-dev branch)

Visitors-Prod-Backend (master branch)


Phase - II:

Pagination in the report page.

Soft delete or hard delete of record (yet to decide).

Send email to contact person when a visitor record is created.

Display visitor profile when clicking on the first name or last name (hyperlink of the name).

Fetch the employee details from an API endpoint using employee Id.

Download the report in PDF or Excel format (Soman has to approve).

