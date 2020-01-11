const aboutButton = $('#about-button');
const aboutSection = $('#about-section');
const profButton = $('#professional-button');
const profSection = $('#professional-section');
const educationButton = $('#education-button');
const educationSection = $('#education-section');
const skillsButton = $('#skills-button');
const skillsSection = $('#skills-section');
const projectsButton = $('#projects-button');
const projectsSection = $('#projects-section');
const contactsButton = $('#contact-button');
const contactsSection = $('#contacts-section')

aboutButton.click(function() {
    $('html, body').animate({
        scrollTop: parseInt(aboutSection.offset().top)
    }, 500);
});

profButton.click(function() {
    $('html, body').animate({
        scrollTop: parseInt(profSection.offset().top)
    }, 500);
});

educationButton.click(function() {
    $('html, body').animate({
        scrollTop: parseInt(educationSection.offset().top)
    }, 500);
});

skillsButton.click(function() {
    $('html, body').animate({
        scrollTop: parseInt(skillsSection.offset().top)
    }, 500);
});

projectsButton.click(function() {
    $('html, body').animate({
        scrollTop: parseInt(projectsSection.offset().top)
    }, 500);
});

contactsButton.click(function() {
    $('html, body').animate({
        scrollTop: parseInt(contactsSection.offset().top)
    }, 500);
});