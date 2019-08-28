***Accolite Visitors:***

Visitors Application is created to store the visitor details who comes to the Accolite office for various purposes like interview, client meetings, project discussions, joining, courier delivery etc. The system will store the visitors details such as name, email id, phone number, location, purpose, contact person details, in time, out time, govt. ID number in the database. Also, visitor’s photo has been captured through webcam and stored. Once the visitor record is created, it will automatically trigger the mail to the contact person for approval and to the visitor regarding the status of his/her visit. Approver can either Approve or Decline the request. Once the approver approves the request, then the visitor will be allowed to enter Accolite premises. There is an option to approve on behalf which can be done by either Receptionist or Admin.

Accolite employees can also pre-schedule the visit entry for any visitors through this portal. All the status changes of all visitors will be notified to the system in notification panel via websockets. All api requests are authenticated using OAuth 2.0 mechanism. OAuth 2.0 allows a user to grant limited access to their resources without having to expose their credentials.

Swagger UI allows to visualize and interact with the API’s resources without having any of the implementation logic in place. It’s automatically generated based on Swagger Specification, with the visual documentation making it easy for back end implementation and client side consumption. 


**List of use cases:**

  >Create visitor
  
  >Update visitor
  
  >Create visit summary
  
  >Update visit summary
  
  >Exit visitor
  
  >Search visitor based on visitor info, location, date, etc.
  
  >Approved/Scheduled/Pending tabs (with pagination)
  
  >Reports (with pagination)
  
  >Visitor profile view
  
  >Pre-schedule visits
  
  >Approvals via mail
  
  >Approval on behalf by receptionist
  
  >Mail to visitor about the status of his/her visit
  
  >Notifications via websockets
  
  >Capture and store visitor picture
  
  >OAuth 2.0
  
  >Swagger UI
  
  >Scheduler (cron task)

**AWS details:**

  >>*Instance IP Address:* 13.233.40.37
  
  >>*Username:* ubuntu
  
  >>*Contact for access:* Srinivasulu Korrapati- srinivasulu.korrapati@accolitelabs.com

**Dev Env:**

  >>http://visitors-dev.accolitelabs.com
  
  >>*S3 bucket:* accolite-visitors-dev-app

**Prod Env:**

  >>http://visitors.accolitelabs.com/
  
  >>*S3 bucket:* accolite-visitors-app

*GIT Repo URL:* https://github.com/accolite/visitors.git

**Technologies Used:**

>*Front End:* Angular 8

>*Backend:* Java, Mongo-DB

**Mongo DB details:**

*Document:* visitor

>*Fields:* id, firstName*, lastName*, phoneNumber*, emailId*, idType, idNumber, visitorType*, imageId, visitSummary list

>>*VisitSummary fields:* visitNumber, badgeNo, comingFrom, contactPerson, contactPersonEmailId, contactPersonPhone, purpose, officeLocation, inTime, outTime, status, scheduledStartDate, scheduledEndDate, remarks

>*Unique fields:* emailId, idNumber

**Jenkins Integration (backend):**

>*Jenkins Url:* http://13.233.40.37:8080/

>*Job name:* Visitors-Dev-Backend

>*Username:* visitors-app

>*Password:* visitors@123

**Steps done:**

  >>Checkout the code from Github.
  
  >>Maven - clean, compile and package.
  
  >>Jar (visitors.jar) will be created and automatically placed in jenkins workspace. (i.e., /var/lib/jenkins/workspace/Visitors-Dev-Backend/visitors-backend/target/)
  
  >>Then the jar file will be executed using Shell commands.

**Swagger UI:**

http://visitors-dev.accolitelabs.com:8081/swagger-ui.html

**Application URL (Dev):**

http://visitors-dev.accolitelabs.com

**Yet to be:**

  >Fetch the employee details from an API endpoint using employee Id.
  
  >Download the report in PDF or Excel format.
  
  >Print ID card template.
  
  >Face recognition feature.
  
  >Integration with Aadhar data instead of manual visitor data entry.



