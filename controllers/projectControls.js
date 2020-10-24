const Projects = require('../models/projects');

exports.getProjects = (req, res, next) => {
    
    Projects.find()
        .then(projects => {
            res.render('projects/projects', {
                pageTitle: "Projects",
                projects: projects
            });
        })
        
}

