function NotFound(app) {
    app.use((req, res, next) => {
        res.staus(404).json({
            message: "Not Found Route"
        })
    })
}

module.exports = NotFound