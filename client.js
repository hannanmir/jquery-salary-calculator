console.log('js');

$(document).ready(readyNow);

let salarySum = [];

function readyNow() {
    console.log('jQuery');
    $('#inputBtn').on('click', submitInfo);
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
        $('#cloth').append(`
        <tr>
            <td>${employee.firstname}</td>
            <td>${employee.lastname}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td class="calcM">${employee.salary}</td>
        </tr>`);
        console.log(employee);
        salaryOne = employee.salary/12
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
    $('.total').append(`<p>Total Monthly: $${salaryMonthly}</p>`); 
}
