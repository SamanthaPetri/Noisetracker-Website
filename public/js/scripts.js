
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

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

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<tr>'+'<th>'+item.firstname+'</th>'+
        '<th>'+item.surname+'</th>'+
        '<th>'+item.email+'</th>'+
        '<th>'+item.phone+'</th>'+
        '<th>'+item.address+'</th>'+
        '<th>'+item.date+'</th>'+
        '<th>'+item.stime+'</th>'+
        '<th>'+item.etime+'</th>'+
        '<th>'+item.frequency+'</th>'+
        '<th>'+item.subject+'</th>'+
        '<th>'+item.myfile+'</th>'+
        '<th>'+item.status+'</th>'+
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