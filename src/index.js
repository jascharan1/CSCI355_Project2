const express = require("express");
const path = require("path");
const mongoose = require("mongoose"); // Import mongoose
const app = express();
const { bottles } = require("./bottleData");
const session = require('express-session');
const bcrypt = require('bcryptjs');
const generateHmPage = require("./hm");
const generateProductsPage = require("./products");
const generateHowCanImprove = require("./HowCanImprove");
const generateLoginPage = require("./login");
const generateFqaPage = require("./fqa");
const generatewinePage = require("./wine");
const generateRumPage = require("./rum");
const generateScotchPage = require("./scotch");
const generateWhiskeyPage = require("./Whiskey");
const generateVodkaPage = require("./vodka");
const generateGinPage = require("./gin");
const LogInCollection = require("./mongo");

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const tempelatePath = path.join(__dirname, '../tempelates');
const publicPath = path.join(__dirname, '../public');
console.log(publicPath);

app.set('view engine', 'hbs');
app.set('views', tempelatePath);
app.use(express.static(publicPath));

// Set mongoose strictQuery option
mongoose.set('strictQuery', true); // or false, depending on your preference

// Connect to MongoDB
mongoose.connect('your_mongoDB_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(session({
    secret: 'secret', 
    resave: false,
    saveUninitialized: true
}));

// for Authentication
const requireAuth = (req, res, next) => {
    if (req.session && req.session.userId) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
};

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/', (req, res) => {
    res.send(generateLoginPage());
});

app.get('/hm', (req, res) => {
    res.send(generateHmPage());
});

app.get('/products', (req, res) => {
    res.send(generateProductsPage());
});

app.get('/HowCanImprove', (req, res) => {
    res.send(generateHowCanImprove());
});

app.get("/login", (req, res) => {
    if (req.session && req.session.userId) {
        return res.redirect("/hm");
    }
    res.send(generateLoginPage());
});

app.get('/fqa', (req, res) => {
    res.send(generateFqaPage());
});

app.get('/wine', (req, res) => {
    res.send(generatewinePage());
});

app.get('/rum', (req, res) => {
    res.send(generateRumPage());
});

app.get('/scotch', (req, res) => {
    res.send(generateScotchPage());
});

app.get('/Whiskey', (req, res) => {
    res.send(generateWhiskeyPage());
});

app.get('/vodka', (req, res) => {
    res.send(generateVodkaPage());
});

app.get('/gin', (req, res) => {
    res.send(generateGinPage());
});

app.get('/home', (req, res) => {
    const username = req.query.username;
    res.render('home', { username: username });
});

app.get('/search/:id', (req, res) => {
    const { id } = req.params;
    const bottle = bottles.find(bottles => bottles.id === parseInt(id));
    if (!bottle) {
        res.status(404).send("T-shirt not found");
    } else {
        res.status(200).send(bottle);
    }
});

app.post('/search/create', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).send("Name and price are required");
    }

    const id = bottles.length > 0 ? bottles[bottles.length - 1].id + 1 : 1;

    const newBottle = { id, name, price };

    bottles.push(newBottle);
    console.log("Current T-shirts:", bottles);

    res.status(201).send(newBottle);
});

app.post('/signup', async (req, res) => {
    const { name, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const checking = await LogInCollection.findOne({ name });

    try {
        if (checking) {
            return res.send("User details already exist");
        } else {
            await LogInCollection.insertMany([{ name, password: hashedPassword }]);
            req.session.userId = name;
            res.redirect(`/hm?username=${name}`);
        }
    } catch (err) {
        return res.status(500).send("An error occurred");
    }
});

app.post("/login", async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await LogInCollection.findOne({ name });

        if (user && (await bcrypt.compare(password, user.password))) {
            req.session.userId = user._id;
            res.redirect(`/hm?username=${name}`);
        } else {
            res.send("Incorrect username or password");
        }
    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Error occurred during logout");
        }
        res.redirect("/login");
    });
});

app.listen(port, () => {
    console.log('port connected');
});
