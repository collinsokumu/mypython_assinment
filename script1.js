// Select buttons with the class "schedule-test-drive"
const testDriveButtons = document.querySelectorAll('.schedule-test-drive');

// Add click event listener to each button
testDriveButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Alert message (placeholder functionality)
    alert('You have scheduled a test drive! We will contact you shortly.');
    
    // Optional: You can redirect to a form or another page here
    // window.location.href = 'your-form-page.html';
  });
});
const testDriveButton = document.querySelector('.schedule-test-drive');

testDriveButton.addEventListener('click', () => {
  // Alert message (placeholder functionality)
  alert('You have scheduled a test drive! We will contact you shortly.');
  
  // Optional: You can redirect to a form or another page here
  // window.location.href = 'your-form-page.html';
});
// Get all vehicle container elements
const vehicleContainers = document.querySelectorAll('.vehicle-container');

// Initially show only the first page
vehicleContainers[0].style.display = 'block';
// Hide other pages
for (let i = 1; i < vehicleContainers.length; i++) {
  vehicleContainers[i].style.display = 'none';
}

// Add event listeners to page links (replace with actual selector)
const pageLinks = document.querySelectorAll('.pagination .page-link');
pageLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Implement logic to show the corresponding page and hide others
  });
});

// Add event listener for "Next" button (if applicable)
// ...

// Add event listener for "Previous" button (if applicable)
// ...
function filterItems() {
  var make = document.getElementById("makeSelect").value;
  var bodyStyle = document.getElementById("bodyStyleSelect").value;
  var items = document.getElementsByClassName("item");

  for (var i = 0; i < items.length; i++) {
      var itemMake = items[i].getAttribute("data-make");
      var itemBodyStyle = items[i].getAttribute("data-body-style");

      if ((make === "" || itemMake === make) && (bodyStyle === "" || itemBodyStyle === bodyStyle)) {
          items[i].style.display = "";
      } else {
          items[i].style.display = "none";
      }
  }
}
function searchFunction() {
  // Get the input value
  var input = document.getElementById("searchInput").value.toLowerCase();
  
  // Get the list of items to filter
  var items = document.getElementsByClassName("item");
  
  // Loop through all items, and hide those that don't match the search query
  for (var i = 0; i < items.length; i++) {
      var makeModelKeyword = items[i].textContent.toLowerCase();
      if (makeModelKeyword.indexOf(input) > -1) {
          items[i].style.display = "";
      } else {
          items[i].style.display = "none";
      }
  }
}
function filterOptions() {
    var make = document.getElementById("makeSelect").value;
    var bodyStyle = document.getElementById("bodyStyleSelect").value;
    
    var options = document.getElementsByTagName("option");
    
    for (var i = 0; i < options.length; i++) {
        var makeValue = options[i].getAttribute("value");
        var bodyStyleValue = options[i].getAttribute("value");
        
        if ((make !== "" && makeValue !== make) || (bodyStyle !== "" && bodyStyleValue !== bodyStyle)) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "";
        }
    }
}