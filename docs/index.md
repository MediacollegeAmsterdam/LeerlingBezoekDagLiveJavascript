# Leerlingbezoek dag

In deze les ga je leren hoe je met behulp van javascript kan tekenen op een webpagina. Wij hebben alvast wat voorbereidingen voor je gedaan, zodat je daarmee meteen kan beginnen. Onze voorbereidingen bestaan eruit zodat:

- wij hebben een webpagina gemaakt met de naam index.html
- wij hebben op de webpagina een header en een body gemaakt
- wij hebben in de header een link naar een stijl-pagina opgenomen
- wij hebben in de body een canvas element geplaatst
- wij hebben op de een link naar een javascript-bestand opgenomen
- wij hebben in het javascriptbestand een link gemaakt met het canvas-element op de index webpagina
- wij hebben op het canvas-element een 2d context aangebracht, zodat je op de canvas kan tekenen

<a href="{{ site.github.zip_url }}">Download eerst het zip-bestand met de start code</a> en pak het bestand uit.  
Open dan de folder in je code editor en ga aan de slag in de bestanden `index.html` en `script.js`.

---

#### 30 oktober 2019

Lees deze uitleg en probeer de opdrachten die er onder staan.
* [W3schools Canvas introductie](https://www.w3schools.com/graphics/canvas_intro.asp){:target="_blank"}




#### Opdracht 1
- Teken een rechthoek (fillRect) op het canvas
- Teken een rechthoek op x=100, y=200 met een width van 300 en een height van 200;
- Zorg dat de rechthoek een andere kleur dan zwart krijgt (lees over [kleuren](https://www.w3schools.com/css/css_colors.asp){:target="_blank"})

[Hulp](https://www.w3schools.com/graphics/canvas_drawing.asp){:target="_blank"}

---

#### Opdracht 2
- Probeer een streep (line) te tekenen
- Maak nu een lijn

[Hulp](https://www.w3schools.com/graphics/canvas_coordinates.asp){:target="_blank"}

---

#### Opdracht 3
- Probeer een cirkel te tekenen
- Kun je nu ook de Olympische ringen maken?

![Olympische ringen](assets/rings.png)

[Hulp](https://www.w3schools.com/graphics/canvas_coordinates.asp){:target="_blank"}

---

#### Opdracht 4
- Schrijf volgende tekst op het canvas: "Welkom bij Ma!"
- Probeer nu de letter "M" in het wit en de letter "a" in het zwart te maken

[Hulp](https://www.w3schools.com/graphics/canvas_text.asp){:target="_blank"}

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

* Gebruik de code die hier onder staat om iets 10 keer achter elkaar uit te voeren (een loop)  
* Zet op de plek waar `//Jouw code hier ...` staat in de voorbeeldcode, jouw code.
* Probeer tien keer het Ma Logo op het canvas te zetten op een willekeurige (random) positie.

```javascript
for(let i=0; i<10; i++){
    //Jouw code hier schrijven, dit wordt 10x uitgevoerd
}
```

![Mediacollege Logo](assets/ma-logo.png)

---
