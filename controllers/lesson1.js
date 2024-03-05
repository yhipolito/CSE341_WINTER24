const tomRoute = (req, res) => {
    res.send("Tom Hipolito");
};

const maximoRoute = (req, res) => {
    res.send("Maximo Hipolito");
};

const yazelRoute = (req, res) => {
    res.send("Yazel Hipolito");
};

module.exports = {
    maximoRoute,
    yazelRoute,
    tomRoute
};

