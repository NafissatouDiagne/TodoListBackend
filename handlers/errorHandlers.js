// Middleware pour capturer les erreurs
exports.catchErrors = (fn) => {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => {
            // Erreurs de validation
            if (typeof err === "string") {
                res.status(400).json({
                    message:"Erreur avec la validation:", err,
                });
            } else {
                next(err);
            }
        })
    }
}

// Middleware pour gérer les erreurs de validation au niveau de MongoDB
exports.mongoseErrors = (err, req, res, next) => {
    if (!err.errors) return next(err);
    const errorKeys = Object.keys(err.errors);
    let message = "";
    errorKeys.forEach((key) => (message += err.errors[key].message + ", "));
    message = message.substr(0, message.length - 2);
    res.status(400).json({
        message,
    });
};

// Middleware pour gérer les erreurs en environnement de développement
exports.developmentErrors = (err, req, res, next) => {
    err.stack = err.stack || '';
    const errorDetails = {
        message: err.message,
        status: err.status,
        stack: err.stack,
    };
    res.status(err.status || 500).json(errorDetails)
}

// Middleware pour gérer les erreurs en environnement de production
exports.productionErrors = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: "Internal Server error"
    })
}

// Middleware pour gérer les erreurs 404 (page non trouvée)
exports.notFound = (req, res, next) => {
    res.status(404).json({
        message: 'Route not found'
    })
}
