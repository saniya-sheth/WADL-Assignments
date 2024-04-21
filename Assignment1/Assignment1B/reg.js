document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const id = document.getElementById('id').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name1').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById("date").value;
    const gender = $("input[name='gender']:checked");
    const address = document.getElementById("address").value;
    const pin = document.getElementById("pin").value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // localStorage.clear();
    // Create an object to hold the user data

    const userData = {
        username: username,
        password: password,
        id: id,
        name: name,
        email: email,
        dob: dob,
        gender: gender,
        address: address,
        pin: pin,
        city: city,
        state: state,
    };
    

    // Store the user data in local storage
    storeUserData(userData);

    // Redirect to the data list page
    window.location.href = 'data.html';
});

function storeUserData(userData) {
    // Retrieve existing user data from local storage or initialize an empty array
    
    let existingData = JSON.parse(localStorage.getItem('userData')) || [];
    
    // Push the new user data into the existing data array
    existingData.push(userData);

    // Store the updated data array back into local storage
    localStorage.setItem('userData', JSON.stringify(existingData));
}
