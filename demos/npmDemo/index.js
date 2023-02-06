import figlet from "figlet";
const { textSync } = figlet;
console.log(figlet.textSync('Booties!', {
    font: 'Chunky',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));