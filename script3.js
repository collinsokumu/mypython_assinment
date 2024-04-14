const buttons = document.querySelectorAll('.services button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const service = button.parentElement; // Get the parent service element
    service.classList.add('completed'); // Add the completed class
  });
});
