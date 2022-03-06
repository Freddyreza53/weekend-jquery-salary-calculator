$(ready);
let totalSalary = 0;
let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

function ready() {
    $('#addButton').on('click', addEmployee);
    $(`#tableBody`).on('click', '.deleteBtn', deleteEmp);
}

function addEmployee() {
    let firstName = $('#firstName').val();
    let lastName  = $('#lastName').val();
    let idNumber  = $('#idNumber').val();
    let title     = $('#title').val();
    let salary    = Number($('#salary').val());

    if (firstName == '' || lastName == '' || idNumber == '' || title == '' || salary    == '') {
        $('.required').text('* ALL FIELDS ARE REQUIRED');
        
        if (firstName == '' ) {
            $('#firstName').addClass('moreRed')
        }
        if (lastName == '' ) {
            $('#lastName').addClass('moreRed')
        }
        if (idNumber == '' ) {
            $('#idNumber').addClass('moreRed')
        }
        if (title == '' ) {
            $('#title').addClass('moreRed')
        }
        if (salary == '' ) {
            $('#salary').addClass('moreRed')
        }
    } else {
        $('.required').text('');
        $('#firstName').removeClass('moreRed')
        $('#lastName').removeClass('moreRed')
        $('#idNumber').removeClass('moreRed')
        $('#title').removeClass('moreRed')
        $('#salary').removeClass('moreRed')

        $('#tableBody').append(`
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${idNumber}</td>
                <td>${title}</td>
                <td>${dollarUS.format(salary)}</td>
                <td>
                    <button class="deleteBtn" data-object="${salary}"id="deleteButton">Delete</button>
                </td>
            </tr>`);

        totalSal(salary/12);

        $('.input').val('');
    }
}

function totalSal(sal) {
    totalSalary += sal;

    if (totalSalary > 20000) {
        $('#totalSalary').addClass('red');
    } else {
        $('#totalSalary').removeClass('red');
    }
    $('#totalSalary').text(dollarUS.format(Math.abs(totalSalary)));
}

function deleteEmp() {
    let removed = $(this).data('object');

    totalSal(removed/12 * -1);
    
    $(this).closest('tr').remove();
}