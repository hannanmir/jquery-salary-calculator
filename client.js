console.log('js');

$(document).ready(readyNow);

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
            <td>${employee.salary}</td>
        </tr>`);

        console.log(employee);
        $('#firstInput').val('');
        $('#lastInput').val('');
        $('#idInput').val('');
        $('#titleInput').val('');
        $('#salaryInput').val('');
    }
}
