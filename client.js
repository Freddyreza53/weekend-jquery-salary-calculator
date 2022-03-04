$(ready);

let employeeArray = [];
let totalSalary = 0;
let counter = 0;

function ready() {
    $('#addButton').on('click', addEmployee);
}

function addEmployee() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let title = $('#title').val();
    let salary = Number($('#salary').val());

    let employeeObject = {
        first: firstName,
        last: lastName,
        id: idNumber,
        title: title,
        salary: salary
    }

    employeeArray.push(employeeObject);

    $('#tableBody').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button class="button" id="deleteButton">Delete</button></td>
        </tr>`);

    $('#deleteButton').on('click', deleteEmp);


    totalSalary += salary;
    $('#totalSalary').text(totalSalary);

    $('.input').val('');
}

function deleteEmp() {
    $(this).closest('tr').remove();
    
    // totalSalary -= employeeArray.salary;

    $('#totalSalary').text(totalSalary);
    
    
}



