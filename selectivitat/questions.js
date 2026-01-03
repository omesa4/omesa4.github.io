const questions = [
{
    type: "exercicis",
    category: "energia",
    text: `<br><strong>Exercici 1</strong>
    <br>Volem utilitzar captadors solars de superfície $S = 2,2 \text{ m}^2$ per a produir aigua calenta en un habitatge familiar. Els captadors es complementen amb un escalfador
    elèctric per als dies en què no hi ha prou radiació solar. El rendiment energètic d’un captador solar s’obté mitjançant l’equació $\eta = \eta_0 - k_1 \frac{T_m - T_a}{I}$, en què $\eta_0$ és el rendiment òptic, $k_1$ és el coeficient de pèrdues, $T_m$ és la temperatura de treball del captador, $T_a$ és la temperatura ambient i $I$ és la irradiància solar. En una prova de funcionament s’han obtingut les dades següents: $I = 900 \text{ W/m}^2$, $T_a = 18 \text{ °C}$, $T_m = 55 \text{ °C}$, $\eta_0 = 0,78$ i $k_1 = 4,2 \text{ W/(m}^2 \cdot \text{K)}$.
    <br><br><strong>a)</strong> Determineu el rendiment $\eta$ del captador en aquestes condicions i la potència $P_{cap}$ que cada captador aporta a l’aigua. [1 punt]
    <br><strong>b)</strong> Si es volen escalfar $V = 200 \text{ L}$ d’aigua des de la temperatura ambient fins a $T_{cal} = 55 \text{ °C}$ en un temps $t = 4 \text{ h}$ amb una irradiància solar mitjana $I_{mitj} = 750 \text{ W/m}^2$ i un rendiment del captador constant $\eta = 0,55$, determineu el nombre $n$ de captadors necessari (arrodonit per defecte). [1 punt]
    <br><strong>c)</strong> Si només disposem de dos captadors de les mateixes característiques que els de l’apartat b), determineu la potència $P_{elec}$ de l’escalfador elèctric de suport necessari per a escalfar l’aigua en el mateix temps i condicions de l’apartat b). [0,5 punts]
    <br><br>`, 
    correctAnswer: "",  
    steps: `
        <strong>Solució pas a pas:</strong>
        <br><br>
        <strong>a) Rendiment i potència del captador:</strong>
        <br>
        $\eta = 0,78 - 4,2 \frac{55 - 18}{900} = 0,78 - 0,1727 = 0,6073$
        <br>
        $P_{cap} = \eta \cdot I \cdot S = 0,6073 \cdot 900 \cdot 2,2 = 1202 \text{ W}$
        <br><br>
        // PARTE 3 de 3
        <strong>b) Nombre de captadors:</strong>
        <br>
        Energia necessària: $Q = m \cdot c_e \cdot (T_{cal} - T_a) = 200 \cdot 4180 \cdot (55 - 18) = 30,93 \text{ MJ}$
        <br>
        Energia per captador: $Q_{cap} = \eta \cdot I_{mitj} \cdot S \cdot t = 0,55 \cdot 750 \cdot 2,2 \cdot (4 \cdot 3600) = 13,07 \text{ MJ}$
        <br>
        $n = \frac{Q}{Q_{cap}} = \frac{30,93}{13,07} = 2,36 \rightarrow$ <strong>2 captadors</strong> (per defecte).
        <br><br>
        <strong>c) Potència de l'escalfador elèctric:</strong>
        <br>
        Energia total aportada pels 2 captadors: $Q_{2cap} = 2 \cdot 13,07 = 26,14 \text{ MJ}$
        <br>
        Energia que falta (elèctrica): $Q_{elec} = Q - Q_{2cap} = 30,93 - 26,14 = 4,79 \text{ MJ}$
        <br>
        $P_{elec} = \frac{Q_{elec}}{t} = \frac{4,79 \cdot 10^6}{4 \cdot 3600} = 332,6 \text{ W}$
    `, 
},
];
.botó-solució {
    background-color: #bc13fe; /* Morado base */
    color: #fff;
    border: 2px solid #2cfc03; /* Borde verde neón */
    box-shadow: 0 0 10px #bc13fe, 0 0 20px #2cfc03; /* Resplandor neón */
    transition: 0.3s;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
}

.botó-solució:hover {
    background-color: #2cfc03;
    color: #000;
    box-shadow: 0 0 20px #2cfc03, 0 0 40px #bc13fe;
}
*/
               
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `Un rentaplats ha consumit \\(0{,}9 \\, \\text{kWh}\\) d’energia elèctrica per a escalfar \\(11 \\, \\text{L}\\) d’aigua des d’una temperatura ambient \\(T_{amb} = 10 \\, ^\\circ \\text{C}\\) a una temperatura \\(T = 70 \\, ^\\circ \\text{C}\\). La calor específica de l’aigua és \\(c_e = 4{,}18 \\, \\frac{\\text{J}}{\\text{g} \\cdot ^\\circ \\text{C}}\\). El rendiment del rentaplats és:`,
        options: [
            { text: "11,74 %", value: "a" },
            { text: "27,59 %", value: "b" },
            { text: "76,63 %", value: "c" },
            { text: "85,15 %", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            m = 11 \\, \\text{L} \\times 1000 \\, \\text{g/L} = 11000 \\, \\text{g}
            \\]
            \\[
            \\Delta T = 70 \\, ^\\circ \\text{C} - 10 \\, ^\\circ \\text{C} = 60 \\, ^\\circ \\text{C}
            \\]
            \\[
            Q = m \\times c_e \\times \\Delta T
            \\]
            \\[
            Q = 11000 \\, \\text{g} \\times 4{,}18 \\, \\frac{\\text{J}}{\\text{g} \\cdot ^\\circ \\text{C}} \\times 60 \\, ^\\circ \\text{C}
            \\]
            \\[
            Q = 11000 \\times 4{,}18 \\times 60 = 2{,}7588 \\times 10^6 \\, \\text{J}
            \\]
            \\[
            W = 0{,}9 \\, \\text{kWh} \\times 3600000 \\, \\text{J/kWh} = 3240000 \\, \\text{J}
            \\]
            \\[
            \\eta = \\frac{Q}{W} \\times 100
            \\]
            \\[
            \\eta = \\frac{2{,}7588 \\times 10^6}{3{,}24 \\times 10^6} \\times 100 = 85{,}15 \\, \\%
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Una família que anualment generava 525 kg d’envasos, en un any ha aconseguit reduir aquesta quantitat un 60 %. Quina reducció en emissions de GEH ha obtingut respecte a l’any anterior, tenint en compte que el factor d’emissió dels envasos és de 120,09 g CO2eq/kg residu?`,
        options: [
            { text: "25,22 kg CO2eq", value: "a" },
            { text: "37,83 kg CO2eq", value: "b" },
            { text: "63,05 kg CO2eq", value: "c" },
            { text: "88,27 kg CO2eq", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{Quantitat inicial d’envasos} = 525 \\, \\text{kg}
            \\]
            \\[
            \\text{Percentatge de reducció} = 60\\%
            \\]
            \\[
            \\text{Quantitat reduïda} = 525 \\, \\text{kg} \\times 0{,}60 = 315 \\, \\text{kg}
            \\]
            \\[
            \\text{Quantitat de residu restant} = 525 \\, \\text{kg} - 315 \\, \\text{kg} = 210 \\, \\text{kg}
            \\]
            \\[
            \\text{Emissions inicials} = 525 \, \\text{kg} \\times 120{,}09 \, \\text{g CO2eq/kg}
            \\]
            \\[
            \\text{Emissions inicials} = 63047,25 \, \\text{g CO2eq}
            \\]
            \\[
            \\text{Emissions inicials} = 63{,}05 \, \\text{kg CO2eq}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 210 \, \\text{kg} \\times 120{,}09 \, \\text{g CO2eq/kg}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 25218{,}9 \, \\text{g CO2eq}
            \\]
            \\[
            \\text{Emissions després de la reducció} = 25{,}22 \, \\text{kg CO2eq}
            \\]
            \\[
            \\text{Reducció en emissions} = 63{,}05 \, \\text{kg CO2eq} - 25{,}22 \, \\text{kg CO2eq} = 37{,}83 \, \\text{kg CO2eq}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    }
];
window.questions = questions;

