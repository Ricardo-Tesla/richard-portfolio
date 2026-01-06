// Track active section
let activeSection = 'home';

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listeners to all nav links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const section = this.getAttribute('data-section');
        scrollTo(section);
    });
});

function scrollTo(section) {
    // Update active section
    activeSection = section;

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    const activeLink = document.querySelector(`[data-section="${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Scroll to section
    if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Data
const heroData = {
    firstName: 'Richard',
    lastName: 'Ngabo',
    title: 'Developer and Creative Designer',
    description: 'Evaluates solutions to uncover hidden needs before they become expensive mistakes.'
};

// Initialize content
document.getElementById('firstName').textContent = heroData.firstName;
document.getElementById('lastName').textContent = heroData.lastName;
document.getElementById('heroTitle').textContent = heroData.title;
document.getElementById('heroDescription').textContent = heroData.description;

// Scroll functions
function scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function scrollToProjects() {
    const element = document.getElementById('projects');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Add event listeners
document.getElementById('contactBtn').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToContact();
});

document.getElementById('projectsBtn').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToProjects();
});

// Data
const aboutData = {
    heading: 'Who am I?',
    profileImage: 'profile.jpg',
    paragraphs: [
        "I'm a full-stack software engineer with experience in building fast, scalable, and user-centered applications for both web and mobile. I work with JavaScript, React, Node.js, Python, Java, and Spring Boot to deliver responsive interfaces, reliable back-end systems, and efficient data workflows. I also develop mobile solutions using Android Studio, allowing me to create end-to-end products across multiple platforms. My work is driven by a commitment to building accessible and meaningful technology, especially in areas where digital tools can improve lives.",
        "I've digitized field data collection processes using platforms like Kobo Toolbox, improving reporting speed and data accuracy. I've also developed secure, role-based web applications for academic and transportation services, integrating real-time task tracking, file handling, and automated notifications. Alongside this, I've built Python tools that support offline backups, data cleaning, and evaluation tasks for development projects. My background also includes contributing to monitoring and evaluation reporting, GIS mapping, dashboard creation, and improving operational workflows in university settings.",
        "With a mix of software engineering, mobile development, UI/UX design, and graphic design experience, I aim to create products that are technically strong, visually engaging, and easy to use. I'm currently seeking opportunities to build scalable applications, enhance user experience, and work with teams focused on delivering high-impact solutions."
    ]
};

// Initialize content
document.getElementById('aboutHeading').textContent = aboutData.heading;
document.getElementById('profileImage').src = aboutData.profileImage;

// Render paragraphs
const paragraphsContainer = document.getElementById('aboutParagraphs');
aboutData.paragraphs.forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    paragraphsContainer.appendChild(p);
});

// Data
const projectsData = {
    activeCategory: 'Web Apps',
    selectedProject: null,
    categories: [
        'Web Apps',
        'Mobile Apps',
        'Graphic Designs',
        'UI/UX Designs'
    ],
    allProjects: [
        {
            id: 1,
            title: 'AssignProj',
            category: 'Web Apps',
            description: 'A group project platform that allows students to collaborate and submit tasks.',
            videoUrl: '/videos/Assignproj.mp4',
            githubUrl: 'https://github.com/Ricardo-Tesla/AssignProj',
            technologies: ['JavaScript', 'Node.js', 'XAMPP'],
            thumbnail: './images/thumbnails/Homepage assignproj.png'
        },
        {
            id: 2,
            title: 'Bus Reservations Platform',
            category: 'Web Apps',
            description: 'An online bus reservation platform.',
            videoUrl: './videos/Easebus.mp4',
            technologies: ['React', 'Express', 'Node.js'],
            thumbnail: './images/thumbnails/Homepage-bus reservations.png'
        },
        {
            id: 3,
            title: 'Fitness App',
            category: 'Mobile Apps',
            description: 'Workout planning and progress tracking app.',
            videoUrl: './videos/Fitness app.mp4',
            technologies: ['Android Studio'],
            thumbnail: './images/thumbnails/Fitness app- homepage.png'
        },
        {
            id: 4,
            title: 'Les Darmi flyer',
            category: 'Graphic Designs',
            description: 'Promotional flyer design for Les Darmi.',
            imageUrl: './images/graphic design/lesdarmiflyer.png',
            thumbnail: './images/graphic design/lesdarmiflyer.png',
            technologies: ['Photoshop', 'Illustrator']
        },
        {
            id: 5,
            title: 'Les DarMi Menu',
            category: 'Graphic Designs',
            description: 'Menu design for Les DarMi.',
            imageUrl: './images/graphic design/lesdarmimenu.png',
            thumbnail: './images/graphic design/lesdarmimenu.png',
            technologies: ['Photoshop', 'Illustrator']
        },
        {
            id: 6,
            title: 'ebook',
            category: 'Graphic Designs',
            description: 'simple ebook design',
            imageUrl: './images/graphic design/ebook.png',
            thumbnail: './images/graphic design/ebook.png',
            technologies: ['Photoshop', 'Illustrator']
        },
        {
            id: 7,
            title: 'Document Design',
            category: 'Graphic Designs',
            description: 'Research and Report Document Design',
            imageUrl: './images/graphic design/documentdesign.png',
            thumbnail: './images/graphic design/documentdesign.png',
            technologies: ['Photoshop', 'Illustrator']
        },
        {
            id: 8,
            title: 'Fitness App UI',
            category: 'UI/UX Designs',
            description: 'Fitness App UI design.',
            imageUrl: './images/ui design/fitnessUI.png',
            thumbnail: './images/ui design/fitnessUI.png',
            technologies: ['Figma']
        },
        {
            id: 9,
            title: 'Mazimpaka LLC',
            category: 'UI/UX Designs',
            description: 'Modern furniture portfolio website.',
            imageUrl: './images/ui design/mazi llc.png',
            thumbnail: './images/ui design/mazi llc.png',
            technologies: ['Figma']
        },
        {
            id: 10,
            title: 'Auro mobile app design',
            category: 'UI/UX Designs',
            description: 'Mobile application wireframe and design',
            imageUrl: './images/ui design/auro.png',
            thumbnail: './images/ui design/auro.png',
            technologies: ['Figma']
        },
        {
            id: 10,
            title: 'Vibrant venture design',
            category: 'UI/UX Designs',
            description: 'Website design',
            imageUrl: './images/ui design/venture website.png',
            thumbnail: './images/ui design/venture website.png',
            technologies: ['Figma']
        }

    ]
};

// Computed properties
function getFilteredProjects() {
    return projectsData.allProjects.filter(
        project => project.category === projectsData.activeCategory
    );
}

function isDesignCategory() {
    return (
        projectsData.activeCategory === 'Graphic Designs' ||
        projectsData.activeCategory === 'UI/UX Designs'
    );
}

// Render category filter buttons
function renderCategoryFilter() {
    const filterContainer = document.getElementById('categoryFilter');
    filterContainer.innerHTML = '';

    projectsData.categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        if (category === projectsData.activeCategory) {
            button.classList.add('active');
        }
        button.textContent = category;
        button.addEventListener('click', () => {
            projectsData.activeCategory = category;
            renderCategoryFilter();
            renderProjects();
        });
        filterContainer.appendChild(button);
    });
}

// Render projects grid
function renderProjects() {
    const gridContainer = document.getElementById('projectsGrid');
    gridContainer.innerHTML = '';

    const filteredProjects = getFilteredProjects();
    const isDesign = isDesignCategory();

    // Update grid class
    if (isDesign) {
        gridContainer.classList.add('design-grid');
    } else {
        gridContainer.classList.remove('design-grid');
    }

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        if (isDesign) {
            card.classList.add('design-layout', 'design-masonry');
            if (index % 3 === 1) {
                card.classList.add('tall-card');
            }
        }

        // Thumbnail
        const thumbnail = document.createElement('div');
        thumbnail.className = 'project-thumbnail';

        const img = document.createElement('img');
        img.src = project.thumbnail;
        img.alt = project.title;
        thumbnail.appendChild(img);

        // Play overlay for videos
        if (project.videoUrl) {
            const playOverlay = document.createElement('div');
            playOverlay.className = 'play-overlay';
            const playIcon = document.createElement('div');
            playIcon.className = 'play-icon';
            playIcon.textContent = '▶';
            playOverlay.appendChild(playIcon);
            thumbnail.appendChild(playOverlay);
        }

        // Category badge
        const badge = document.createElement('span');
        badge.className = 'project-category-badge';
        badge.textContent = project.category;
        thumbnail.appendChild(badge);

        card.appendChild(thumbnail);

        // Project info (for non-design cards)
        if (!isDesign) {
            const info = document.createElement('div');
            info.className = 'project-info';

            const title = document.createElement('h3');
            title.className = 'project-title';
            title.textContent = project.title;
            info.appendChild(title);

            const description = document.createElement('p');
            description.className = 'project-description';
            description.textContent = project.description;
            info.appendChild(description);

            const techDiv = document.createElement('div');
            techDiv.className = 'project-tech';
            project.technologies.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag';
                techTag.textContent = tech;
                techDiv.appendChild(techTag);
            });
            info.appendChild(techDiv);

            card.appendChild(info);
        }

        // Design hover overlay
        if (isDesign) {
            const hover = document.createElement('div');
            hover.className = 'design-hover';

            const hoverTitle = document.createElement('h3');
            hoverTitle.textContent = project.title;
            hover.appendChild(hoverTitle);

            const hoverCategory = document.createElement('p');
            hoverCategory.textContent = project.category;
            hover.appendChild(hoverCategory);

            card.appendChild(hover);
        }

        // Click event
        card.addEventListener('click', () => openModal(project));

        gridContainer.appendChild(card);
    });
}

// Open modal
function openModal(project) {
    projectsData.selectedProject = project;
    document.body.style.overflow = 'hidden';

    const modal = document.getElementById('modalOverlay');
    modal.style.display = 'flex';

    // Render media
    const mediaContainer = document.getElementById('modalMedia');
    mediaContainer.innerHTML = '';

    if (project.videoUrl) {
        const video = document.createElement('video');
        video.controls = true;
        video.autoplay = true;
        const source = document.createElement('source');
        source.src = project.videoUrl;
        source.type = 'video/mp4';
        video.appendChild(source);
        mediaContainer.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = project.imageUrl || project.thumbnail;
        img.alt = project.title;
        mediaContainer.appendChild(img);
    }

    // Render details
    const detailsContainer = document.getElementById('modalDetails');
    detailsContainer.innerHTML = '';

    const categorySpan = document.createElement('span');
    categorySpan.className = 'modal-category';
    categorySpan.textContent = project.category;
    detailsContainer.appendChild(categorySpan);

    const title = document.createElement('h2');
    title.textContent = project.title;
    detailsContainer.appendChild(title);

    const description = document.createElement('p');
    description.textContent = project.description;
    detailsContainer.appendChild(description);

    // Technologies
    const techSection = document.createElement('div');
    techSection.className = 'modal-tech';

    const techHeading = document.createElement('h3');
    techHeading.textContent = 'Technologies Used';
    techSection.appendChild(techHeading);

    const techList = document.createElement('div');
    techList.className = 'tech-list';
    project.technologies.forEach(tech => {
        const techSpan = document.createElement('span');
        techSpan.textContent = tech;
        techList.appendChild(techSpan);
    });
    techSection.appendChild(techList);
    detailsContainer.appendChild(techSection);

    // Actions
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'modal-actions';

    if (project.liveUrl) {
        const liveLink = document.createElement('a');
        liveLink.href = project.liveUrl;
        liveLink.target = '_blank';
        liveLink.className = 'btn-live';
        liveLink.textContent = 'View Live Demo';
        actionsDiv.appendChild(liveLink);
    }

    if (project.githubUrl) {
        const githubLink = document.createElement('a');
        githubLink.href = project.githubUrl;
        githubLink.target = '_blank';
        githubLink.className = 'btn-github';
        githubLink.textContent = 'View Code';
        actionsDiv.appendChild(githubLink);
    }

    detailsContainer.appendChild(actionsDiv);
}

// Close modal
function closeModal() {
    projectsData.selectedProject = null;
    document.body.style.overflow = '';
    document.getElementById('modalOverlay').style.display = 'none';
}

// Event listeners
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') {
        closeModal();
    }
});
document.getElementById('modalContent').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Initialize
renderCategoryFilter();
renderProjects();

// Data
const servicesData = {
    services: [
        {
            id: 1,
            title: 'Web Development',
            description: 'Building responsive, scalable web applications with modern technologies',
            image: './images/services/web development.jpg'
        },
        {
            id: 2,
            title: 'Mobile Apps',
            description: 'Creating intuitive mobile experiences for iOS and Android platforms',
            image: './images/services/mobile development.jpg'
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description: 'Designing user-centered interfaces that are beautiful and functional',
            image: './images/services/UI design.jpg'
        },
        {
            id: 4,
            title: 'Graphic Design',
            description: 'Crafting visual identities and stunning graphics for brands',
            image: './images/services/graphic design.jpg'
        }
    ]
};

// Render services
function renderServices() {
    const gridContainer = document.getElementById('servicesGrid');
    gridContainer.innerHTML = '';

    servicesData.services.forEach(service => {
        // Create service card
        const card = document.createElement('div');
        card.className = 'service-card';

        // Create image
        const img = document.createElement('img');
        img.src = service.image;
        img.alt = service.title;
        img.className = 'service-image';
        card.appendChild(img);

        // Create title
        const title = document.createElement('h3');
        title.className = 'service-title';
        title.textContent = service.title;
        card.appendChild(title);

        // Create description
        const description = document.createElement('p');
        description.className = 'service-description';
        description.textContent = service.description;
        card.appendChild(description);

        // Append card to grid
        gridContainer.appendChild(card);
    });
}

// Initialize
renderServices();

// Initialize EmailJS
(function () {
    emailjs.init('wWZXjzrRdJXWvHGm9');
})();

// Data
const contactData = {
    loading: false,
    form: {
        name: '',
        email: '',
        subject: '',
        message: ''
    },
    socials: [
        { name: 'LinkedIn', url: 'https://linkedin.com/in/richard-ngabo' },
        { name: 'GitHub', url: 'https://github.com/Ricardo-Tesla' },
        { name: 'Gmail', url: 'mailto:ngarica1603@gmail.com' }
    ]
};

// Render social links
function renderSocialLinks() {
    const socialContainer = document.getElementById('socialLinks');
    socialContainer.innerHTML = '';

    contactData.socials.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.className = 'social-link';
        link.target = '_blank';
        link.textContent = social.name;
        socialContainer.appendChild(link);
    });
}

// Handle form submission
async function handleSubmit(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Set loading state
    contactData.loading = true;
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';

    try {
        const serviceID = 'service_f6an8kj';
        const templateID = 'template_xy31pdw';

        await emailjs.send(serviceID, templateID, {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message
        });

        alert('✅ Message sent successfully!');

        // Reset form
        document.getElementById('contactForm').reset();
        contactData.form = { name: '', email: '', subject: '', message: '' };

    } catch (error) {
        console.error('Email send failed:', error);
        alert('❌ Failed to send message. Please try again.');
    } finally {
        // Reset loading state
        contactData.loading = false;
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
    }
}

// Event listeners
document.getElementById('contactForm').addEventListener('submit', handleSubmit);

// Initialize
renderSocialLinks();