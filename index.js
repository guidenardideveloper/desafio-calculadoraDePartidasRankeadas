// Calculadora de partidas Rankeadas


function rankedCalculator(victoriesPlayer, defeatsPlayer) {

    const rankedResult = victoriesPlayer - defeatsPlayer;
    let level;

    if (rankedResult < 10) {
        level = "Ferro";
    } else if (rankedResult >= 11 && rankedResult <= 20) {
        level = "Bronze";
    } else if (rankedResult >= 21 && rankedResult <= 50) {
        level = "Prata";
    } else if (rankedResult >= 51 && rankedResult <= 80) {
        level = "Ouro";
    } else if (rankedResult >= 81 && rankedResult <= 90) {
        level = "Diamante";
    } else if (rankedResult >= 91 && rankedResult <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    return `O Herói tem de saldo de ${rankedResult} vitórias e está no nível de ${level}.`;
}

rankedCalculator();