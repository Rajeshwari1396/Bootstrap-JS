// Counter for user IDs
let userId = 2;

// Get Form and Table Body elements
const userForm = document.getElementById('userForm');
const tableBody = document.getElementById('tableBody');

// Handle Form Submission
userForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh

    // Read values from form input fields
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('userEmail').value;
    const role = document.getElementById('userRole').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    // Create a new row element
    const newRow = document.createElement('tr');

    // Set badge style depending on status
    const badgeClass = status === 'Active' ? 'bg-success' : 'bg-secondary';

    // Insert row content
    newRow.innerHTML = `
        <td>${userId}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${role}</td>
        <td><span class="badge ${badgeClass}">${status}</span></td>
        <td>
            <button class="btn btn-sm btn-danger delete-btn">Delete</button>
        </td>
    `;

    // Append new row to table
    tableBody.appendChild(newRow);

    // Increment ID for next user
    userId++;

    // Reset form fields
    userForm.reset();
});

// Event Delegation to Delete Row
tableBody.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        // Remove the parent <tr> of the clicked button
        e.target.closest('tr').remove();
    }
});