$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        autoplay:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        },
        onInitialized: function(event) {
            // Disable click on dots
            $(".owl-dots").css("pointer-events", "none");
          },
        onTranslated: function(event) {
            var currentIndex = event.item.index;
            var totalItems = event.item.count;
            
            // Check if it's the last slide
            if (currentIndex === totalItems - 1) {
              $('.owl-next').replaceWith('<a href="./createacount.html" class="owl-next"></a>');
            }
          }
    })
});

// img uplad 

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css({
                'background-image': 'url('+e.target.result +')',
                // 'position': 'relative',
                // 'z-index': '1' // Set the z-index here
            });
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});

//set pin 
//var pinContainer = document.getElementsByClassName("pin-code")[0];


// select 

const selectedAll = document.querySelectorAll(".wrapper-dropdown");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.children[2];
  const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");

  selected.addEventListener("click", () => {
    let arrow = selected.children[1];

    if (selected.classList.contains("active")) {
      handleDropdown(selected, arrow, false);
    } else {
      let currentActive = document.querySelector(".wrapper-dropdown.active");

      if (currentActive) {
        let anotherArrow = currentActive.children[1];
        handleDropdown(currentActive, anotherArrow, false);
      }

      handleDropdown(selected, arrow, true);
    }
  });

  // update the display of the dropdown
  for (let o of optionsList) {
    o.addEventListener("click", () => {
      selected.querySelector(".selected-display").innerHTML = o.innerHTML;
    });
  }
});

// check if anything else ofther than the dropdown is clicked
window.addEventListener("click", function (e) {
  if (e.target.closest(".wrapper-dropdown") === null) {
    closeAllDropdowns();
  }
});

// close all the dropdowns
function closeAllDropdowns() {
  const selectedAll = document.querySelectorAll(".wrapper-dropdown");
  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    let arrow = selected.children[1];

    handleDropdown(selected, arrow, false);
  });
}

// open all the dropdowns
function handleDropdown(dropdown, arrow, open) {
  if (open) {
    arrow.classList.add("rotated");
    dropdown.classList.add("active");
  } else {
    arrow.classList.remove("rotated");
    dropdown.classList.remove("active");
  }
}

const tooltip = document.querySelector('.tooltip-icon');
const tooltipText = document.querySelector('.tolltip-box');
  function toggleTooltip() {
    if (tooltipText.style.visibility === 'visible') {
      tooltipText.style.visibility = 'hidden';
      tooltipText.style.opacity = '0';
    } else {
      tooltipText.style.visibility = 'visible';
      tooltipText.style.opacity = '1';
    }
  }

  // Add click event listener to the tooltip
  tooltip.addEventListener('click', function(event) {
    // Prevent default behavior (e.g., following a link)
    event.preventDefault();
    // Toggle the tooltip visibility
    toggleTooltip();
  });

  // Close tooltip when clicking outside of it
  document.addEventListener('click', function(event) {
    if (!tooltip.contains(event.target)) {
      tooltipText.style.visibility = 'hidden';
      tooltipText.style.opacity = '0';
    }
  });
// notifiaction popup
  function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block") {
      popup.style.opacity = "0";
      setTimeout(() => {
        popup.style.display = "none";
      }, 500); // Time in milliseconds, matching the transition time
    } else {
      popup.style.display = "block";
      setTimeout(() => {
        popup.style.opacity = "1";
      }, 10); // A small delay to ensure display is set before opacity change
    }
  }
  
// open page after click view all
document.addEventListener('DOMContentLoaded', function() {
  const viewAllBtn = document.getElementById('viewAllBtn');
  const profileTab = document.getElementById('v-pills-deal-tab');

  viewAllBtn.addEventListener('click', function() {
    const tab = new bootstrap.Tab(profileTab);
    tab.show();
  });
});

// link going to profile tab after clink on setting profile tab link 
document.addEventListener('DOMContentLoaded', function() {
  const profileAllBtn = document.getElementById('pills-edit-profile-tab');
  const profilVieweTab = document.getElementById('v-pills-profile-tab');

  profileAllBtn.addEventListener('click', function() {
    const tab = new bootstrap.Tab(profilVieweTab);
    tab.show();
  });
});

//  view the all cards and hide the page 

function showAll() {
  document.getElementById('additionalCards').style.display = 'block';
  document.getElementById('shortcardview').style.display = 'none';
}

// show and hide  profile section

function showEditSection() {
  document.getElementById('editSection').style.display = 'block';
  document.getElementById('edit-btn').style.display ='none';
  document.getElementById('productView').style.display ='none';
  document.getElementById('save-btn').style.display ='block';
}

function saveChanges() {
  document.getElementById('editSection').style.display = 'none';
  document.getElementById('save-btn').style.display = 'none';
  document.getElementById('productView').style.display = 'block';
  document.getElementById('edit-btn').style.display = 'block';
}





