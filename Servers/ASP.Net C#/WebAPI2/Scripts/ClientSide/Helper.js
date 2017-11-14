

function FillGrid(data)
{
    var r = new Array(), j = -1;

    //Table Header
    r[++j] = '<thead class="thead-inverse"><tr><th>#</th><th>Username</th><th>Password</th><th>Name</th><th>Salary</th><th>DOB</th><th>Is Active</th><th>Role</th><th></th></tr></thead>';
    for (var key = 0, size = data.length; key < size; key++) {
        r[++j] = '<tr><th scope="row">';
        r[++j] = data[key]["ID"];
        r[++j] = '</td><td>';
        r[++j] = data[key]["Username"];
        r[++j] = '</td><td>';
        r[++j] = data[key]["Password"];
        r[++j] = '</td><td>';
        r[++j] = data[key]["Name"];
        r[++j] = '</td><td>';
        r[++j] = data[key]["Salary"];
        r[++j] = '</td><td>';
        r[++j] = toJSDate(data[key]["Birthdate"]);
        r[++j] = '</td><td>';
        r[++j] = data[key]["IsActive"];
        r[++j] = '</td><td>';
        r[++j] = data[key]["Role"];
        r[++j] = '</td><td>';
        r[++j] = '<button type="button" class="btn btn-danger" onclick="DeleteEmployee(' + data[key]["ID"] + ');">Delete</button>';
        r[++j] = '<button type="button" class="btn btn-primary" onclick="GetEmployee(' + data[key]["ID"] + ');">Edit</button>';
        r[++j] = '</td></tr>';
    }
    $('#dataTable').html(r.join(''));
}

function toJSDate(dateTime) {

    var dateTime = dateTime.split("T");

    var date = dateTime[0].split("-");

    var NewDate = (date[0] + "-" + date[1] + "-" + date[2]);

    return NewDate;

}