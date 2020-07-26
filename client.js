console.log('js');

$(document).ready(readyNow);

let salarySum = [];

function readyNow() {
    console.log('jQuery');
    $('#inputBtn').on('click', submitInfo);
    $('#target').on('click', '.delete', deleteStuff);
}

function submitInfo() {
    let employee = {
        firstname: $('#firstInput').val(),
        lastname: $('#lastInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        salary: $('#salaryInput').val()
    }
    if (employee.firstname === '' || employee.lastname === ''|| employee.id === '' || employee.title === '' || employee.salary === '') {
        alert('Please enter all fields.');
    } else {
        $('#target').append(`
        <tr>
            <td>${employee.firstname}</td>
            <td>${employee.lastname}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td data-id='tester' class='calcM'>${employee.salary}</td>
            <td><button class="delete btn btn-secondary">Delete</button></td>
        </tr>`);
        console.log(employee);
        salaryOne = employee.salary/12;
        salarySum.push(salaryOne);
        console.log(salarySum);
        monthlyCalc(salarySum);
        $('#firstInput').val('');
        $('#lastInput').val('');
        $('#idInput').val('');
        $('#titleInput').val('');
        $('#salaryInput').val('');
    }
}

function monthlyCalc(salary) {
    let salaryMonthly = 0;
    for (let i = 0; i < salary.length; i++)  
    salaryMonthly += salary[i];
    $('.total').empty();
    $('.total').append(`<p class="p-3 mb-2 text-white text-center font-weight-bolder">Total Monthly: $${salaryMonthly.toFixed(2)}</p>`);
    $('.total').data('storedM', Number(salaryMonthly));
    if (salaryMonthly > 20000) {
        $('.total').addClass("bg-danger");
        $('.total').removeClass("bg-secondary");
    } else if (salaryMonthly <= 20000) {
        $('.total').removeClass("bg-danger");
        $('.total').addClass("bg-secondary");
    }
}

function deleteStuff(salary) {
    console.log('Exterminate!');
    let deletedValue = Number($(this).parent().prev().text());
    let currentValue = $('.total').data('storedM') - (deletedValue/12)
    $('.total').empty();
    $('.total').append(`<p class="p-3 mb-2 text-white text-center font-weight-bolder">Total Monthly: $${currentValue.toFixed(2)}</p>`);
    $('.total').data('storedM', Number(currentValue));
    if (currentValue > 20000) {
        $('.total').addClass("bg-danger");
        $('.total').removeClass("bg-secondary");
    } else if (currentValue <= 20000) {
        $('.total').removeClass("bg-danger");
        $('.total').addClass("bg-secondary");
    }
    $(this).parent().parent().empty();
}