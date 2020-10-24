exports.getTest = (req, res, next) => {
    res.render('pages/test')
}

exports.getProfile = (req, res, next) => {
    res.render('pages/profile', {
        pageTitle: "Profile"
    })
}

exports.getExp = (req, res, next) => {
    res.render('pages/exp', {
        pageTitle: "Experience"
    })
}

exports.getSkills = (req, res, next) => {
    res.render('pages/skills', {
        pageTitle: "Skills"
    })
}

