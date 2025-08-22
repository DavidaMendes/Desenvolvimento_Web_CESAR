var post1 = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
};
var post2 = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
};
var post3 = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
};
var post4 = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
};
var post5 = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
};
var posts = [
    post1, post2, post3, post4, post5
];
//b)
function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter(function (post) {
        return post.autor === autorInformado;
    });
}
console.log(buscarPostsPorAutor(posts, "Dobby"));
