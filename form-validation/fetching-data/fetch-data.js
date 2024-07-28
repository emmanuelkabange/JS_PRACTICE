// script.js

// Function to fetch user data
async function fetchUserData() {
    try {
        // Fetch data from the public API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // Check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const users = await response.json();

        // Call the function to display users
        displayUsers(users);
    } catch (error) {
        // Handle errors
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById('userList').innerHTML = '<li>Error fetching user data.</li>';
    }
}

// Function to display users
function displayUsers(users) {
    const userList = document.getElementById('userList');

    // Clear any existing content
    userList.innerHTML = '';

    // Loop through users and create list items
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });
}

// Call the fetchUserData function when the script loads
fetchUserData();
