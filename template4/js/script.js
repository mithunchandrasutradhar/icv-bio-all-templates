
  $(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});

    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all tabs and hide all content
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.add('d-none'));
  
        // Add active class to the clicked tab
        tab.classList.add('active');
  
        // Show the corresponding content
        const targetId = tab.getAttribute('data-target');
        document.querySelector(targetId).classList.remove('d-none');
      });

    });

  });