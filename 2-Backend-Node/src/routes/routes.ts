import app from ".."

app.get("/users", (req, res) => {
    res.json([{ nome: "Joao"}])
})
