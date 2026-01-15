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
`, 
},
{
    type: "exercicis",
    category: "energia",
    text: `<br>Es volen instal·lar petits aerogeneradors en una zona rural per a donar subministrament a una casa aïllada amb una demanda anual de \\(E_{casa} = 500\\,\\text{kW h}\\). En aquests aerogeneradors, el rotor es connecta directament al generador elèctric sense necessitat d’un multiplicador. 
    <br>El rendiment del generador és \\(η_{gen} = 1/3\\). S’obté energia 14 hores al dia durant 250 dies l’any. Les gràfiques mostren la potència elèctrica generada \\(P_{útil}\\) en funció de la velocitat del vent \\(v\\) i la potència a l’eix del rotor \\(P_{rotor}\\) en funció de la velocitat de gir \\(n\\). 
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
        <img src="ruta/a/grafiques_eolica.jpg" alt="Gràfiques de potència i velocitat">`
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
    category: "mecanica",
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
    category: "sistemes_control",
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
    category: "sistemes_control",
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
    <br>El poder calorífic del butà és \\(p_{c,butà} = 47\\,\\text{MJ/kg}\\), el preu d’una bombona de \\(m_{butà} = 12,5\\,\\text{kg}\\) és \\(c_{butà} = 17,66\\,€\\) i el seu coeficient d’emissions és \\(e_{butà} = 2,960\\,\\text{kg CO}_2\\text{/kg}\\). L’escalfador de gas té un rendiment \\(η_{butà} = 0,89\\). L’escalfador elèctric té un rendiment \\(η_{elèctr} = 0,97\\), el preu de l’electricitat és \\(c_{elèctr} = 0,21\\,€\\text{/(kWh)}\\) i les emissions són \\(e_{elèctr} = 250\\,\\text{gCO}_2\\text{/(kWh)}\\). Determineu:
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
        c_{e,butà} = 9,01\\,\\text{kg} \\times \\frac{17,66\\,€}{12,5\\,\\text{kg}} = 12,73\\,€
        \\]
        - Cost de l'elèctric (energia consumida \\(E = P_{elèctr} \\times 5\\,\\text{h} = 107,9\\,\\text{kWh}\\)):
        \\[
        c_{e,elèctr} = 107,9\\,\\text{kWh} \\times 0,21\\,€\\text{/kWh} = 22,66\\,€
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
    category: "energia",
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
    category: "mecanica",
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
    category: "mecanica",
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
    },
];
