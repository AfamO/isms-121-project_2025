const validateForm = () => {
   confirm("Have you filled out the form correctly?");
    let errorMsg = document.getElementById('errorMsg');
    let photoUrlInput = document.forms["catForm"]['catUrl'].value;
    alert("Length of Input: " + photoUrlInput.length);
    if (photoUrlInput == "") {
        alert("Form url name must be filled out");
        errorMsg.innerHTML = "Please enter a valid URL for the cat photo.";
        errorMsg.className='text-danger';
        return false;
    }
    else if (photoUrlInput.length <= 3) {
        alert("Form Url name must be at least 3 characters long");
        errorMsg.innerHTML = "Url name must be at least 3 characters long";
        errorMsg.className='text-danger';
        return false;
    }

}
  