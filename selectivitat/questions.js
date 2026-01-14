const questions = [
{
    type: "exercicis",
    category: "energia",
    text: `<br> En la defensa d’un projecte acadèmic, el tribunal que valora si el treball és apte o no apte
està format per quatre membres: president, secretari, vocal 1 i vocal 2. La decisió es pren per
majoria i, en cas d’empat, preval el vot de qualitat del president.
Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
<br>
<img src="202306P2.png" alt="Imatge relacionada amb la pregunta">
<br>
    <br><br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
    <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la.  [1 punt]
    <br><strong>c)</strong> Dibuixeu el diagrama de portes lògiques equivalent. [0,5 punts]
    <br><br>`, 
    correctAnswer: "",  
    steps: `
        <strong>a) Rendiment i potència del captador:</strong>
        <br>
        \\[
        $\eta = 0,78 - 4,2 \frac{55 - 18}{900} = 0,78 - 0,1727 = 0,6073$
        \\]
        <br>
        \\[
        $P_{cap} = \eta \cdot I \cdot S = 0,6073 \cdot 900 \cdot 2,2 = 1202 \text{ W}$
        \\]
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
des d’una altura \\(h_1 = 0{,}3\\,\\text{m}\\) fins a \\(h2 = 2\\,\\text{m}\\) en \\(t = 8\\,\\text{s}\\), a velocitat constant. Si la massa de la resta d’elements és negligible,
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
        <strong>a) Potència elèctrica mitjana:</strong>
        <br>
        \\[
        P_{mec} = m \\times \\ g \\times \\ v = \\frac{m \\times \\ g \\times \\ (h_2 - h_1)}{t}
        \\]
        \\[
        P_{mec} = \\frac{2\\,\\text{kg} \\times \\ 9,81\\,\\text{m/s^2} \\times \\ (2\\,\\text{m} - 0,3\\,\\text{m})}{8\\,\\text{s}} = 
        \\]
        \\[
        η_{mec} = \\frac{P_{mec}}{P_{elec}}
        \\]
        \\[
        P_{elec = \\frac{P_{mec}}{η_{mec}} = 
        \\]
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
        type: "exercicis",
    category: "energia",
    text: `<br>Un establiment turístic es planteja posar una estufa de pèŀlets o de gasoil per a cobrir
una demanda energètica anual Econs = 15 000 kW h. L’estufa de pèŀlets té un rendiment
ηpèl = 0,94 i la instaŀlació necessita una inversió inicial cinv_pèl = 7 000 €. Pel que fa a la installació de l’estufa de gasoil, l’estufa té un rendiment ηgas = 0,82 i la instaŀlació necessita una
inversió inicial cinv_gas = 2 000 €. En ambdós casos el cost del manteniment anual s’estima
en cmant_pèl = cmant_gas = 400 €. El poder calorífic del pèŀlet és pc_pèl = 4,8 kW h/kg i el seu preu
cpèl = 0,4 €/kg. El poder calorífic del gasoil és pc_gas = 44,8 MJ/kg, la seva densitat ρ = 0,85 kg/L
i el seu preu cgas = 1,3 €/L.
Determineu:

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
    type: "exercicis",
    category: "mecanica",
    text: `<br>La figura mostra un esquema simplificat d’una grua per a elevar caixes de fruita. 
    La barra OBC, de longitud \\(2l = 4\\,\\text{m}\\) (essent B el seu punt mitjà), es troba articulada al terra al punt O. 
    A l’extrem C s’hi pengen 3 caixes de fruita de 25 kg cadascuna (\\(m = 75\\,\\text{kg}\\)). La massa de la resta d’elements és negligible.
    <br>La barra es mou mitjançant un cilindre hidràulic de diàmetre interior \\(d_{int} = 40\\,\\text{mm}\\), que es troba articulat a P i a B. 
    Els punts O i P es troben sobre la mateixa vertical a una distància \\(l = 2\\,\\text{m}\\).
    El cilindre permet modificar la coordenada \\(φ\\), que pren valors entre \\(0^\\circ < φ < 65^\\circ\\). 
    <br><br>
    <strong>a)</strong> Dibuixeu el diagrama de cos lliure de la barra OBC. [0,5 punts]
    <br>
    <strong>b)</strong> Trobeu la relació entre les coordenades \\(φ\\) i \\(α\\). [0,5 punts]
    <br>
    <strong>c)</strong> Sabent que el cilindre hidràulic manté el sistema en equilibri i que \\(φ = 30^\\circ\\), determineu la força, \\(F_c\\), que fa el cilindre hidràulic. [1 punt]
    <br>
    <strong>d)</strong> La pressió relativa \\(p_{int}\\) a l’interior del cilindre. [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Diagrama de cos lliure:</strong>
        <br>
        - Sobre la barra actuen: la força del cilindre \\(F_c\\) en el punt B, el pes de les caixes \\(P = m \\times g\\) en el punt C, i la reacció de l'articulació \\(R_O\\) en el punt O.
        <br><br>
        <strong>b) Relació entre \\(φ\\) i \\(α\\):</strong>
        <br>
        - El triangle OPB és isòsceles, ja que \\(OP = l\\) i \\(OB = l\\).
        - Per la suma d'angles d'un triangle:
        \\[
        180^\\circ = (90^\\circ + φ) + α + α = 90^\\circ + φ + 2α
        \\]
        \\[
        2α = 90^\\circ - φ \\implies α = 45^\\circ - \\frac{φ}{2}
        \\]
        <br><strong>c) Força del cilindre \\(F_c\\) per a \\(φ = 30^\\circ\\):</strong>
        <br>
        - Primer calculem l'angle \\(α\\):
        \\[
        α = 45^\\circ - \\frac{30^\\circ}{2} = 30^\\circ
        \\]
        - Sumatòria de moments respecte a O (en equilibri):
        \\[
        \\sum M_O = 0 \\implies F_c \\times l \\times \\sin(α) - m \\times g \\times 2l \\times \\cos(φ) = 0
        \\]
        \\[
        F_c = \\frac{m \\times g \\times 2l \\times \\cos(φ)}{l \\times \\sin(α)} = \\frac{75\\,\\text{kg} \\times 9,8\\,\\text{m/s^2} \\times 2 \\times \\cos(30^\\circ)}{\\sin(30^\\circ)}
        \\]
        \\[
        F_c = \\frac{1470 \\times 0,866}{0,5} = 2546,1\\,\\text{N}
        \\]
        <br><strong>d) Pressió relativa a l'interior del cilindre:</strong>
        <br>
        - Àrea del pistó:
        \\[
        A = \\frac{π \\times d_{int}^2}{4} = \\frac{π \\times (0,04\\,\\text{m})^2}{4} = 1,2566 \\times 10^{-3}\\,\\text{m^2}
        \\]
        - Pressió:
        \\[
        p_{int} = \\frac{F_c}{A} = \\frac{2546,1\\,\\text{N}}{1,2566 \\times 10^{-3}\\,\\text{m^2}} = 2,026 \\times 10^6\\,\\text{Pa} = 2,026\\,\\text{MPa}
        \\]
        <br><br>
        <img src="ruta/a/imatgeMecanica.jpg" alt="Esquema de forces i angles">`
    `, 
},
{
    type: "exercicis",
    category: "energia",
    text: `<br>Una espremedora domèstica per a fer suc de taronja està formada per un motor elèctric de corrent continu d’imants permanents i un reductor d’engranatges, la sortida del qual fa girar la peça en forma de con que permet extreure suc de les taronges. El parell del motor és donat per l’expressió:
    <br>
    \\[ Γ_{mot} = (0,08U – 0,01ω)\\,\\text{N m} \\]
    en què \\(U = 24\\,\\text{V}\\) és la tensió d’alimentació del motor i \\(ω\\) és la seva velocitat angular (en rad/s). 
    <br>La sortida del motor està connectada a l’entrada del reductor. Aquest està format per un pinyó de \\(z_p = 9\\) dents que engrana amb una roda dentada de \\(z_r = 62\\) dents.
    <br><br>
    <strong>a)</strong> Determineu la relació de transmissió \\(τ = ω_{sortida}/ω_{entrada}\\) del reductor. [0,5 punts]
    <br>
    <strong>b)</strong> Dibuixeu, indicant les escales, la corba característica parell-velocitat del motor i determineu-ne la velocitat de gir màxima, \\(n_{màx}\\). [0,5 punts]
    <br>
    <strong>c)</strong> En règim nominal, el motor gira a \\(n_{mot} = 1000\\,\\text{min}^{-1}\\) i té un rendiment \\(η = 0,55\\). Determineu la intensitat \\(I\\) que circula pel motor. [1 punt]
    <br>
    <strong>d)</strong> La velocitat angular \\(ω_{con}\\) de la peça en forma de con que extreu el suc de les taronges. [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Relació de transmissió:</strong>
        <br>
        - La relació de transmissió en engranatges és:
        \\[
        τ = \\frac{ω_{sortida}}{ω_{entrada}} = \\frac{z_p}{z_r} = \\frac{9}{62} = 0,1452
        \\]
        <br><strong>b) Corba característica i velocitat màxima:</strong>
        <br>
        - L'equació del parell amb \\(U = 24\\,\\text{V}\\) és: \\(Γ_{mot} = 0,08(24) - 0,01ω = 1,92 - 0,01ω\\).
        - El parell d'arrencada (\\(ω = 0\\)) és \\(Γ_{arr} = 1,92\\,\\text{N m}\\).
        - La velocitat de buit o màxima (\\(Γ_{mot} = 0\\)):
        \\[
        0 = 1,92 - 0,01ω_{màx} \\implies ω_{màx} = \\frac{1,92}{0,01} = 192\\,\\text{rad/s}
        \\]
        - Convertint a min\\(^{-1}\\):
        \\[
        n_{màx} = 192\\,\\text{rad/s} \\times \\frac{60}{2π} = 1833,5\\,\\text{min}^{-1}
        \\]
        <br><strong>c) Intensitat nominal:</strong>
        <br>
        - Calculem el parell a \\(n_{mot} = 1000\\,\\text{min}^{-1}\\):
        \\[
        ω = 1000 \\times \\frac{2π}{60} = 104,72\\,\\text{rad/s}
        \\]
        \\[
        Γ_{mot} = 1,92 - (0,01 \\times 104,72) = 0,8728\\,\\text{N m}
        \\]
        - Potència útil (mecànica):
        \\[
        P_{útil} = Γ_{mot} \\times ω = 0,8728 \\times 104,72 = 91,4\\,\\text{W}
        \\]
        - Potència absorbida (elèctrica) mitjançant el rendiment:
        \\[
        P_{abs} = \\frac{P_{útil}}{η} = \\frac{91,4}{0,55} = 166,18\\,\\text{W}
        \\]
        - Intensitat:
        \\[
        I = \\frac{P_{abs}}{U} = \\frac{166,18\\,\\text{V}}{24\\,\\text{V}} = 6,92\\,\\text{A}
        \\]
        <br><strong>d) Velocitat angular del con:</strong>
        <br>
        - Utilitzant la relació de transmissió trobada a l'apartat a:
        \\[
        ω_{con} = ω_{mot} \\times τ = 104,72\\,\\text{rad/s} \\times 0,1452 = 15,2\\, \\text{rad/s}
        \\]
        <br><br>
        <img src="ruta/a/grafica_motor.jpg" alt="Gràfica parell-velocitat">`
`, 
},
    {
    type: "exercicis",
    category: "sistemes_control",
    text: `<br>Un semàfor té un circuit de control d’errors que activa una alarma si els tres llums estan apagats o si com a mínim dos estan encesos a la vegada, tret que siguin el verd i el groc.
    <br>Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents (1: encès, 0: apagat):
    <br>\\(V\\): Verd, \\(G\\): Groc, \\(R\\): Vermell. L'alarma s'activa quan \\(A = 1\\).
    <br><br>
    <strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
    <br>
    <strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
    <br>
    <strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Taula de veritat:</strong>
        <br>
        L'alarma \\(A\\) s'activa (1) si:
        1. Tots apagats: (0,0,0)
        2. Dos o més encesos: (0,1,1), (1,0,1), (1,1,1) 
        *Nota: El cas Verd i Groc (1,1,0) està exclòs segons l'enunciat.*
        <br><br>
        <table>
            <thead>
                <tr><th>V</th><th>G</th><th>R</th><th>A</th></tr>
            </thead>
            <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td>1</td></tr>
                <tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>
                <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>1</td><td>1</td><td>1</td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>0</td></tr>
                <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
            </tbody>
        </table>
        <br><strong>b) Funció lògica i simplificació:</strong>
        <br>
        - Escrivim la funció com a suma de minterms (on \\(A=1\\)):
        \\[
        A = \\bar{V}\\bar{G}\\bar{R} + \\bar{V}GR + V\\bar{G}R + VGR
        \\]
        - Simplifiquem agrupant els termes amb \\(R\\):
        \\[
        A = \\bar{V}\\bar{G}\\bar{R} + R(\\bar{V}G + V\\bar{G} + VG)
        \\]
        - Aplicant mapes de Karnaugh o identitats booleanes (\\(\\bar{V}G + V\\bar{G} + VG = V + G\\)):
        \\[
        A = \\bar{V}\\bar{G}\\bar{R} + R(V + G)
        \\]
        \\[
        A = \\bar{V}\\bar{G}\\bar{R} + RV + RG
        \\]
        <br><strong>c) Esquema de portes lògiques:</strong>
        <br>
        - Per a implementar la funció \\(A = \\bar{V}\\bar{G}\\bar{R} + RV + RG\\) necessitarem:
        1. Portes NOT per a les entrades negades.
        2. Portes AND per als productes.
        3. Una porta OR final per a la suma de productes.
        <br><br>
        <img src="ruta/a/esquema_portes_logiques.jpg" alt="Esquema de portes lògiques del circuit d'alarma">`
}
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
