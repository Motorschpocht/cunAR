# cunAR

## Einleitung
Diese Anwendung wurde im Zuge des Moduls "Projektmanagement / Studienprojekt" des Fachbereiches 7 der Technischen Hochschule Ostwestfalen-Lippe im Auftrag der SmartFactoryOWL entwickelt.
Sie enthält eine geführte Anleitung für die Inbetriebnahme der CUNA-Produktion.

## Bibliotheken
- [Alpine.js](https://alpinejs.dev/)
- [AR.js](https://github.com/AR-js-org/AR.js)
- [A-Frame](https://github.com/aframevr/aframe)
- [A-Frame AR](https://github.com/chenzlabs/aframe-ar)
- [A-Frame HTML Shader](https://github.com/mayognaise/aframe-html-shader)

Alle eingesetzten Bibliotheken verfügen über eine MIT-Lizenz und können auch für closed-source Projekt im kommerziellen Umfeld genutzt werden.

## Starten
Starten Sie die `index.html`, um die Anwendung im Browser auszuführen.
Alternativ: Installieren Sie [http-server](https://www.npmjs.com/package/http-server) und starten Sie `start.bat`, um die Anwendung auf `localhost:8080` zu hosten.

## Änderungen
### Anleitung
Änderungen an der Anleitung können in der Datei `manual.js` vorgenommen werden. Sollten neue Schritte hinzugefügt werden, müssen die IDs der folgendenen Schritte hochgezählt werden. Für Schritte mit AR-Unterstützung muss der Marker und die Koordinaten/Rotationswinkel anggeben werden. Ebenfalls benötigen alle Schritte Koordianten für den Lageplan.
Der Inhalt muss im HTML-Format angegeben werden:
- Paragraphen beginnen mit `<p>` und enden mit `</p>`
- Bilder werden in der Form `<img src="../static/img/bild.jpg" alt="Bezeichnung">` angegeben
- Bilder im Fließtext benötigen zusätzlich `class="inline"`
### Styling
Das CSS wird mit mit SASS kompiliert. Installieren Sie [sass](https://www.npmjs.com/package/sass) und starten Sie `style.bat`, um SCSS-Dateien auf Änderungen zu überwachen und automatisch neu zu generieren.
