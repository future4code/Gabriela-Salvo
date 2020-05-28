const posts = [
    {
        autor: "Alexia",
        texto: "Watering my plants in Animal Crossing!"
    }, {
        autor: "Gabi",
        texto: "Watering my plants in Animal Crossing!"
    },
    {
        autor: "Diana",
        texto: "Watering my plants in Animal Crossing!"
    },
    {
        autor: "Erika",
        texto: "Watering my plants in Animal Crossing!"
    }
];
function autorEscolhido(post, autorEscolhido) {
    return posts.filter((cadaPost) => cadaPost.autor === autorEscolhido);
}
console.log(autorEscolhido(posts, "Diana"));
//# sourceMappingURL=pratice3.js.map