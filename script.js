const zodiac = document.getElementById("zodiac");

const body = document.body;
// body.style.backgroundColor="red";

const changeBackground = () => {
    switch (zodiac.value) {
        case "Aries":
            body.style.backgroundColor = "yellow";
            break;
        case "Taurus":
            body.style.backgroundColor = "#FF5733";
            break;
        case "Gemini":
            body.style.backgroundColor = "#8E24AA";
            break;
        case "Cancer":
            body.style.backgroundColor = "#4A148C";
            break;
        case "Leo":
            body.style.backgroundColor = "#EA80FC";
            break;
        case "Virgo":
            body.style.backgroundColor = "#AA00FF";
            break;
        case "Libra":
            body.style.backgroundColor = "#EDE7F6";
            break;
        case "Scorpio":
            body.style.backgroundColor = "#D1C4E9";
            break;
        case "Sagittariusrgo":
            body.style.backgroundColor = "#5E35B1";
            break;
        case "Aquarius":
            body.style.backgroundColor = "#B388FF";
            break;
        case "Capricorn":
            body.style.backgroundColor = "#5E35B1";
            break;
        case "Pisces":
            body.style.backgroundColor = "#AA00FF";
            break;

        default:
            break;
    }
};