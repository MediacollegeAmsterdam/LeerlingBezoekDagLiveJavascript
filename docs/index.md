# Leerlingbezoek dag 

#### 30 oktober 2019

Lees deze uitleg en probeer de opdrachten die er onder staan
* [W3schools Canvas introductie](https://www.w3schools.com/graphics/canvas_intro.asp)



#### Opdracht 1
- Teken een rechthoek (fillRect) op het canvas
- Teken een rechthoek op x=100, y=200 met een width van 300 en een height van 200;
- Zorg dat de rechthoek een andere kleur dan zwart krijgt (lees over [kleuren](https://www.w3schools.com/css/css_colors.asp)) 

[Hulp](https://www.w3schools.com/graphics/canvas_drawing.asp)

---

#### Opdracht 2
- Probeer een streep (line) te tekenen
- Maak nu een lijn  

[Hulp](https://www.w3schools.com/graphics/canvas_coordinates.asp)

---

#### Opdracht 3
- Probeer een cirkel te tekenen
- Kun je nu ook de Olympische ringen maken? 

![Olympische ringen](assets/rings.png)

[Hulp](https://www.w3schools.com/graphics/canvas_coordinates.asp)

---

#### Opdracht 4
- Schrijf volgende tekst op het canvas: "Welkom bij Ma!"
- Probeer nu de letter M in het wit en de letter a in het zwart te maken

[Hulp](https://www.w3schools.com/graphics/canvas_text.asp)

---

#### Opdracht 5
Gebruik deze code om een random getal te krijgen tussen 0 en `max`

```javascript
function getRandom(max){
    return Math.floor(Math.random() * max);
}
```

```javascript
// x = willekeurig getal tussen 0 en 100
let x = getRandom(100);

// y = willekeurig getal tussen 0 en 200
let y = getRandom(200);

ctx.moveTo(x,y);
```

---

#### Opdracht 6

* Gebruik nu de code die hier onder staat om iets 10 keer achter elkaar uit te voeren (een loop)  
* Zet op de plek waar `//Jouw code hier` staat in de voorbeeldcode, jouw code.
* Probeer tien keer het Ma Logo op het canvas te zetten op een willekeurige (random) positie.

```javascript
for(let i=0; i<10; i++){
    //Jouw code hier schrijven, dit wordt 10x uitgevoerd
}
```

![Mediacollege Logo](assets/ma-logo.png)

---