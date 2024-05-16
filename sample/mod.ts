import "./style.scss";

export function wololo() {
    for (let i = 0; i < Math.random() * 100; ++i) {
        console.log("Wololo! " + (i % 2 === 0 ? "🐏" : "🐑"));
    }
}
