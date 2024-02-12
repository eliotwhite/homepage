// Get all dialog elements
const dialogs = document.querySelectorAll('dialog');

// Loop through each dialog and add the class
// Using the classes to change the style of the dialog element
dialogs.forEach(dialog => {
  dialog.classList.add('backdrop-blur-md', 'opacity-70');
});