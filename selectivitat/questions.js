const questions = [
{
    type: "exercicis",
    category: "energia",
    text: `<br> En la defensa d’un projecte acadèmic, el tribunal que valora si el treball és apte o no apte
està format per quatre membres: president, secretari, vocal 1 i vocal 2. La decisió es pren per
majoria i, en cas d’empat, preval el vot de qualitat del president.
Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
<br>
<img src="#" alt="Imatge relacionada amb la pregunta">
<br>
    <br><br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
    <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la.  [1 punt]
    <br><strong>c)</strong> Dibuixeu el diagrama de portes lògiques equivalent. [0,5 punts]
    <br><br>`, 
    correctAnswer: "",  
    steps: `
        <strong>a) Rendiment i potència del captador:</strong>
        <br>
        $\eta = 0,78 - 4,2 \frac{55 - 18}{900} = 0,78 - 0,1727 = 0,6073$
        <br>
        $P_{cap} = \eta \cdot I \cdot S = 0,6073 \cdot 900 \cdot 2,2 = 1202 \text{ W}$
        <br><br>
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
        <br>
    `, 
},

    {
    type: "exercicis",
    category: "energia",
    text: `<br>Una pantalla de projecció té una massa m = 2 kg a la
part inferior per a mantenir-la sempre tibada. Un motor
reductor de rendiment ηmot = 0,9 és l’encarregat de recollir
la pantalla en el corró de diàmetre d = 250 mm, que es troba
articulat amb el sostre al punt P.
El punt inferior de la pantalla es desplaça verticalment
des d’una altura \\(h_1 = 0{,}3\\,\\text{m}\\) fins a h2 = 2 m en t = 8 s, a velocitat constant. Si la massa de la resta d’elements és negligible,
determineu:

<img src="#" alt="Imatge relacionada amb la pregunta">

    <br><br><strong>a)</strong> La potència elèctrica mitjana \\(P_{elèctr}\\) consumida pel motor reductor. [1 punt]
    <br><strong>b)</strong> La velocitat angular de l’eix de sortida del motor reductor \\(ω_{mot}\\) i el parell aplicat per aquest al tambor \\(Γ_{mot}\\).  [1 punt]
    <br><strong>c)</strong> L’increment percentual, \\(Inc\\), de la potència elèctrica si es volgués fer pujar la pantalla
amb la meitat del temps. [0,5 punts]
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
