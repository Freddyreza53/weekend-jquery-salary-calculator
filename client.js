$(ready);
let totalSalary = 0;
function ready() {
    $('#addButton').on('click', addEmployee);
    $(`#tableBody`).on('click', '.deleteBtn', deleteEmp);
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

    $('#tableBody').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button class="deleteBtn" data-object="${employeeObject.salary}"id="deleteButton">Delete</button></td>
        </tr>`);

    totalSal(employeeObject.salary);

    $('.input').val('');
}

function totalSal(sal) {
    totalSalary += sal;
    if (totalSalary > 20000) {
        $('#totalSalary').addClass('red');
    } else {
        $('#totalSalary').removeClass('red');
    }
    $('#totalSalary').text(totalSalary);
}

function deleteEmp() {
    let removed = $(this).data('object');

    totalSal(Number(removed) * -1);
    
    $(this).closest('tr').remove();
}



