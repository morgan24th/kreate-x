const data = {
    name: 'Kreate-X',
    welcome: 'Welcome to Kreate-X',
    navs: [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Services',
            href: '/services'
        },
        {
            name: 'Projects',
            href: '/projects'
        },
        {
            name: 'Connect',
            href: '/connect'
        },
    ],
    message: 'Site is under construction',
    footer: {
        rights: 'All Rights Reserved',
        date: new Date().getFullYear(),
        mail: 'Mail: kreatextral@gmail.com',
        tel: 'Tel: +233269543715'
    },
    about: {
        title: 'About'
    },
    services:{
        title: 'Services'
    },
    projects: {
        title: 'Projects'
    },
    connect: {
        title: 'Connect with Us'
    },
    photos: {
        constructionOne: '../images/construction.jpg',
        constructionTwo: '../images/cute-o.jpg'
    }
}

export default data;
