+++
title = "2. Jiffy Workspace"
draft = false
date = "2016-11-07T14:03:40+05:30"
+++
Jiffy workspace has two components

**Jiffy Application** and **Jiffy UI Learn application.**

Jiffy UI learn application is required only when Jiffy is used for UI automation. During UI automation, user needs to ensure that Jiffy service is running in the machine where the UI automation is performed. Jiffy service is a supporting application which is required for the interaction between Jiffy application and UI application.  

## Jiffy Application

Jiffy Log-In Screen comes up on entering the Jiffy URL on the browser. Provide Username and Password and click on Log In button to login to the application.

Jiffy provides standard modules to perform end to end task management activities right from design to execution and reporting. Task Design, Task Execution, Dashboards, Repository and Settings are the standard modules which gives quick links to the various functionalities in Jiffy.

**Dashboard**

Dashboard provides a quick snapshot of progress made across Task Design and Task Execution. 

**Task Design**

Task Design module is used to design the automated tasks. In Jiffy, Tasks are managed in a hierarchical structure.
![](/media/image1.png)

Once the Function and Process is created, Tasks and Environments can be added under Process. The Tasks created under a Process can be executed under any Environment added under the same Process. 

Task Design module comprises of the following menu items: 

 * *Task plan* - To manage the hierarchical structure for tasks – Add/Edit Processes and Environments
 
 + *Configurations* - To define the connection parameters for all the applications used in the automated steps of Tasks
 
 + *Tasks* - To manage all functionalities of automated tasks
 

**Task Execution**

Task execution module is to manage the execution of Tasks. This comprises of the following Menu Items,

 * *Run Tasks* -  To Run/Schedule run for selected task(s) under the selected environment
 
 + *Scheduled runs* – To view/cancel scheduled runs
 
 + *Execution Summary & History* – To get the details of all the tasks executed
 
 + *Polling History* -  To get the details of all the polling tasks (tasks which are continuously getting executed at a given time interval)
 
**Repository**

All the items which can be reused are saved under repository. Jiffy comes with a rich set of repository functions – Add/Edit/Archive/Replace etc. Repository comprises of the following menu items:

 * Task repository
 + XML Templates
 + JSON Templates
 + CSV Data
 + XML Data
 + Web Services
 + Expressions
 + UI Controls
 + Labels
 + Excel Macros

**Components**

A group of automated steps that perform a sub task can be made as a component and can be saved here to be used across any other Tasks. This avoids the repeated writing of same steps again and again in the Task design.

**Settings**

All the Jiffy admin functionalities are listed under this menu. 

 * *Function* - Create and manage Functions
 + *Roles* - Create and manage Roles
 + *Users* - Create and manage Users
 + *License* – To view the license details


