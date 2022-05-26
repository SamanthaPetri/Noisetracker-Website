
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

// const deleteProjects = (project) => {
//     $.get({
//         url: '/api/projects',
//         data: project,
//         type: 'GET',
//         success: (result) => {
//             alert(result.message);
//             location.reload();
//         }
//     })
// }
const addProjectToApp = (project) => {
    $.ajax({
        url: '/api/projects',
        data: project,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    })
}

const submitForm = () => {
    let formData = {};
    formData.firstname = $('#firstname').val();
    formData.surname = $('#surname').val();
    formData.email = $('#email').val();
    formData.phone = $('#phone').val();
    formData.address = $('#address').val();
    formData.date = $('#date').val();
    formData.stime = $('#stime').val();
    formData.etime = $('#etime').val();
    formData.frequency = $('#frequency').val();
    formData.subject = $('#subject').val();
    formData.myfile = $('#myfile').val();
    formData.status = 'New';

    console.log("Form Data Submitted: ", formData);
    addProjectToApp(formData);

}


const getProjects = () => {
    $.get('/api/projects',(response) => {
        if(response.statusCode==200){
            console.log(response)
            addCards(response.data);
        }
        else {
            console.log(response)
        }
    })
}
function deleteComplaint(id){

    console.log("Deleted ", id.alt)
    alert("Deleted "+ id.alt)
    //deleteProjects(id.alt)

}

function editComplaint(id){
    console.log("Updated ", id.alt)
    alert("Updated "+ id.alt)

}
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<tr>'+
        '<td>'+item.firstname+'</td>'+
        '<td>'+item.surname+'</td>'+
        '<td>'+item.email+'</td>'+
        '<td>'+item.phone+'</td>'+
        '<td>'+item.address+'</td>'+
        '<td>'+item.date+'</td>'+
        '<td>'+item.stime+'</td>'+
        '<td>'+item.etime+'</td>'+
        '<td>'+item.frequency+'</td>'+
        '<td>'+item.subject+'</td>'+
        '<td>'+item.myfile+'</td>'+
        '<td>'+item.status+'</td>'+
        '<td>'+item._id+'</td>'+
        '<td><input type="submit" class="button" value="Edit"alt="'+item._id+'" onclick="editComplaint(this);" />'+
        '<input type="submit" class="button" alt="'+item._id+'" value="Delete" onclick="deleteComplaint(this);" />'+
        '</td>'+
    '</tr>';
      $("#complaints").append(itemToAppend)
    });
}



$(document).ready(function(){
    $('#formSubmit').click(()=>{
        submitForm();
    })
     getProjects();
    // $('.modal').modal();
  });