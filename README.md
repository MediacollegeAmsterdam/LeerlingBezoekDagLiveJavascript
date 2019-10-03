# Leerlingbezoek dag 

#### 30 oktober 2019

Lees deze uitleg en probeer de opdrachten die er onder staan
* [W3schools Canvas introductie](https://www.w3schools.com/graphics/canvas_intro.asp)



#### Opdracht 1
- Teken een rechthoek (fillRect) op het canvas
- Teken een rechthoek op x=100, y=200 met een width van 300 en een height van 200;
- Zorg dat de rechthoek een andere kleur dan zwart krijgt (lees over [kleuren](https://www.w3schools.com/css/css_colors.asp)) 

Hulp: https://www.w3schools.com/graphics/canvas_drawing.asp

---

#### Opdracht 2
- Probeer een streep (line) te tekenen
- Maak nu een lijn  

Hulp: https://www.w3schools.com/graphics/canvas_coordinates.asp

---

#### Opdracht 3
- Probeer een cirkel te tekenen
- Kun je nu ook de Olympische ringen maken? 

![Olympische ringen](images/rings.png)

Hulp: https://www.w3schools.com/graphics/canvas_coordinates.asp

---

#### Opdracht 4
- Schrijf volgende tekst op het canvas: "Welkom bij Ma!"
- Probeer nu de letter M in het wit en de letter a in het zwart te maken

Hulp: https://www.w3schools.com/graphics/canvas_text.asp

---

#### Opdracht 5
Gebruik deze code om een random getal te krijgen tussen 

```javascript
function getRandom(max){
    return Math.floor(Math.random() * max);
}
```

```javascript
let x = random(100);
let y = random(100);
ctx.moveTo(x,y);
```

---

#### Opdracht 6
* Gebruik nu de code die hier onder staat om iets 10 keer achter elkaar uit te voeren (een loop)

![Mediacollege Logo](images/ma-logo.png)

Zit op de plek waar `//Jouw code hier` de oplossing

```javascript
for(let i=0; i<10; i++){
    //Jouw code hier
}
```

* Zet tien keer het Ma Logo op het canvas op een willekeurige (random) plaats

---