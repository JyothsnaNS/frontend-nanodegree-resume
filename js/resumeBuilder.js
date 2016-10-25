/*This is the bio section*/
var bio = {
    "name": 'Jyothsna NS',
    "role": 'Front End Web developer',
    "biopic": "https://placeimg.com/197/148/tech",
    "contacts": {
        "email": ' jyothsnans@gmail.com',
        "twitter": '@ Naachchiyaar',
        "github": ' https://github.com/JyothsnaNS/',
        "location": ' India',
        "mobile": ' +91 9480048228'
    },
    "skills": ["HTML", "CSS", "Javascript", "Cisco Routing,Switching and Network Security"],
    "welcomeMessage": 'Hey there! Welcome to my page!'
};

/*This is the work section */
var work = {
    "jobs": [{
        "employer": 'Infosys Technologies',
        "title": 'Systems Engineer',
        "dates": 'August 2013 - July 2015',
        "description": 'Network Engineer for IBM Network infrastructure',
        "location": 'Hyderabad,India'
    }]
};
/*This is the projects section */
var projects = {
    "projects": [{
        "title": 'at&t - IBM Bluesky',
        "dates": '2013 to 2015',
        "description": 'Responsible for management of the IBM network infrastructure,performing configuration changes on Cisco routers,switches and Firewalls.Also responsible for reviewing Network Optimization.',
        "images": "https://placeimg.com/300/150/tech",
        "location": 'Hyderabad,India'
    }]
};
/*This is the education section */
var education = {
    "schools": [{
        "name": 'VC Pre-University College',
        "location": 'Bangalore',
        "degree": 'Pre-University',
        "majors": ["Science"],
        "url" : "www.vcpuc.com" ,
        "dates": '2006 - 2008' 
    }, {
        "name": 'Visweswaraya Technological University',
        "location": "Bangalore",
        "degree": "Bachelor of Engineering",
        "majors": ["Telecommunications"],
        "url" : "www.vtu.com" ,
        "dates": "2008 - 2012"
    }],
    "onlineCourses": [{
        "title": ["HTML", "CSS", "Javascript", "Jquery", "FEND"],
        "school": 'Udacity',
        "date": '2015',
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree"
    }]
};

/* bio display function */

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header").append(formattedEmail);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header").append(formattedMobile);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#header").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedLocation);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    $("#header").append(HTMLskillsStart);
    if (bio.skills.length > 0) {
        for (var skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter);
};

/* work display function */

work.display = function() {
    if (work.jobs.length > 0) {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }

};

/* projects display function */
projects.display = function() {
    if (projects.projects.length > 0) {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", projects.projects[project].location);
            $(".project-entry:last").append(formattedWorkLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

/* education display function */
education.display = function() {
    if (education.schools.length > 0) {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedCity);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor);
        }
    }
    if (education.onlineCourses.length > 0) {
        for (var onlineCourse in education.onlineCourses) {
            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            $(".education-entry:last").append(formattedTitle);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            $(".education-entry:last").append(formattedOnlineSchool);
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
            $(".education-entry:last").append(formattedDate);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
};

work.display();
projects.display();
bio.display();
education.display();

/* Location display - map */
$("#mapDiv").append(googleMap);