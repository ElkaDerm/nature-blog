const router = require("express").Router({ mergeParams: true });
const authentService = require("../service/authentService.js");
const { AUTH_TOKEN_NAME } = require("../constans.js");
const { isGuest } = require("../midlleware/gards.js");

async function registerForm(req, res) {
  const { nameFirst, nameSecond, email, password, repeatPassword } = req.body;

  if (!nameFirst || !nameSecond || !email || !password || !repeatPassword) {
    res.locals.error = "All fields are required!";
    return res.render("register");
  }

  if (password !== repeatPassword) {
    res.locals.error = "Passwords don't match!";
    return res.render("register");
  }
  const newUser = { nameFirst, nameSecond, email, password };

  try {
    await authentService.register(newUser);

    let token = await authentService.login(email, password);

    res.cookie(AUTH_TOKEN_NAME, token, { httpOnly: true });

    res.redirect("/");
  } catch (err) {
    res.locals.error = err.message;
    res.render("register", { error: err.message });
  }
}

router.get("/register", isGuest, (req, res) => {
  res.render("register");
});
router.post("/register",isGuest, registerForm);

module.exports = router;
