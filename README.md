# Monthly Salary Calculator

### How Long It Took
Duration: 2 days;

## Description
Your project description goes here. What problem did you solve? How did you solve it?

After page loads, all input fields need to contain the employees information and a click on the "Add" button is required to add the data to the "List of Employees" table on the bottom portion of the screen. If any of the inputs are empty, a message will appear that lets the user know that all input fields are required to proceed and highlight the empty inputs. If all fields are correctly filled, then the program will display the added employees information on the table below.

The footer of the table will keep track of the users "Total Monthly Salary"(all the annual salaries from the table divided by 12). If the "Total Monthly Salary" is greater than $20,000.00, the calculator will highlight the monthly salary red. A delete button will be added to the end of each employees row that allows user to remove the employee and all of their data from the table. 

## Problems I Ran Into

The first problem that arose was when I tried to use my delete button to remove the row. It would remove the row but for some reason my deleteEmp function was running twice and not deleting any of the employee rows that were not in the first row. After some strategically placed console.logs I was able to deduce that the problem came from the location of my .on('click', deleteEmp) within my program. After reviewing some notes, I realized that I had to place my delete function in my ready() function and target the table that exist and the button that does not exit but will exist in the future. 

My second problem came when I tried to update my total monthly salary after an employee is deleted. This required some research on how to use 
.data(), I learned how to properly use the .data method and I was able to store the salary of each added employee as data on their respective delete button. When the delete button is clicked, the data stored in the button is removed and used to update the total monthly salary. 

The last tough problem I had was when the user had empty inputs, I wanted the program to let the user know which inputs were empty and allow the user to finish filling them out and once filled, the program should continue. I used many conditional statements to get this to work that checks each input to see if they are empty, if they were, then jquery will append a message to the header and add a class to the inputs that are empty. The add class will change the input fields to a red background color in order to let the user know which field is empty. 

## Built With
- HTML, CSS, Javascript, Jquery, and Bootstrap.

## Acknowledgment
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. 

## Support
If you have suggestions or issues, please let me know in the assignment portal.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
