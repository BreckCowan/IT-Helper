function openService(evt, serviceName) {
  // Get all tab contents
  var tabContents = document.getElementsByClassName('tabcontent');

  // Remove 'active' class from all tab links and tab contents
  var tabLinks = document.getElementsByClassName('tablinks');
  for (var i = 0; i < tabContents.length; i++) {
    tabLinks[i].classList.remove('active');
    tabContents[i].classList.remove('active');
  }

  // Add 'active' class to the selected tab link and tab content
  var selectedTabLink = evt.currentTarget;
  var selectedTabContent = document.getElementById(serviceName);

  selectedTabLink.classList.add('active');
  selectedTabContent.classList.add('active');
}
