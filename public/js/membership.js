
const addUserToApp = (user) => {
    $.ajax({
        url: '/api/user',
        data: user,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    })
}

const createUserForm = () => {
    let formData = {};
    formData.firstname = $('#firstname').val();
    formData.surname = $('#surname').val();
    formData.email = $('#email').val();
    formData.phone = $('#phone').val();
    formData.password = $('#password').val();
    formData.password2 = $('#password2').val();
    formData.type = 'Resident';

    console.log("Form Data Submitted: ", formData);
    addUserToApp(formData);

}
const createAdminForm = () => {
    let formData = {};
    formData.firstname = $('#firstname').val();
    formData.surname = $('#surname').val();
    formData.email = $('#email').val();
    formData.phone = $('#phone').val();
    formData.password = $('#password').val();
    formData.password2 = $('#password2').val();
    formData.type = 'Admin';

    console.log("Form Data Submitted: ", formData);
    addUserToApp(formData);

}
const getUser = () => {
    $.get('/api/user',(response) => {
        if(response.statusCode==200){
            console.log(response)
            addCards(response.data);
        }
        else {
            console.log(response)
        }
    })
}



  $(document).ready(function(){
    $('#createUserForm').click(()=>{
        createUserForm();
    })
    $('#createAdminForm').click(()=>{
        createAdminForm();
    })
    $('#login').click(()=>{
        getUser();
    })

    getUser();
  });

