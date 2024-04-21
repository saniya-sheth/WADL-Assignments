document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if there's any data
    if (userData && userData.length > 0) {
        // Reference to the userDataContainer div
        const userDataContainer = document.getElementById('userDataContainer');

        // Create a HTML string to hold the user data
        let html = '<ul>';

        // Iterate over each user data object and create list items
        userData.forEach(function(user) {
            html += '<li>';
            html += 'Username: ' + user.username + '<br>';
            // You might want to avoid displaying the password in a real application
            html += 'Password: ' + user.password + '<br>';
            html += 'ID:' + user.id + '<br>';
            html += 'Name:' + user.name + '<br>';
            html += 'email:' + user.email + '<br>';
            html += 'DOB:' + user.dob + '<br>';
            html += 'Gender:' + user.gender + '<br>';
            html += '</li>';
        });

        html += '</ul>';

        // Set the inner HTML of the container with the generated HTML string
        userDataContainer.innerHTML = html;
    } else {
        // If there's no user data, display a message
        document.getElementById('userDataContainer').innerHTML = 'No user data available.';
    }
});
