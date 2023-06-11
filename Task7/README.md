# **:star2: Task 7: Javascript Project**

<p align="center">
    <img style="border-radius:8px;border:none;" src="../screenshots/Tweet%20by%20Bruno%20Lemos.png" />
</p>

<p align="justify">
When someone asks me what programming language they should learn, I don't simply pick my favorite. I play matchmaker! Web frontend? JavaScript is the heartthrob. Backend? Still JavaScript steals the show. Mobile apps? JavaScript saves the day. Games? Yup, JavaScript's got game. AI? Guess what? JavaScript to the rescue again! So, no matter the path, JavaScript's the hot pick for a programmer's heart.
</p>

## **:pushpin: Challenge**  

<p align="justify">
First, create a webpage as the following (Fig 1) containing the student's name in tabular form with the provision to view marks. The user must be able to enter the student's name and add in to the table.  
</p>

<p align="center">
    <img src="../screenshots/1.students-list.png" />
</p>
<p align="center" style="font-weight:bold;">Fig: 1</p>
        
<p align="justify">
    Then, one must be able to view marks of individual students in the form of <a href="https://getbootstrap.com/docs/4.0/components/modal/">pop-up modal</a>. Initially, there will be no marks shown. Then the user must be able to enter as much as any subjects along with thier 3 internal term examination marks with thier total as shown below. display the CGPA score in form percentage or out of 10. 
</p>

<p align="center">
    <img src="../screenshots/2.marks-list.png" />
</p>
<p align="center" style="font-weight:bold;">Fig: 2</p>
    
<p align="justify">
    The file structure should look like the following or you can have your own. 
</p>       

    📂 Task7
    ├── index.html  #It contains students list
    └── studentsmarks.html #It contains students marks displayed

<p align="justify">
    
In `index.html` there contains an input field, value in the input field should be able to fetched and play with it inside the array, refer the resources below. The input field must be validated for any empty strings and an error message must be displayed ragarding it. 

On clicking View marks button one should navigate to the new page using the Window/Document object containing the student id. The student id should be read from the URL and display yhe respective students marks in the `studentsmarks.html`.

For persistant storage use `localStorage` to never lose the data on refreshing the wenb page. To Know more about the Web Storage API, visit https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API. 
</p>       

    


## **📂 Submission**
Submit the link to your hosted static website [Here](https://forms.gle/DdKFebZgZK5sgREFA).</br>
https://forms.gle/DdKFebZgZK5sgREFA


## **🌐 Resources**
- Bootstrap Modal<br />https://getbootstrap.com/docs/4.0/components/modal/
- Read text input value<br />https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-text-input-field-using-javascript.php
- JavaScript redirect URL with parameters<br />https://www.tutorialandexample.com/javascript-redirect-url-with-parameters
- Web Storage API<br />https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API.
