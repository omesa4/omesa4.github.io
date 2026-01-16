const questions = [
{
    type: "exercicis",
    category: "control",
    text: `<br>En la defensa d’un projecte acadèmic, el tribunal que valora si el treball és apte o no apte
    està format per quatre membres: president, secretari, vocal 1 i vocal 2.
    La decisió es pren per majoria i, en cas d’empat, preval el vot de qualitat del president.
    <br><br>
    Es defineixen les variables d’estat següents:
    <br>
    <img src= "202306S1E2.png">
    <br>
    <strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
    <br>
    <img src= "202306S1E2a.png">
    <br>
    <strong>b)</strong> Determineu la funció lògica del sistema i simplifiqueu-la, si escau. [1 punt]
    <br>
    <strong>c)</strong> Dibuixeu el diagrama de portes lògiques equivalent. [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Taula de veritat:</strong>
        <br>
        <table border="1" cellpadding="4" cellspacing="0">
            <tr>
                <th>v₁</th><th>v₂</th><th>s</th><th>p</th><th>d</th>
            </tr>
            <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
            <tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
            <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
            <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
        </table>
        <br><br>

        <strong>b) Funció lògica simplificada:</strong>
        <br>
        - El treball és apte quan hi ha almenys tres vots favorables o bé quan hi ha empat i el president vota a favor.
        <br>
        \\[
        d = v_1 v_2 s + v_1 v_2 p + v_1 s p + v_2 s p
        \\]
        <br><br>

        <strong>c) Diagrama de portes lògiques:</strong>
        <br>
        - Quatre portes AND de tres entrades corresponents als productes lògics.
        <br>
        - Una porta OR que agrupa totes les sortides AND i proporciona la sortida \\(d\\).
        <br><br>

        <img src="">
    `,
},
{
    type: "exercicis",
    category: "maquines",
    text: `<br>Una pantalla de projecció té una massa \\(m = 2\\,\\text{kg}\\) a la part inferior per a mantenir-la sempre tibada.
    Un motor reductor de rendiment \\(\\eta_{mot} = 0,9\\) és l’encarregat de recollir la pantalla en un corró
    de diàmetre \\(d = 250\\,\\text{mm}\\), que es troba articulat amb el sostre al punt P.
    <br>
    El punt inferior de la pantalla es desplaça verticalment des d’una altura
    \\(h_1 = 0,3\\,\\text{m}\\) fins a \\(h_2 = 2\\,\\text{m}\\) en un temps \\(t = 8\\,\\text{s}\\), a velocitat constant.
    Si la massa de la resta d’elements és negligible, determineu:
    <img src="202306S1E3.png">
    <br><br>
    <strong>a)</strong> La potència elèctrica mitjana \\(P_{elèctr}\\) consumida pel motor reductor. [1 punt]
    <br>
    <strong>b)</strong> La velocitat angular de l’eix de sortida del motor reductor \\(\\omega_{mot}\\) i el parell aplicat al tambor \\(\\Gamma_{mot}\\). [1 punt]
    <br>
    <strong>c)</strong> L’increment percentual, \\(Inc\\), de la potència elèctrica si la pantalla pugés en la meitat de temps. [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Potència elèctrica mitjana:</strong>
        <br>
        - Desplaçament vertical:
        \\[
        \\Delta h = h_2 - h_1 = 2 - 0,3 = 1,7\\,\\text{m}
        \\]
        - Treball mecànic:
        \\[
        W = m \\cdot g \\cdot \\Delta h = 2 \\cdot 9,8 \\cdot 1,7 = 33,32\\,\\text{J}
        \\]
        - Potència mecànica:
        \\[
        P_{mec} = \\frac{W}{t} = \\frac{33,32}{8} = 4,17\\,\\text{W}
        \\]
        - Potència elèctrica:
        \\[
        P_{elèctr} = \\frac{P_{mec}}{\\eta_{mot}} = \\frac{4,17}{0,9} = 4,63\\,\\text{W}
        \\]
        <br><br>

        <strong>b) Velocitat angular i parell:</strong>
        <br>
        - Velocitat lineal:
        \\[
        v = \\frac{\\Delta h}{t} = \\frac{1,7}{8} = 0,2125\\,\\text{m/s}
        \\]
        - Radi del corró:
        \\[
        r = \\frac{d}{2} = 0,125\\,\\text{m}
        \\]
        - Velocitat angular:
        \\[
        \\omega_{mot} = \\frac{v}{r} = \\frac{0,2125}{0,125} = 1,7\\,\\text{rad/s}
        \\]
        - Força aplicada:
        \\[
        F = m \\cdot g = 19,6\\,\\text{N}
        \\]
        - Parell:
        \\[
        \\Gamma_{mot} = F \\cdot r = 19,6 \\cdot 0,125 = 2,45\\,\\text{N·m}
        \\]
        <br><br>

        <strong>c) Increment percentual de potència:</strong>
        <br>
        - Si el temps es redueix a la meitat, la potència es duplica.
        \\[
        Inc = 100\\,\\%
        \\]
        <br><br>

        <img src="ruta/a/pantallaMotor.jpg" alt="Esquema del motor i la pantalla">
    `,
},

{
    type: "exercicis",
    category: "pneumatica",
    text: `<br> <img src= "202306S1E5.png"> 
    <br> La figura mostra un esquema simplificat d’una grua per a elevar caixes de fruita. 
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
        <img src="ruta/a/imatgeMecanica.jpg" alt="Esquema de forces i angles">
    `, 
},
    {
    type: "exercicis",
    category: "energia",
    text: `<br>Un establiment turístic es planteja instal·lar una estufa de pellets o una de gasoil per a cobrir
    una demanda energètica anual \\(E_{cons} = 15\\,000\\,\\text{kW·h}\\).
    <br><br>
    Estufa de pellets:
    <br>
    \\(\\eta_{pel} = 0,94\\), \\(c_{inv,pel} = 7\\,000\\,\\text{€}\\), \\(c_{mant,pel} = 400\\,\\text{€}\\),
    \\(pc_{pel} = 4,8\\,\\text{kW·h/kg}\\), \\(c_{pel} = 0,4\\,\\text{€/kg}\\)
    <br><br>
    Estufa de gasoil:
    <br>
    \\(\\eta_{gas} = 0,82\\), \\(c_{inv,gas} = 2\\,000\\,\\text{€}\\), \\(c_{mant,gas} = 400\\,\\text{€}\\),
    \\(pc_{gas} = 44,8\\,\\text{MJ/kg}\\), \\(\\rho = 0,85\\,\\text{kg/L}\\),
    \\(c_{gas} = 1,3\\,\\text{€/L}\\)
    <br><br>
    Determineu:
    <br>
    <strong>a)</strong> El cost energètic \\(c_{e,pel}\\) i \\(c_{e,gas}\\). [1 punt]
    <br>
    <strong>b)</strong> La massa anual de pellets necessària \\(m_{pel}\\). [0,5 punts]
    <br>
    <strong>c)</strong> El volum anual de gasoil necessari \\(V_{gas}\\). [0,5 punts]
    <br>
    <strong>d)</strong> El temps necessari perquè el cost total de les dues instal·lacions s’iguali. [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Cost energètic:</strong>
        <br>
        - Pellets:
        \\[
        c_{e,pel} = \\frac{c_{pel}}{pc_{pel} \\cdot \\eta_{pel}}
        = \\frac{0,4}{4,8 \\cdot 0,94}
        = 0,0886\\,\\text{€/kW·h}
        \\]
        - Gasoil:
        \\[
        pc_{gas} = \\frac{44,8}{3,6} = 12,44\\,\\text{kW·h/kg}
        \\]
        \\[
        c_{e,gas} = \\frac{1,3}{12,44 \\cdot 0,85 \\cdot 0,82}
        = 0,150\\,\\text{€/kW·h}
        \\]
        <br><br>

        <strong>b) Massa anual de pellets:</strong>
        \\[
        m_{pel} = \\frac{E_{cons}}{pc_{pel} \\cdot \\eta_{pel}}
        = \\frac{15\\,000}{4,8 \\cdot 0,94}
        = 3324\\,\\text{kg}
        \\]
        <br><br>

        <strong>c) Volum anual de gasoil:</strong>
        \\[
        m_{gas} = \\frac{15\\,000}{12,44 \\cdot 0,82}
        = 1465\\,\\text{kg}
        \\]
        \\[
        V_{gas} = \\frac{m_{gas}}{\\rho}
        = \\frac{1465}{0,85}
        = 1723\\,\\text{L}
        \\]
        <br><br>

        <strong>d) Temps d’amortització:</strong>
        <br>
        - Cost anual:
        \\[
        C_{pel} = 15\\,000 \\cdot 0,0886 + 400 = 1729\\,\\text{€}
        \\]
        \\[
        C_{gas} = 15\\,000 \\cdot 0,150 + 400 = 2650\\,\\text{€}
        \\]
        - Diferència d’inversió:
        \\[
        \\Delta C_{inv} = 7\\,000 - 2\\,000 = 5\\,000\\,\\text{€}
        \\]
        \\[
        t = \\frac{5\\,000}{2650 - 1729} = 5,4\\,\\text{anys}
        \\]
        <br><br>

        <img src="ruta/a/comparacioEnergia.jpg" alt="Comparació estufa de pellets i gasoil">
    `,
},


{
    type: "exercicis",
    category: "motors",
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
        <img src="ruta/a/grafica_motor.jpg" alt="Gràfica parell-velocitat">
`, 
},
    {
    type: "exercicis",
    category: "control",
    text: `<br>Un semàfor té un circuit de control d’errors que activa una alarma si els tres llums estan apagats o si com a mínim dos estan encesos a la vegada, tret que siguin el verd i el groc.
    <br>Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
    <img src= "202306S5E2.png">
    <br><br>
    <strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
    <br>
    <img src= "202306S5E2a.png">
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
        <img src="ruta/a/esquema_portes_logiques.jpg" alt="Esquema de portes lògiques del circuit d'alarma">
`, 
},
{
    type: "exercicis",
    category: "energia",
    text: `<br>Es volen instal·lar petits aerogeneradors en una zona rural per a donar subministrament a una casa aïllada amb una demanda anual de \\(E_{casa} = 500\\,\\text{kW h}\\). En aquests aerogeneradors, el rotor es connecta directament al generador elèctric sense necessitat d’un multiplicador. 
    <br>El rendiment del generador és \\(η_{gen} = 1/3\\). S’obté energia 14 hores al dia durant 250 dies l’any. Les gràfiques mostren la potència elèctrica generada \\(P_{útil}\\) en funció de la velocitat del vent \\(v\\) i la potència a l’eix del rotor \\(P_{rotor}\\) en funció de la velocitat de gir \\(n\\) de les pales.
    <br>
    <img src= "202306S5E3.png">
    <br>
    <br>S’estima que la velocitat del vent al punt d’instal·lació és de \\(v = 4\\,\\text{m/s}\\). Determineu:
    <br><br>
    <strong>a)</strong> La potència a l’eix del rotor \\(P_{rotor}\\). [0,5 punts]
    <br>
    <strong>b)</strong> La velocitat angular de les pales \\(ω\\) i el parell a l’eix del rotor \\(Γ\\). [1 punt]
    <br>
    <strong>c)</strong> L’energia anual que subministra un aerogenerador \\(E_{subm}\\). [0,5 punts]
    <br>
    <strong>d)</strong> La quantitat \\(q\\) d’aerogeneradors que caldria instal·lar per a donar servei a l’habitatge. [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) La potència a l'eix del rotor:</strong>
        <br>
        - A partir de la primera gràfica, per a una velocitat de vent \\(v = 4\\,\\text{m/s}\\), la potència útil és \\(P_{útil} = 0,2\\,\\text{W}\\).
        - Aplicant el rendiment del generador:
        \\[
        P_{rotor} = \\frac{P_{útil}}{η_{gen}} = \\frac{0,2\\,\\text{W}}{1/3} = 0,6\\,\\text{W}
        \\]
        <br><strong>b) Velocitat angular i parell:</strong>
        <br>
        - Utilitzant la segona gràfica per a \\(P_{rotor} = 0,6\\,\\text{W}\\), obtenim una velocitat de gir \\(n = 300\\,\\text{min}^{-1}\\).
        - Calculem la velocitat angular:
        \\[
        ω = 300\\,\\text{min}^{-1} \\times \\frac{2π}{60} = 31,42\\,\\text{rad/s}
        \\]
        - El parell a l'eix es calcula com:
        \\[
        Γ = \\frac{P_{rotor}}{ω} = \\frac{0,6\\,\\text{W}}{31,42\\,\\text{rad/s}} = 0,0191\\,\\text{N m}
        \\]
        <br><strong>c) Energia anual subministrada per un aerogenerador:</strong>
        <br>
        - Calculem el temps de funcionament anual:
        \\[
        t = 250\\,\\text{dies/any} \\times 14\\,\\text{h/dia} = 3500\\,\\text{h/any}
        \\]
        - L'energia anual és:
        \\[
        E_{subm} = P_{útil} \\times t = 0,2\\,\\text{W} \\times 3500\\,\\text{h} = 700\\,\\text{Wh} = 0,7\\,\\text{kWh}
        \\]
        <br><strong>d) Quantitat d'aerogeneradors:</strong>
        <br>
        - Dividim la demanda total de la casa per l'energia que dona cada unitat:
        \\[
        q = \\frac{E_{casa}}{E_{subm}} = \\frac{500\\,\\text{kWh}}{0,7\\,\\text{kWh/u}} = 714,28
        \\]
        - Caldria instal·lar \\(q = 715\\) aerogeneradors.
        <br><br>
        <img src="ruta/a/grafiques_eolica.jpg" alt="Gràfiques de potència i velocitat">
`, 
},
    {
    type: "exercicis",
    category: "energia",
    text: `<br>Una planta escalfa aigua utilitzant diàriament \\(m_b = 40\\,\\text{tones}\\) de biomassa amb un poder calorífic \\(p_c = 4\\,\\text{kW h/kg}\\), i produeix \\(E_{útil} = 345,6 \\times 10^9\\,\\text{J}\\). La instal·lació eleva la temperatura de l’aigua \\(ΔT = 40\\,^\circ\\text{C}\\). La calor específica de l’aigua és \\(c_e = 4,18\\,\\text{J/(g K)}\\). Determineu:
    <br><br>
    <strong>a)</strong> El rendiment de la planta \\(η\\). [1 punt]
    <br>
    <strong>b)</strong> La quantitat d’aigua \\(m_a\\) escalfada cada dia. [0,5 punts]
    <br>
    <strong>c)</strong> El cabal mitjà diari \\(q\\) d’aigua calenta produït. [1 punt]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) El rendiment de la planta:</strong>
        <br>
        - Primer calculem l'energia total de la biomassa (energia consumida) en Joules:
        \\[
        E_{cons} = m_b \\times p_c = 40000\\,\\text{kg} \\times 4\\,\\text{kWh/kg} = 160000\\,\\text{kWh}
        \\]
        \\[
        E_{cons} = 160000\\,\\text{kWh} \\times \\frac{3,6 \\times 10^6\\,\\text{J}}{1\\,\\text{kWh}} = 576 \\times 10^9\\,\\text{J}
        \\]
        - El rendiment és la relació entre l'energia útil i la consumida:
        \\[
        η = \\frac{E_{útil}}{E_{cons}} = \\frac{345,6 \\times 10^9\\,\\text{J}}{576 \\times 10^9\\,\\text{J}} = 0,6
        \\]
        - El rendiment és del 60%.
        <br><br>
        <strong>b) La quantitat d'aigua escalfada:</strong>
        <br>
        - Utilitzem la fórmula de la calorimetria (\\(Q = m \\times c_e \\times ΔT\\)):
        \\[
        m_a = \\frac{E_{útil}}{c_e \\times ΔT} = \\frac{345,6 \\times 10^9\\,\\text{J}}{4180\\,\\text{J/(kg K)} \\times 40\\,^\circ\\text{C}}
        \\]
        \\[
        m_a = 2,067 \\times 10^6\\,\\text{kg} = 2067\\,\\text{tones}
        \\]
        <br><strong>c) El cabal mitjà diari d'aigua:</strong>
        <br>
        - El cabal és el volum (o massa, si considerem densitat de l'aigua \\(1\\,\\text{kg/L}\\)) per unitat de temps. Un dia té \\(24\\,\\text{h}\\):
        \\[
        q = \\frac{m_a}{t} = \\frac{2067\\,\\text{m^3}}{24\\,\\text{h}} = 86,125\\,\\text{m^3/h}
        \\]
        - En unitats del SI (m\\(^3\\)/s):
        \\[
        q = \\frac{2067000\\,\\text{kg}}{24 \\times 3600\\,\\text{s}} = 23,92\\,\\text{kg/s} \\approx 23,92\\,\\text{L/s}
        \\]
        <br><br>
        <img src="ruta/a/esquema_planta_termica.jpg" alt="Esquema d'una planta de biomassa">`, 
},
  {
    type: "exercicis",
    category: "energia",
    text: `<br>Un habitatge disposa d’una caldera alimentada amb gasoil que utilitza \\(V_{gasoil} = 1000\\,\\text{L}\\) de gasoil anuals per a subministrar aigua calenta sanitària i aigua per al circuit de calefacció. El rendiment de la caldera és \\(η_{gasoil} = 0,89\\), el poder calorífic del gasoil és \\(p_{c,gasoil} = 44,8\\,\\text{MJ/kg}\\) i la seva densitat és \\(ρ_{gasoil} = 0,85\\,\\text{kg/L}\\). S’estima que el factor d’emissions del gasoil \\(FE_{gasoil}\\) és de \\(2,79\\,\\text{kg}\\) de \\(CO_2\\) per litre de combustible.
    <br>Per tal de reduir les emissions de \\(CO_2\\), els propietaris es plantegen canviar aquesta caldera per una de gas natural que subministri la mateixa energia. El rendiment de la nova caldera és \\(η_{GN} = 0,94\\) i el poder calorífic del gas natural és \\(p_{c,GN} = 11,7\\,\\text{kWh/m^3}\\). S’estima que el factor d’emissions d’aquest combustible és \\(FE_{GN} = 0,203\\,\\text{kgCO}_2\\text{/(kWh)}\\). Determineu:
    <br><br>
    <strong>a)</strong> L’energia anual subministrada per la caldera de gasoil \\(E_{subm}\\). [0,5 punts]
    <br>
    <strong>b)</strong> L’energia anual que consumiria la caldera de gas natural \\(E_{cons,GN}\\) i el volum d’aquest combustible \\(V_{GN}\\). [1 punt]
    <br>
    <strong>c)</strong> La reducció anual d’emissions de diòxid de carboni \\(Δm_{CO2}\\). [1 punt]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Energia anual subministrada per la caldera de gasoil:</strong>
        <br>
        - Primer calculem la massa de gasoil i l'energia consumida (entrada):
        \\[
        m_{gasoil} = V_{gasoil} \\times ρ_{gasoil} = 1000\\,\\text{L} \\times 0,85\\,\\text{kg/L} = 850\\,\\text{kg}
        \\]
        \\[
        E_{cons,gasoil} = m_{gasoil} \\times p_{c,gasoil} = 850\\,\\text{kg} \\times 44,8\\,\\text{MJ/kg} = 38080\\,\\text{MJ}
        \\]
        - L'energia subministrada (útil) és:
        \\[
        E_{subm} = E_{cons,gasoil} \\times η_{gasoil} = 38080\\,\\text{MJ} \\times 0,89 = 33891,2\\,\\text{MJ}
        \\]
        <br><strong>b) Energia consumida i volum de gas natural:</strong>
        <br>
        - La caldera de gas natural ha de subministrar la mateixa energia útil (\\(E_{subm}\\)):
        \\[
        E_{cons,GN} = \\frac{E_{subm}}{η_{GN}} = \\frac{33891,2\\,\\text{MJ}}{0,94} = 36054,47\\,\\text{MJ}
        \\]
        - Convertim l'energia consumida a kWh per a utilitzar el poder calorífic del GN:
        \\[
        E_{cons,GN(kWh)} = 36054,47\\,\\text{MJ} \\times \\frac{1\\,\\text{kWh}}{3,6\\,\\text{MJ}} = 10015,13\\,\\text{kWh}
        \\]
        - Calculem el volum de gas natural:
        \\[
        V_{GN} = \\frac{E_{cons,GN(kWh)}}{p_{c,GN}} = \\frac{10015,13\\,\\text{kWh}}{11,7\\,\\text{kWh/m^3}} = 856\\,\\text{m^3}
        \\]
        <br><strong>c) Reducció anual d'emissions de \\(CO_2\\):</strong>
        <br>
        - Emissions del gasoil:
        \\[
        m_{CO2,gasoil} = V_{gasoil} \\times FE_{gasoil} = 1000\\,\\text{L} \\times 2,79\\,\\text{kg/L} = 2790\\,\\text{kg}
        \\]
        - Emissions del gas natural:
        \\[
        m_{CO2,GN} = E_{cons,GN(kWh)} \\times FE_{GN} = 10015,13\\,\\text{kWh} \\times 0,203\\,\\text{kg/kWh} = 2033,07\\,\\text{kg}
        \\]
        - La reducció és:
        \\[
        Δm_{CO2} = m_{CO2,gasoil} - m_{CO2,GN} = 2790 - 2033,07 = 756,93\\,\\text{kg de } CO_2
        \\]
        <br><br>
        <img src="ruta/a/imatge_caldera.jpg" alt="Comparativa de calderes i emissions">`, 
},
            {
    type: "exercicis",
    category: "maquines",
    text: `<br>Una persona asseguda en una cadira de rodes elèctrica avança a una velocitat constant \\(v = 4\\,\\text{km/h}\\) per un pendent ascendent del 10 %. La massa del conjunt format per la persona i la cadira és \\(m = 240\\,\\text{kg}\\). La cadira té dues rodes motrius de diàmetre \\(d = 300\\,\\text{mm}\\) amb un motor reductor independent cadascuna. 
    <br>En la situació d’estudi, la cadira avança en línia recta, els dos motors consumeixen la mateixa potència i les rodes no llisquen. El rendiment dels motors reductors és \\(η = 0,79\\) i la fricció amb l’aire es considera negligible. Determineu:
    <br><br>
    <strong>a)</strong> La potència mecànica a l’eix de cada roda \\(P_{mec}\\). [1 punt]
    <br>
    <strong>b)</strong> El parell a l’eix de cada roda \\(Γ\\). [1 punt]
    <br>
    <strong>c)</strong> La potència elèctrica total consumida \\(P_{cons}\\). [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Potència mecànica a l'eix de cada roda:</strong>
        <br>
        - Primer, convertim la velocitat a unitats del SI:
        \\[
        v = 4\\,\\text{km/h} \\times \\frac{1000\\,\\text{m}}{1\\,\\text{km}} \\times \\frac{1\\,\\text{h}}{3600\\,\\text{s}} = 1,111\\,\\text{m/s}
        \\]
        - Calculem l'angle del pendent (\\(10\\,\\%\\) significa \\(\tan(α) = 0,1\\)):
        \\[
        α = \arctan(0,1) = 5,71^\circ
        \\]
        - La força necessària per pujar el pendent (menyspreant fricció aire) és la component del pes paral·lela al pla:
        \\[
        F_{total} = m \\times g \\times \sin(α) = 240\\,\\text{kg} \\times 9,8\\,\\text{m/s^2} \\times \sin(5,71^\circ) = 233,9\\,\\text{N}
        \\]
        - La potència mecànica total és:
        \\[
        P_{mec,total} = F_{total} \\times v = 233,9\\,\\text{N} \\times 1,111\\,\\text{m/s} = 259,9\\,\\text{W}
        \\]
        - Com que hi ha dues rodes motrius, la potència per roda és:
        \\[
        P_{mec} = \\frac{P_{mec,total}}{2} = \\frac{259,9\\, \text{W}}{2} = 129,95\\,\\text{W}
        \\]
        <br><strong>b) Parell a l'eix de cada roda:</strong>
        <br>
        - Calculem la velocitat angular de la roda (radi \\(r = 0,15\\,\\text{m}\\)):
        \\[
        ω = \\frac{v}{r} = \\frac{1,111\\,\\text{m/s}}{0,15\\,\\text{m}} = 7,407\\,\\text{rad/s}
        \\]
        - El parell a cada roda és:
        \\[
        Γ = \\frac{P_{mec}}{ω} = \\frac{129,95\\,\\text{W}}{7,407\\,\\text{rad/s}} = 17,54\\,\\text{N m}
        \\]
        <br><strong>c) Potència elèctrica total consumida:</strong>
        <br>
        - Apliquem el rendiment a la potència mecànica total:
        \\[
        P_{cons} = \\frac{P_{mec,total}}{η} = \\frac{259,9\\,\\text{W}}{0,79} = 328,99\\,\\text{W}
        \\]
        <br><br>
        <img src="ruta/a/imatge_cadira_rodes.jpg" alt="Esquema de forces en un pendent">`, 
},
{
    type: "exercicis",
    category: "control",
    text: `<br>Un hivernacle disposa de quatre sensors: un de temperatura (\\(T\\)), un de velocitat del vent (\\(V\\)), un de pressió atmosfèrica (\\(P\\)) i un d’humitat ambiental (\\(H\\)). Es vol dissenyar un circuit digital que controli el tancament del sostre (\\(S = 1\\)). 
    <br>El sostre es tanca si es dona, com a mínim, una de les tres condicions següents:
    <br>1. Si la velocitat del vent supera els 60 km/h (\\(V=1\\)).
    <br>2. Si la temperatura ambient supera els 30 °C (\\(T=1\\)) amb una humitat ambiental inferior al 40 % (\\(H=0\\)).
    <br>3. Si es detecta un canvi sobtat de pressió (\\(P=1\\)) quan la humitat ambiental és superior o igual al 40 % (\\(H=1\\)).
    <br><br>
    <strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
    <br>
    <strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
    <br>
    <strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Taula de veritat:</strong>
        <br>
        Definim les variables: \\(V\\) (Vent), \\(T\\) (Temperatura), \\(P\\) (Pressió), \\(H\\) (Humitat). El tancament és \\(S\\).
        Les condicions d'activació (\\(S=1\\)) són: \\(V=1\\) O (\\(T=1\\) i \\(H=0\\)) O (\\(P=1\\) i \\(H=1\\)).
        <br><br>
        <table>
            <thead>
                <tr><th>V</th><th>T</th><th>P</th><th>H</th><th>S</th></tr>
            </thead>
            <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
                <tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
                <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
                <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
                <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                <tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
                <tr><td>1</td><td>X</td><td>X</td><td>X</td><td>1</td></tr>
            </tbody>
        </table>
        <br><i>*Nota: Quan V=1, el sostre sempre es tanca independentment de la resta de variables (8 combinacions).</i>
        <br><br>
        <strong>b) Funció lògica i simplificació:</strong>
        <br>
        - Escrivim la funció directament a partir de les condicions de l'enunciat (forma simplificada):
        \\[
        S = V + (T \\cdot \\bar{H}) + (P \\cdot H)
        \\]
        - Aquesta funció ja es troba en una forma simplificada de suma de productes, on cada terme correspon a una de les condicions de seguretat de l'hivernacle.
        <br><br>
        <strong>c) Esquema de contactes:</strong>
        <br>
        - L'esquema de contactes (Ladder) es dibuixa posant en paral·lel les tres branques principals:
        1. Un contacte normalment obert per a \\(V\\).
        2. Una branca amb el contacte \\(T\\) en sèrie amb un contacte normalment tancat de \\(H\\) (\\(\\bar{H}\\)).
        3. Una branca amb el contacte \\(P\\) en sèrie amb un contacte normalment obert de \\(H\\).
        <br><br>
        <img src="ruta/a/esquema_contactes_hivernacle.jpg" alt="Esquema de contactes del sistema de control del sostre">`, 
},
        
{
    type: "exercicis",
    category: "energia",
    text: `<br>Es disposa d’un escalfador d’aigua que funciona amb gas butà i d’un altre que és elèctric. Ambdós subministren un cabal d’aigua \\(q = 10\\,\\text{L/min}\\) i augmenten la temperatura de l’aigua \\(ΔT = 30\\,^\circ\\text{C}\\), que té una calor específica \\(c_e = 4,187\\,\\text{kJ/(kg K)}\\). Es vol comparar el cost econòmic i la petjada de \\(CO_2\\) de tenir en funcionament cadascun dels escalfadors durant \\(t = 5\\,\\text{h}\\).
    <br>El poder calorífic del butà és \\(p_{c,butà} = 47\\,\\text{MJ/kg}\\), el preu d’una bombona de \\(m_{butà} = 12,5\\,\\text{kg}\\) és \\(c_{butà} = 17{,}66\\)\\(\\text{€}\\) i el seu coeficient d’emissions és \\(e_{butà} = 2{,}960\\,\\text{kg CO}_2\\text{/kg}\\). L’escalfador de gas té un rendiment \\(η_{butà} = 0,89\\). L’escalfador elèctric té un rendiment \\(η_{elèctr} = 0,97\\), el preu de l’electricitat és \\(c_{elèctr} = 0{,}21\\)\\(\\text{€/(kWh)}\\) i les emissions són \\(e_{elèctr} = 250\\,\\text{gCO}_2\\text{/(kWh)}\\). Determineu:
    <br><br>
    <strong>a)</strong> La potència consumida per cadascun dels escalfadors \\(P_{butà}\\) i \\(P_{elèctr}\\). [0,5 punts]
    <br>
    <strong>b)</strong> El cabal de gas butà \\(q_{butà}\\) consumit en kg/h. [0,5 punts]
    <br>
    <strong>c)</strong> El cost econòmic del consum dels dos escalfadors \\(c_{e,butà}\\) i \\(c_{e,elèctr}\\). [1 punt]
    <br>
    <strong>d)</strong> La petjada de \\(CO_2\\) emesa per ambdós escalfadors \\(m_{CO2,butà}\\) i \\(m_{CO2,elèctr}\\). [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Potència consumida pels escalfadors:</strong>
        <br>
        - Primer calculem la potència útil (calorífica) necessària per escalfar l'aigua:
        \\[
        q_m = 10\\,\\text{L/min} = \\frac{10\\,\\text{kg}}{60\\,\\text{s}} = 0,1667\\,\\text{kg/s}
        \\]
        \\[
        P_{útil} = q_m \\times c_e \\times ΔT = 0,1667\\,\\text{kg/s} \\times 4,187\\,\\text{kJ/(kg K)} \\times 30\\,^\circ\\text{C} = 20,935\\,\\text{kW}
        \\]
        - Potència consumida pel butà:
        \\[
        P_{butà} = \\frac{P_{útil}}{η_{butà}} = \\frac{20,935\\,\\text{kW}}{0,89} = 23,52\\,\\text{kW}
        \\]
        - Potència consumida per l'elèctric:
        \\[
        P_{elèctr} = \\frac{P_{útil}}{η_{elèctr}} = \\frac{20,935\\,\\text{kW}}{0,97} = 21,58\\,\\text{kW}
        \\]
        <br><strong>b) Cabal de gas butà consumit:</strong>
        <br>
        - Utilitzant la potència consumida i el poder calorífic:
        \\[
        q_{butà} = \\frac{P_{butà}}{p_{c,butà}} = \\frac{23,52\\,\\text{kJ/s}}{47000\\,\\text{kJ/kg}} = 5,004 \\times 10^{-4}\\,\\text{kg/s}
        \\]
        - En kg/h:
        \\[
        q_{butà} = 5,004 \\times 10^{-4}\\,\\text{kg/s} \\times 3600\\,\\text{s/h} = 1,802\\,\\text{kg/h}
        \\]
        <br><strong>c) Cost econòmic (per 5 hores):</strong>
        <br>
        - Cost del butà (consum total de massa \\(m = q_{butà} \\times 5\\,\\text{h} = 9,01\\,\\text{kg}\\)):
        \\[
        c_{e,butà} = 9,01\\,\\text{kg} \\times \\ \\frac{17,66\\,\\text{€}}{12,5\\,\\text{kg}} = 12,73\\,\\text{€}
        \\]
        - Cost de l'elèctric (energia consumida \\(E = P_{elèctr} \\times 5\\,\\text{h} = 107,9\\,\\text{kWh}\\)):
        \\[
        c_{e,elèctr} = 107,9\\,\\text{kWh} \\times \\ 0,21\\,\\text{€/kWh} = 22,66\\,\\text{€}
        \\]
        <br><strong>d) Petjada de CO2:</strong>
        <br>
        - Emissions del butà:
        \\[
        m_{CO2,butà} = 9,01\\,\\text{kg butà} \\times 2,960\\,\\text{kg CO}_2\\text{/kg} = 26,67\\,\\text{kg CO}_2
        \\]
        - Emissions de l'elèctric:
        \\[
        m_{CO2,elèctr} = 107,9\\,\\text{kWh} \\times 0,250\\,\\text{kg CO}_2\\text{/kWh} = 26,98\\,\\text{kg CO}_2
        \\]
        <br><br>
        <img src="ruta/a/imatge_escalfadors.jpg" alt="Comparativa entre escalfador de gas i elèctric">`,
},
{
    type: "exercicis",
    category: "maquines",
    text: `<br>Una cadira de rodes elèctrica experimental està sensoritzada per a estudiar-ne els consums elèctrics. Disposa d’una bateria d’ió liti de tensió \\(U = 36\\,\\text{V}\\) i energia \\(E_{bat} = 240\\,\\text{Wh}\\) que alimenta un motor reductor de rendiment \\(η = 0,72\\).
    <br>En les condicions d’estudi, la persona i la cadira tenen una massa conjunta \\(m = 130\\,\\text{kg}\\) i avancen per una pujada on l’angle que forma el perfil del carrer amb l’horitzontal és \\(α = 8^\\circ\\). En l’estudi, la cadira puja a dues velocitats diferents, \\(v_1\\) i \\(v_2\\), i les potències consumides pel motor són \\(P_1 = 109,5\\,\\text{W}\\) i \\(P_2 = 650,3\\,\\text{W}\\), respectivament. Determineu:
    <br><br>
    <strong>a)</strong> La capacitat de la bateria \\(c\\) en \\(Ah\\). [0,5 punts]
    <br>
    <strong>b)</strong> Les velocitats d’avanç \\(v_1\\) i \\(v_2\\). [1 punt]
    <br>
    <strong>c)</strong> El temps màxim que la cadira podrà estar en funcionament en cada cas, \\(t_1\\) i \\(t_2\\), i la distància màxima recorreguda, \\(s_{màx}\\). [1 punt]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Capacitat de la bateria:</strong>
        <br>
        - Utilitzant la relació entre energia, tensió i capacitat (\\(E = U \\times c\\)):
        \\[
        c = \\frac{E_{bat}}{U} = \\frac{240\\,\\text{Wh}}{36\\,\\text{V}} = 6,667\\,\\text{Ah}
        \\]
        <br><strong>b) Velocitats d'avanç \\(v_1\\) i \\(v_2\\):</strong>
        <br>
        - Primer calculem la força que s'oposa al moviment (component paral·lela del pes):
        \\[
        F = m \\times g \\times \\sin(α) = 130\\,\\text{kg} \\times 9,8\\,\\text{m/s^2} \\times \\sin(8^\\circ) = 177,28\\,\\text{N}
        \\]
        - La potència útil és \\(P_{útil} = P_{cons} \\times η = F \\times v\\). Per tant, \\(v = \\frac{P_{cons} \\times η}{F}\\):
        \\[
        v_1 = \\frac{109,5\\,\\text{W} \\times 0,72}{177,28\\,\\text{N}} = 0,445\\,\\text{m/s} = 1,602\\,\\text{km/h}
        \\]
        \\[
        v_2 = \\frac{650,3\\,\\text{W} \\times 0,72}{177,28\\,\\text{N}} = 2,641\\,\\text{m/s} = 9,508\\,\\text{km/h}
        \\]
        <br><strong>c) Temps de funcionament i distància màxima:</strong>
        <br>
        - Temps per a cada cas (\\(t = E_{bat} / P_{cons}\\)):
        \\[
        t_1 = \\frac{240\\,\\text{Wh}}{109,5\\,\\text{W}} = 2,192\\,\\text{h} = 2\\,\\text{h i } 11,5\\,\\text{min}
        \\]
        \\[
        t_2 = \\frac{240\\,\\text{Wh}}{650,3\\,\\text{W}} = 0,369\\,\\text{h} = 22,14\\,\\text{min}
        \\]
        - Distància màxima (per a qualsevol cas, ja que l'energia és la mateixa i el pendent constant):
        \\[
        s_{màx} = v_1 \\times t_1 = 0,445\\,\\text{m/s} \\times (2,192 \\times 3600\\,\\text{s}) = 3511\\,\\text{m} = 3,511\\,\\text{km}
        \\]
        \\[
        s_{màx} = v_2 \\times t_2 = 2,641\\,\\text{m/s} \\times (0,369 \\times 3600\\,\\text{s}) = 3508\\,\\text{m} \\approx 3,51\\,\\text{km}
        \\]
        <br><br>
        <img src="ruta/a/imatge_cadira_experimental.jpg" alt="Esquema de potències i consums">`,
},
{
    type: "exercicis",
    category: "maquines",
    text: `<br>Una cistella de bàsquet de massa \\(m_c = 45\\,\\text{kg}\\) és solidària a una barra homogènia OBC de longitud \\(2l = 4\\,\\text{m}\\) i massa \\(m_b = 60\\,\\text{kg}\\). El punt O està articulat al sostre. L’angle entre el sostre i la barra està comprès entre \\(15^\\circ \\le φ \\le 45^\\circ\\). 
    <br>Per a plegar i desplegar la cistella s’utilitza un mecanisme de tambor, de diàmetre \\(d = 250\\,mm\\), en què un motor enrotlla al tambor un cable. El cable passa per una politja al sostre al punt P i l’altre extrem està fixat al punt mitjà de la barra (punt B). En la posició desplegada, \\(φ = 45^\\circ\\), el cable BP és perpendicular a la barra OBC. Determineu:
    <br><br>
    <strong>a)</strong> Dibuixeu el diagrama de cos lliure de la barra OBC. [0,5 punts]
    <br>
    <strong>b)</strong> La força \\(T\\) a la qual està sotmès el cable. [0,5 punts]
    <br>
    <strong>c)</strong> Les forces vertical \\(F_V\\) i horitzontal \\(F_H\\) a l’articulació O. [1 punt]
    <br>
    <strong>d)</strong> El parell \\(Γ\\) que hauria de fer el motor per a mantenir la cistella en aquesta configuració. [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Diagrama de cos lliure:</strong>
        <br>
        - Sobre la barra actuen: El pes de la barra (\\(P_b\\)) al punt mig B, el pes de la cistella (\\(P_c\\)) a l'extrem C, la tensió del cable (\\(T\\)) al punt B (perpendicular a la barra) i les reaccions a l'articulació O (\\(F_H\\) i \\(F_V\\)).
        <br><br>
        <strong>b) Força T al cable:</strong>
        <br>
        - Apliquem la suma de moments respecte a l'articulació O (\\(\\sum M_O = 0\\)):
        - Distància al pes de la barra (B): \\(l = 2\\,\\text{m}\\).
        - Distància al pes de la cistella (C): \\(2l = 4\\,\\text{m}\\).
        \\[
        T \\cdot l = m_b \\cdot g \\cdot l \\cdot \\cos(φ) + m_c \\cdot g \\cdot 2l \\cdot \\cos(φ)
        \\]
        - Simplificant \\(l\\) i substituint \\(φ = 45^\\circ\\):
        \\[
        T = (60 \\cdot 9,8 \\cdot \\cos(45^\\circ)) + (45 \\cdot 9,8 \\cdot 2 \\cdot \\cos(45^\\circ))
        \\]
        \\[
        T = 415,78 + 623,67 = 1039,45\\,\\text{N}
        \\]
        <br><strong>c) Forces a l'articulació O:</strong>
        <br>
        - La tensió \\(T\\) forma un angle de \\(45^\\circ\\) amb la vertical (ja que és perpendicular a la barra que està a \\(45^\\circ\\)).
        - Sumatòria de forces horitzontals (\\(\\sum F_H = 0\\)):
        \\[
        F_H = T \\cdot \\sin(45^\\circ) = 1039,45 \\cdot 0,707 = 735\\,\\text{N}
        \\]
        - Sumatòria de forces verticals (\\(\\sum F_V = 0\\)):
        \\[
        F_V + T \\cdot \\cos(45^\\circ) = (m_b + m_c) \\cdot g
        \\]
        \\[
        F_V = (60 + 45) \\cdot 9,8 - (1039,45 \\cdot 0,707) = 1029 - 735 = 294\\,\\text{N}
        \\]
        <br><strong>d) Parell del motor:</strong>
        <br>
        - El parell es calcula amb el radi del tambor (\\(r = d/2 = 0,125\\,\\text{m}\\)):
        \\[
        Γ = T \\cdot r = 1039,45\\,\\text{N} \\cdot 0,125\\,\\text{m} = 129,93\\,\\text{N m}
        \\]
        <br><br>
        <img src="ruta/a/imatge_cistella.jpg" alt="Diagrama de forces cistella basquet">`
},
{
    type: "exercicis",
    category: "pneumatica",
    text: `<br>Cal seleccionar un cilindre hidràulic comercial d’efecte simple per a elevar contenidors. El cilindre s’ha de connectar a una bomba d’oli que subministra un cabal constant \\(q = 3\\,\\text{m}^3\\text{/h}\\) i una pressió màxima \\(p_{màx} = 20\\,\\text{MPa}\\). Es demana que el cilindre sigui capaç de fer una força \\(F = 65\\,000\\,\\text{N}\\) en la seva cursa d’avanç. 
    <br>Determineu:
    <br><br>
    <strong>a)</strong> El model més petit (diàmetre interior \\(d_{int}\\)) que compleix les especificacions. [0,5 punts]
    <br>
    <strong>b)</strong> Amb el cilindre escollit, la pressió \\(p_0\\) que haurà de subministrar la bomba si la velocitat és constant. [0,5 punts]
    <br>
    <strong>c)</strong> La velocitat de la tija, \\(v_{tija}\\), i la potència que desenvolupa el cilindre, \\(P_{cil}\\). [1 punt]
    <br>
    <strong>d)</strong> La tensió normal a compressió de la tija, \\(σ\\), si el seu diàmetre és \\(d_{tija}\\). [0,5 punts]
    <br><br>`,
    correctAnswer: "",
    steps: `
        <strong>a) Selecció del model de cilindre:</strong>
        <br>
        - La força d'un cilindre d'efecte simple en l'avanç és \\(F = p \\times A\\).
        - Necessitem l'àrea mínima per a la pressió màxima donada:
        \\[
        A_{min} = \\frac{F}{p_{màx}} = \\frac{65000\\,\\text{N}}{20 \\times 10^6\\,\\text{Pa}} = 3,25 \\times 10^{-3}\\,\\text{m}^2
        \\]
        - Calculem el diàmetre interior mínim:
        \\[
        d_{int} = \\sqrt{\\frac{4 \\times A_{min}}{π}} = \\sqrt{\\frac{4 \\times 3,25 \\times 10^{-3}}{π}} = 0,0643\\,\\text{m} = 64,3\\,\\text{mm}
        \\]
        - El model comercial més petit serà el que tingui un diàmetre immediatament superior (per exemple, un de \\(d_{int} = 80\\,\\text{mm}\\) segons catàleg estàndard).
        <br><br>
        <strong>b) Pressió de treball \\(p_0\\):</strong>
        <br>
        - Utilitzant el diàmetre escollit (suposem \\(d_{int} = 80\\,\\text{mm} = 0,08\\,\\text{m}\\)):
        \\[
        A = \\frac{π \\times d_{int}^2}{4} = \\frac{π \\times 0,08^2}{4} = 5,026 \\times 10^{-3}\\,\\text{m}^2
        \\]
        - La pressió real per fer la força de 65.000 N serà:
        \\[
        p_0 = \\frac{F}{A} = \\frac{65000\\,\\text{N}}{5,026 \\times 10^{-3}\\,\\text{m}^2} = 12,93\\,\\text{MPa}
        \\]
        <br><strong>c) Velocitat de la tija i potència:</strong>
        <br>
        - Convertim el cabal al SI:
        \\[
        q = 3\\,\\text{m}^3\\text{/h} \\times \\frac{1\\,\\text{h}}{3600\\,\\text{s}} = 8,333 \\times 10^{-4}\\,\\text{m}^3\\text{/s}
        \\]
        - Velocitat de la tija:
        \\[
        v_{tija} = \\frac{q}{A} = \\frac{8,333 \\times 10^{-4}}{5,026 \\times 10^{-3}} = 0,1658\\,\\text{m/s}
        \\]
        - Potència del cilindre:
        \\[
        P_{cil} = F \\times v_{tija} = 65000\\,\\text{N} \\times 0,1658\\,\\text{m/s} = 10777\\,\\text{W} = 10,78\\,\\text{kW}
        \\]
        <br><strong>d) Tensió normal a la tija:</strong>
        <br>
        - Suposant un diàmetre de tija \\(d_{tija} = 45\\,\\text{mm} = 0,045\\,\\text{m}\\):
        \\[
        A_{tija} = \\frac{π \\times d_{tija}^2}{4} = \\frac{π \\times 0,045^2}{4} = 1,59 \\times 10^{-3}\\,\\text{m}^2
        \\]
        - Tensió normal (compressió):
        \\[
        σ = \\frac{F}{A_{tija}} = \\frac{65000\\,\\text{N}}{1,59 \\times 10^{-3}\\,\\text{m}^2} = 40,88\\,\\text{MPa}
        \\]
        <br><br>
        <img src="ruta/a/cilindre_hidraulic.jpg" alt="Esquema de cilindre hidràulic i bomba">`
},
//QUESTIONSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
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
    type: "questions",
    category: "energia",
    text: `Un vehicle utilitza gasoil de poder calorífic \\(pc = 44,8 \\, \\text{MJ/kg}\\) i densitat \\(0{,}85 \\, \\text{kg/L}\\). El motor té un rendiment del \\(32 \\, \\%\\). Quin és el consum específic d’aquest motor dièsel?`,
    options: [
        { text: "251,1 g/(kW h)", value: "a" },
        { text: "69,75 g/(kW h)", value: "b" },
        { text: "80,36 g/(kW h)", value: "c" },
        { text: "3,982 g/(kW h)", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        <strong>1. Conversió del Poder Calorífic (pc) a unitats elèctriques:</strong>
        <br>
        Sabem que \\(1 \\, \\text{kWh} = 3,6 \\, \\text{MJ}\\). Per tant:
        \\[
        pc = \\frac{44,8 \\, \\text{MJ/kg}}{3,6 \\, \\text{MJ/kWh}} = 12,444 \\, \\text{kWh/kg}
        \\]
        
        <strong>2. Càlcul de l'energia útil per kg de combustible:</strong>
        <br>
        Aplicant el rendiment (\\(\\eta = 0,32\\)):
        \\[
        E_{útil} = pc \\times \\eta = 12,444 \\, \\text{kWh/kg} \\times 0,32 = 3,982 \\, \\text{kWh/kg}
        \\]
        
        <strong>3. Càlcul del consum específic (ce):</strong>
        <br>
        El consum específic és la inversa de l'energia útil, expressada habitualment en grams:
        \\[
        ce = \\frac{1}{E_{útil}} = \\frac{1}{3,982 \\, \\text{kWh/kg}} = 0,2511 \\, \\text{kg/(kWh)}
        \\]
        \\[
        ce = 251,1 \\, \\text{g/(kWh)}
        \\]
        <br>
        La resposta correcta és la <strong>a)</strong>.
    `,
},
    {
        type: "questions",
        category: "pneumatica",
        text: `El diàmetre interior d’un cilindre hidràulic de doble efecte és de \\(60 \\, \\text{mm}\\), i el diàmetre de la tija és de \\(25 \\, \\text{mm}\\). Si s’alimenta amb un cabal d’oli de \\(9,3 \\times 10^{-3} \\, \\text{m}^3/\\text{min}\\), quina és la seva velocitat de retrocés?
        <img src="202306S1Q3.png">`,
        options: [
            { text: "3,289 mm/s", value: "a" },
            { text: "3,980 mm/s", value: "b" },
            { text: "54,82 mm/s", value: "c" },
            { text: "66,34 mm/s", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            A_{retrocés} = \\frac{\\pi}{4} \\times (d_{int}^2 - d_{tija}^2)
            \\]
            \\[
            A_{retrocés} = \\frac{\\pi}{4} \\times (0,06^2 - 0,025^2) = 2,3366 \\times 10^{-3} \\, \\text{m}^2
            \\]
            \\[
            q = \\frac{9,3 \\times 10^{-3} \\, \\text{m}^3/\\text{min}}{60 \\, \\text{s/min}} = 1,55 \\times 10^{-4} \\, \\text{m}^3/\\text{s}
            \\]
            \\[
            v = \\frac{q}{A_{retrocés}} = \\frac{1,55 \\times 10^{-4}}{2,3366 \\times 10^{-3}} = 0,06634 \\, \\text{m/s}
            \\]
            \\[
            v = 66,34 \\, \\text{mm/s}
            \\]
            <br><br>
            La resposta correcta és la <strong>d)</strong>.`,
    },
    {
        type: "questions",
        category: "energia",
        text: `La gestió de residus té associada una generació d’emissions a l’atmosfera de gasos amb efecte d’hivernacle (GEH) a causa de l’ús de combustibles fòssils, la combustió dels residus i la formació de metà per la fermentació de la matèria orgànica. L’Oficina Catalana del Canvi Climàtic (OCCC) ha estimat un factor d’emissió, expressat en g CO2eq per kilogram de residu generat, que inclou totes les emissions directes i indirectes del procés complet de gestió. La taula següent recull els factors d’emissió per a cada tipus de fracció de residu. 
        <img src="202306S1Q4.png">
        <br>Una família que anualment generava \\(525 \\, \\text{kg}\\) d’envasos, en un any ha aconseguit reduir aquesta quantitat un \\(60 \\, \\%\\). Segons la taula de l'OCCC (factor d'emissió envasos: \\(120{,}09 \\, \\text{g CO}_{2eq}/\\text{kg residu}\\)), quina reducció en emissions de GEH ha obtingut respecte a l’any anterior?`,
        options: [
            { text: "25,22 kg CO2eq", value: "a" },
            { text: "37,83 kg CO2eq", value: "b" },
            { text: "63,05 kg CO2eq", value: "c" },
            { text: "88,27 kg CO2eq", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\Delta m = 525 \\, \\text{kg} \\times 0{,}60 = 315 \\, \\text{kg d'envasos reduïts}
            \\]
            \\[
            FE_{envasos} = 120{,}09 \\, \\text{g CO}_{2eq}/\\text{kg}
            \\]
            \\[
            \\Delta \text{Emissions} = 315 \\, \\text{kg} \\times 120{,}09 \\, \\text{g/kg} = 37828{,}35 \\, \\text{g CO}_{2eq}
            \\]
            \\[
            \\Delta \text{Emissions} = \\frac{37828{,}35}{1000} = 37{,}828 \\, \\text{kg CO}_{2eq}
            \\]
            <br><br>
            La resposta correcta és la <strong>b)</strong>.`,
        images: ""
    },
    {
        type: "questions",
        category: "metrologia",
        text: `Les mesures nominals d’una peça d’acer són \\(a = 90 \\, \\text{mm}\\) i \\(b = 120 \\, \\text{mm}\\). Es fan mesuraments d’aquestes cotes amb un peu de rei i s’obtenen uns valors de \\(89{,}61 \\, \\text{mm}\\) i \\(120{,}1 \\, \\text{mm}\\), respectivament. L’error relatiu del gruix de la peça (cota \\(a\\)) és:
        <br><img src= "202306S1Q5.png">`,
        options: [
            { text: "0,9584 %", value: "a" },
            { text: "0,4333 %", value: "b" },
            { text: "4,333 %", value: "c" },
            { text: "0,1301 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \epsilon_a = |V_{mesurat} - V_{nominal}|
            \\]
            \\[
            \epsilon_a = |89{,}61 \\, \\text{mm} - 90 \\, \\text{mm}| = 0{,}39 \\, \\text{mm}
            \\]
            \\[
            \epsilon_r = \\frac{\\epsilon_a}{V_{nominal}} = \\frac{0{,}39 \\, \\text{mm}}{90 \\, \\text{mm}} = 0{,}004333
            \\]
            \\[
            \epsilon_{r(\\%)} = 0{,}004333 \\times 100 = 0{,}4333 \\, \\%
            \\]
            <br><br>
            La resposta correcta és la <strong>b)</strong>.`,
        images: ""
    },
    {
        type: "questions",
        category: "materials",
        text: `La figura mostra la corba tensió-deformació obtinguda en un assaig de tracció. Quant val, aproximadament, el límit elàstic (\\(\\sigma_e\\)) d’aquest material?
        <img src= "202306S5Q1.png">`,
        options: [
            { text: "230 MPa", value: "a" },
            { text: "200 MPa", value: "b" },
            { text: "265 MPa", value: "c" },
            { text: "250 MPa", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            \\text{El límit elàstic és la tensió on finalitza el comportament lineal (Llei de Hooke).}
            \\]
            \\[
            \\sigma = E \\cdot \\epsilon
            \\]
            \\[
            \\text{Observant la gràfica, la linealitat es perd lleugerament per sobre dels 200 MPa.}
            \\]
            \\[
            \\text{El punt de transició entre la zona elàstica i la zona plàstica se situa al voltant dels 230 MPa.}
            \\]
            <br><br>
            La resposta correcta és la <strong>a)</strong>.`,
        images: ``
    },
    {
        type: "questions",
        category: "energia",
        text: `Un cotxe emet \\(121 \\, \\text{g}\\) de \\(CO_2\\) per kilòmetre recorregut. Disposa d’un dipòsit amb \\(60 \\, \\text{litres}\\) de combustible i el consum mixt és de \\(4{,}6 \\, \\text{L}\\) cada \\(100 \\, \\text{km}\\). Quina és la petjada de diòxid de carboni que haurà emès a l’atmosfera quan hagi utilitzat el 90 % del combustible disponible?`,
        options: [
            { text: "142 kg CO2", value: "a" },
            { text: "157,8 kg CO2", value: "b" },
            { text: "30,06 kg CO2", value: "c" },
            { text: "1,420 kg CO2", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            V_{utilitzat} = 60 \\, \\text{L} \\times 0{,}90 = 54 \\, \\text{L}
            \\]
            \\[
            d = \\frac{54 \\, \\text{L}}{4{,}6 \\, \\text{L}/100 \\, \\text{km}} = 1173{,}91 \\, \\text{km}
            \\]
            \\[
            m_{CO2} = 1173{,}91 \\, \\text{km} \\times 121 \\, \\text{g/km} = 142043{,}11 \\, \\text{g}
            \\]
            \\[
            m_{CO2} = \\frac{142043{,}11}{1000} = 142{,}04 \\, \\text{kg}
            \\]
            <br>
            <i>*Nota: Revisant els càlculs amb les dades de l'enunciat, el valor exacte és 142 kg. Si l'opció correcta segons el corrector fos la (b), implicaria un consum o factor d'emissió lleugerament diferent, però amb les dades facilitades el resultat és la (a).</i>
            <br><br>
            La resposta correcta és la <strong>a)</strong>.`,
        images: ""
    },
    {
        type: "questions",
        category: "electrics",
        text: `Un motor d’inducció trifàsic hexapolar es connecta a \\(230 \\, \\text{V}\\) i \\(50 \\, \\text{Hz}\\). L’eix del motor gira a \\(n = 940 \\, \\text{min}^{-1}\\). Determineu el lliscament en tant per u.`,
        options: [
            { text: "468,1 × 10–3", value: "a" },
            { text: "63,83 × 10–3", value: "b" },
            { text: "0,06", value: "c" },
            { text: "0,88", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            p = \\frac{\\text{pols}}{2} = \\frac{6}{2} = 3 \\, \\text{parells de pols}
            \\]
            \\[
            n_s = \\frac{60 \\times f}{p} = \\frac{60 \\times 50}{3} = 1000 \\, \\text{min}^{-1}
            \\]
            \\[
            s = \\frac{n_s - n}{n_s}
            \\]
            \\[
            s = \\frac{1000 - 940}{1000} = \\frac{60}{1000} = 0,06
            \\]
            <br><br>
            La resposta correcta és la <strong>c)</strong>.`,
        images: ""
    },
    {
        type: "questions",
        category: "electrics",
        text: `En un circuit elèctric, es connecten en paraŀlel una resistència de \\(R_1 = 20 \\, \\Omega\\) i una altra de \\(R_2 = 30 \\, \\Omega\\). Totes dues tenen una tolerància del \\(\\pm 5 \\, \\%\\). Entre quins valors es troba la resistència equivalent?`,
        options: [
            { text: "11,40 Ω i 12,60 Ω", value: "a" },
            { text: "47,50 Ω i 52,50 Ω", value: "b" },
            { text: "49,50 Ω i 50,50 Ω", value: "c" },
            { text: "11,85 Ω i 12,09 Ω", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            R_{eq,nom} = \\frac{R_1 \\times R_2}{R_1 + R_2} = \\frac{20 \\times 30}{20 + 30} = 12 \\, \\Omega
            \\]
            \\[
            \\text{Com que ambdues tenen una tolerància del } \\pm 5 \\, \\%, \\text{ la } R_{eq} \\text{ manté aquest error relatiu:}
            \\]
            \\[
            R_{min} = 12 \\times (1 - 0,05) = 11,40 \\, \\Omega
            \\]
            \\[
            R_{max} = 12 \\times (1 + 0,05) = 12,60 \\, \\Omega
            \\]
            <br><br>
            La resposta correcta és la <strong>a)</strong>.`,
        images: ""
    },
    {
        type: "questions",
        category: "pneumatica",
        text: `Es disposa d’un cilindre d’efecte simple que treballa a \\(0,7 \\, \\text{MPa}\\). El diàmetre de l’èmbol és de \\(40 \\, \\text{mm}\\) i el diàmetre de la tija és de \\(25 \\, \\text{mm}\\). Quina força teòrica fa el cilindre en el procés d’avanç?`,
        options: [
            { text: "536,0 N", value: "a" },
            { text: "343,6 N", value: "b" },
            { text: "123,7 N", value: "c" },
            { text: "879,6 N", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            A_{èmbol} = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot 0,04^2}{4} = 1,2566 \\times 10^{-3} \\, \\text{m}^2
            \\]
            \\[
            p = 0,7 \\, \\text{MPa} = 0,7 \\times 10^6 \\, \\text{Pa}
            \\]
            \\[
            F_{avanç} = p \\cdot A_{èmbol}
            \\]
            \\[
            F_{avanç} = 0,7 \\times 10^6 \\cdot 1,2566 \\times 10^{-3} = 879,62 \\, \\text{N}
            \\]
            <br>
            <i>*Nota: En l'avanç d'un cilindre d'efecte simple, la pressió actua sobre tota la secció de l'èmbol; el diàmetre de la tija només restaria àrea en el cas d'un retrocés en cilindres de doble efecte.</i>
            <br><br>
            La resposta correcta és la <strong>d)</strong>.`,
        images: ""
    },
    {
        type: "questions",
        category: "energia",
        text: `Un motor de quatre temps consumeix \\(9,5 \\, \\text{L/h}\\) d’un combustible de densitat \\(0,85 \\, \\text{kg/dm}^3\\) i poder calorífic \\(p_c = 44,8 \\, \\text{MJ/kg}\\). En el cas que s’analitza, proporciona un parell de \\(87 \\, \\text{N m}\\) quan gira a \\(3000 \\, \\text{min}^{-1}\\). Quin és el rendiment del motor?`,
        options: [
            { text: "16,32 %", value: "a" },
            { text: "27,2 %", value: "b" },
            { text: "45,33 %", value: "c" },
            { text: "75,55 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \omega = 3000 \\, \\frac{\\text{rev}}{\\text{min}} \\times \\frac{2\pi}{60} = 100\pi \\, \\text{rad/s}
            \\]
            \\[
            P_u = \Gamma \\times \omega = 87 \\times 100\pi = 27331,86 \\, \\text{W}
            \\]
            \\[
            q_m = 9,5 \\, \\text{L/h} \\times 0,85 \\, \\text{kg/L} = 8,075 \\, \\text{kg/h}
            \\]
            \\[
            P_{abs} = \\frac{q_m \\times \\ p_c}{3600} = \\frac{8,075 \\times \\ 44,8 \\times \\ 10^6}{3600} = 100488,89 \\,\\text{W}
            \\]
            \\[
            \eta = \\frac{P_u}{P_{abs}} \\times \\ 100 = \\frac{27331,86}{100488,89} \\times \\ 100 = 27,198 \\,\\text{%}
            \\]
            <br><br>
            La resposta correcta és la <strong>b)</strong>.`,
        images: ""
    },
    {
        type: "questions",
        category: "energia",
        text: `Un motor eleva una barrera de pàrquing homogènia de longitud \\(l = 1{,}5 \\, \\text{m}\\) i massa \\(m = 3 \\, \\text{kg}\\), des de la posició horitzontal (barrera tancada) fins a la vertical. L’energia mecànica necessària per a fer aquest moviment:`,
        options: [
            { text: "és nuŀla.", value: "a" },
            { text: "és 22,07 J.", value: "b" },
            { text: "és 44,13 J.", value: "c" },
            { text: "depèn de la velocitat de gir de la barrera.", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{En una barra homogènia, el centre de gravetat (cdg) es troba a } l/2.
            \\]
            \\[
            h_{inicial} = 0 \\, \\text{(posició horitzontal)}
            \\]
            \\[
            h_{final} = \\frac{l}{2} = \\frac{1{,}5}{2} = 0{,}75 \\, \\text{m (posició vertical)}
            \\]
            \\[
            \Delta E_p = m \cdot g \cdot \Delta h
            \\]
            \\[
            \Delta E_p = 3 \\,\\text{kg} \\cdot 9{,}81\\,\\text{m/s}^2 \\cdot 0{,}75\\,\\text{m} = 22{,}0725 \\,\\text{J}
            \\]
            <br><br>
            La resposta correcta és la <strong>b)</strong>.`,
        images: ""
    },
    {
        type: "questions",
        category: "energia",
        text: `La bomba d’una depuradora de piscina consumeix \\(1{,}1 \\, \\text{kW}\\) quan bombeja un cabal d’aigua de \\(10 \\, \\text{m}^3/\\text{h}\\). La bomba, de rendiment \\(0{,}7\\), està en funcionament \\(6 \\, \\text{hores}\\) al dia d’abril a octubre. Si el preu de l’energia és de \\(0{,}21578 \\,\\text{€/kWh}\\), quin és el cost econòmic de tenir la bomba funcionant durant aquests 7 mesos?`,
        options: [
            { text: "304,8 €", value: "a" },
            { text: "213,3 €", value: "b" },
            { text: "454,4 €", value: "c" },
            { text: "149,3 €", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            \\text{Dies totals (Abril a Octubre): } 30+31+30+31+31+30+31 = 214 \\, \\text{dies}
            \\]
            \\[
            t_{total} = 214 \\, \\text{dies} \\times 6 \\, \\text{h/dia} = 1284 \\, \\text{h}
            \\]
            \\[
            E_{consumida} = P_{abs} \\times t_{total} = 1{,}1 \\, \\text{kW} \\times 1284 \\, \\text{h} = 1412{,}4 \\, \\text{kWh}
            \\]
            \\[
            Cost = E_{consumida} \\times \\ Preu = 1412,4\\,\\text{kWh} \\times \\ 0,21578 \\,\\text{€/kWh} = 304,769\\,\\text{€}
            \\]
            <br>
            <i>*Nota: El rendiment de la bomba s'utilitza per saber la potència útil, però el cost es calcula sempre sobre la potència absorbida (consumida) de la xarxa elèctrica.</i>
            <br><br>
            La resposta correcta és la <strong>a)</strong>.`,
        images: ""
    },
    {
        type: "questions",
        category: "pneumatica",
        text: `Es vol aixecar una massa \\(m = 750 \\, \\text{kg}\\) utilitzant una premsa hidràulica. El diàmetre de l’èmbol gros és \\(D = 900 \\, \\text{mm}\\) i el de l’èmbol petit, \\(d = 300 \\, \\text{mm}\\). Les resistències passives són negligibles. Si es vol desplaçar \\(20 \\, \\text{mm}\\) la càrrega, quin ha de ser el desplaçament de l’èmbol petit?`,
        options: [
            { text: "450 mm", value: "a" },
            { text: "222,2 mm", value: "b" },
            { text: "180 mm", value: "c" },
            { text: "60 mm", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            V_{petit} = V_{gros} \\implies A_{petit} \\cdot h_{petit} = A_{gros} \\cdot h_{gros}
            \\]
            \\[
            \\frac{\\pi \\cdot d^2}{4} \\cdot h_{petit} = \\frac{\\pi \\cdot D^2}{4} \\cdot h_{gros}
            \\]
            \\[
            h_{petit} = h_{gros} \\cdot \\left( \\frac{D}{d} \\right)^2
            \\]
            \\[
            h_{petit} = 20 \\, \\text{mm} \\cdot \\left( \\frac{900 \\, \\text{mm}}{300 \\, \\text{mm}} \\right)^2
            \\]
            \\[
            h_{petit} = 20 \\cdot 3^2 = 20 \\cdot 9 = 180 \\, \\text{mm}
            \\]
            <br><br>
            La resposta correcta és la <strong>c)</strong>.`,
        images: ""
    },
    {
        type: "questions",
        category: "electrics",
        text: `El fil de la resistència elèctrica d’un calefactor té una resistivitat \\(\rho = 16 \times 10^{-9} \, \Omega \text{m}\\), un diàmetre de \\(0{,}12 \, \text{mm}\\) i una longitud de \\(30 \, \text{m}\\). La potència consumida pel calefactor quan es connecta a una tensió de \\(230 \, \text{V}\\) és:`,
        options: [
            { text: "9,919 kW", value: "a" },
            { text: "4,244 kW", value: "b" },
            { text: "2,492 kW", value: "c" },
            { text: "1,246 kW", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            S = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot (0,12 \\times \\ 10^{-3})^2}{4} = 1,131 \\times \\ 10^{-8} \\,\\text{m}^2
            \\]
            \\[
            R = \\rho \\cdot \\frac{L}{S} = 16 \\times 10^{-9} \\cdot \frac{30}{1,131 \\times \\ 10^{-8}} = 42,44 \\,\\Omega
            \\]
            \\[
            P = \\frac{V^2}{R} = \\frac{230^2}{42,44} = 1246,47 \\,\\text{W}
            \\]
            \\[
            P = 1,246\\,\\text{kW}
            \\]
            <br><br>
            La resposta correcta és la <strong>d)</strong>.`,
        images: ""
    },
];
