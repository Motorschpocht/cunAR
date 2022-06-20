const manual = {
    1: {
        id: 1,
        ar: false,
        title: 'Hauptschalter einschalten',
        content: '<p>Stellen Sie den Hauptschalter der Laborhalle auf "ON".</p><p>Er befindet sich hinter dem Vorhang auf der Rückseite der Halle.</p><img src="static/img/hauptschalter.jpg" alt="Hauptschalter">',
        mapTop: 90,
        mapLeft: 89
    },
    2: {
        id: 2,
        ar: false,
        title: 'Trocknungseinheit einschalten',
        content: '<p>Stellen Sie den Drehschalter der Trocknungseinheit auf "I".</p><p>Warten Sie auf die Bereitschaft des Gerätes und betätigen Sie die linke Taste mit der Aufschrift "ON".</p><img src="static/img/trocknungseinheit.jpg" alt="Trocknungseinheit">',
        mapTop: 66,
        mapLeft: 78
    },
    3: {
        id: 3,
        ar: false,
        title: 'Sauger einschalten',
        content: '<p>Stellen Sie den Drehschalter des Saugers auf "ON".</p><img src="static/img/sauger.jpg" alt="Sauger">',
        mapTop: 35,
        mapLeft: 76
    },
    4: {
        id: 4,
        ar: false,
        title: 'Dosiergerät einschalten',
        content: '<p>Stellen Sie den Kippschalter auf der Rückseite des Dosiergerätes auf "I".</p><img src="static/img/dosiergerät.jpg" alt="Dosiergerät">',
        mapTop: 28,
        mapLeft: 62
    },
    5: {
        id: 5,
        ar: false,
        title: 'Robotereinheit einschalten',
        content: '<p>Stellen Sie den Drehschalter der Robotereinheit auf "ON".</p><img src="static/img/robotereinheit.jpg" alt="Robotoreinheit">',
        mapTop: 23,
        mapLeft: 45
    },
    6: {
        id: 6,
        ar: false,
        title: 'Laser einschalten',
        content: '<p>Stellen Sie den Kippschalter auf der Rückseite des Lasers auf "ON".</p><img src="static/img/laser.jpg" alt="Laser">',
        mapTop: 14,
        mapLeft: 29
    },
    7: {
        id: 7,
        ar: false,
        title: 'Hintere Tür schließen',
        content: '<p>Schließen Sie die hintere Maschinentür und quittieren Sie den Vorgang durch Betätigung der blauen Taste.</p><img src="static/img/hinteretür.jpg" alt="Hintere Tür">',
        mapTop: 14,
        mapLeft: 29
    },
    8: {
        id: 8,
        ar: false,
        title: 'Temperiergerät einschalten',
        content: '<p>Stellen Sie den Dreschalter des Temperiergerätes auf "I".</p><img src="static/img/temperiergerät.jpg" alt="Laser">',
        mapTop: 30,
        mapLeft: 1
    },
    9: {
        id: 9,
        ar: false,
        title: 'Vordere Tür schließen',
        content: '<p>Schließen Sie die vordere Tür vollständig und quittieren Sie den Vorgang durch Betätigung der blauen Taste mit der Aufschrift "R".</p><img src="static/img/vorderetür.jpg" alt="Vordere Tür">',
        mapTop: 73,
        mapLeft: 29
    },
    10: {
        id: 10,
        ar: true,
        marker: 'Cup',
        title: 'Linke Pfeiltaste drücken',
        content: '<p>Die <img class="inline" src="static/img/links.png" alt="Links">-Taste neben dem <img class="inline" src="static/img/R.jpg" alt="R">-Feld blinkt, drücken Sie diese.</p><img src="static/img/pfeiltaste.jpg" alt="Linke Pfeiltaste">',
        height: 1,
        width: 1,
        xpos: -.5,
        ypos: 0,
        zpos: 1.08,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    11: {
        id: 11,
        ar: true,
        marker: 'Cup',
        title: 'Hydraulikmotor einschalten',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/hydraulikmotor.png" alt="Hydraulikmotor">-Taste auf der unteren linken Bildschirmseite, um den Hydraulikmotor einzuschalten.</p><img src="static/img/hydraulikmotor.jpg" alt="Hydraulikmotor">',
        height: 1,
        width: 1,
        xpos: -12.1,
        ypos: 0,
        zpos: 7.3,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    12: {
        id: 12,
        ar: true,
        marker: 'Cup',
        title: 'Heizung einschalten',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/heizung.png" alt="Heizung">-Taste auf der unteren linken Bildschirmseite, um die Heizung einzuschalten.</p><img src="static/img/heizung.jpg" alt="Heizung">',
        height: 1,
        width: 1,
        xpos: -11.35,
        ypos: 0,
        zpos: 7.3,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    13: {
        id: 13,
        ar: false,
        title: 'Roboter aktivieren',
        content: '<p>Nehmen sie das KUKA smartPAD-2 in die Hand und drücken Sie die <img class="inline" src="static/img/R.jpg" alt="R">-Taste in der unteren rechten Ecke des Touchscreens.</p><img src="static/img/smartpad.jpg" alt="smartPAD">',
        mapTop: 21,
        mapLeft: 41
    },
    14: {
        id: 14,
        ar: false,
        title: 'Handbetrieb aktivieren',
        content: '<p>Drehen Sie den Modusschalter auf das Zahnradsymbol.</p><p>Auf dem Touchscreen wird die Einstellung für den Handbetrieb angezeigt, stellen Sie sicher, dass "T1" für Handbetrieb eingestellt ist.</p><p>Drehen Sie den Modusschalter wieder in die senkrechte Ausgangsposition.</p><img src="static/img/modusschalter.jpg" alt="Modusschalter">',
        mapTop: 21,
        mapLeft: 41
    },
    15: {
        id: 15,
        ar: false,
        title: 'Position ermitteln',
        content: '<p>Halten Sie eine der Tasten auf der Rückseite des smartPADs mit einer Hand gedrückt. Die Geschwindigkeit soll auf 0% stehen und kann mit "-" auf der rechten Seite verändert werden.</p><p>Drücken Sie auf "Start", bis die Koordinaten auf dem Bildschirm erscheinen.</p><img src="static/img/position.jpg" alt="Position">',
        mapTop: 21,
        mapLeft: 41
    },
    16: {
        id: 16,
        ar: true,
        marker: 'Cup',
        title: 'In Grundstellung fahren',
        content: '<p>Halten Sie die <img class="inline" src="static/img/grundstellung.png" alt="Grundstellung">-Taste gedrückt und drücken Sie währenddessen einmalig die <img class="inline" src="static/img/start.png" alt="Start">-Taste. Die Maschine beginnt mit der Fahrt in die Grundstellung.</p><img src="static/img/grundstellung.jpg" alt="Grundstellung">',
        height: 1,
        width: 1,
        xpos: -6.6,
        ypos: 0,
        zpos: 7.5,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    17: {
        id: 17,
        ar: false,
        title: 'Roboter beschleunigen',
        content: '<p>Erhöhen Sie die Geschwindigkeit des Roboters auf ca. 10% durch Drücken der Taste "+" auf dem smartPAD.</p><img src="static/img/plus.jpg" alt="Plus">',
        mapTop: 21,
        mapLeft: 41
    },
    18: {
        id: 18,
        ar: false,
        title: 'Grundstellung prüfen',
        content: '<p>Überprüfen Sie, ob die <img class="inline" src="static/img/grundstellungerreicht.png" alt="Grundstellung erreicht">-Taste am Bedienfeld dauerhaftet leuchtet. In diesem Fall wurde die Grundstellung erreicht.</p><img src="static/img/grundstellungerreicht.jpg" alt="Grundstellung">',
        mapTop: 70,
        mapLeft: 40
    },
    19: {
        id: 19,
        ar: false,
        title: 'Geschwindkeit reduzieren',
        content: '<p>Reduzieren Sie die Geschwindigkeit des Roboters wieder auf 0% durch Drücken der Taste "-" auf dem smartPAD.</p><img src="static/img/minus.jpg" alt="Minus">',
        mapTop: 21,
        mapLeft: 41
    },
    20: {
        id: 20,
        ar: false,
        title: 'Aufwärmprozess abwarten',
        content: '<p>Die Maschine heizt nun auf, die verbleibende Wartezeit wird eingeblendet. Sie können in der Zwischenzeit mit den nächsten Schritten fortfahren.</p><img src="static/img/aufwärmprozess.jpg" alt="Aufwärmprozess">',
        mapTop: 70,
        mapLeft: 40
    },
    21: {
        id: 21,
        ar: false,
        title: 'Absaugung einschalten',
        content: '<p>Stellen Sie den Schalter an der linken Seite des Schaltkastens der Absaugung auf die obere Position.</p><img src="static/img/absaugung.jpg" alt="Absaugung">',
        mapTop: 67,
        mapLeft: 54
    },
    22: {
        id: 22,
        ar: false,
        title: 'Absaugung vorbereiten',
        content: '<p>Ziehen Sie die Lüftungsklappe an der Unterseite der Absaugung auf.</p><img src="static/img/lüftungsklappe.jpg" alt="Lüftungsklappe">',
        mapTop: 66,
        mapLeft: 78
    },
    23: {
        id: 23,
        ar: true,
        marker: 'Cup',
        title: 'Werkzeug öffnen',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/pressform.png" alt="Pressform">-Taste, um die Pressform aufzufahren.</p><img src="static/img/pressform.jpg" alt="Pressform">',
        height: 1,
        width: 1,
        xpos: -12,
        ypos: 0,
        zpos: 8.2,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    24: {
        id: 24,
        ar: true,
        marker: 'Cup',
        title: 'Ausspritzautomatik starten',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/ausspritzautomatik.png" alt="Ausspritzautomatik">-Taste zweimal, um die Ausspritzautomatik des Aggregats zu starten.</p><img src="static/img/ausspritzautomatik.jpg" alt="Ausspritzautomatik">',
        height: 1,
        width: 1,
        xpos: -2.1,
        ypos: 0,
        zpos: 8.2,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    25: {
        id: 25,
        ar: false,
        title: 'Düse reinigen',
        content: '<p>Öffnen Sie die Abdeckung und Klappe des Aggregates und entfernen Sie die Materialreste.</p><p>Anschließend schließen Sie das Aggregat wieder.</p><img src="static/img/düse.jpg" alt="düse">',
        mapTop: 72,
        mapLeft: 28
    },
    26: {
        id: 26,
        ar: true,
        marker: 'Cup',
        title: 'Aggregat verfahren',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/aggregat.png" alt="Aggregat">-Taste, um das Aggregat zu verfahren.</p><p>Dies ermöglicht ein Stück Pappe unterhalb des Aggregates zu legen, um Materialreste aufzufangen.</p><img src="static/img/aggregat.jpg" alt="Aggregat">',
        height: 1,
        width: 1,
        xpos: -6.8,
        zpos: 8.2,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    27: {
        id: 27,
        ar: true,
        marker: 'Cup',
        title: 'Ausspritzautomatik starten',
        content: '<p>Schließen Sie die Tür und drücken Sie die <img class="inline" src="static/img/ausspritzautomatik.png" alt="Ausspritzautomatik">-Taste, um die Ausspritzautomatik zu starten.</p><p>Prüfen Sie anschließend, ob eventuell vorhandene Materialfäden händisch zu entfernen sind.</p><p>Entnehmen Sie das Stück Pappe mit den Materialresten und schließen Sie die Tür wieder.</p><img src="static/img/ausspritzautomatik.jpg" alt="Ausspritzautomatik">',
        height: 1,
        width: 1,
        xpos: -2.1,
        ypos: 0,
        zpos: 8.2,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    28: {
        id: 28,
        ar: true,
        marker: 'Cup',
        title: 'Dosierung einstellen',
        content: '<p>Stellen Sie die Dosierung auf 140 durch Drücken der <img class="inline" src="static/img/dosierung.png" alt="Dosierung">-Taste.</p><img src="static/img/dosierung.jpg" alt="Dosierung">',
        height: 1,
        width: 1,
        xpos: -4.1,
        ypos: 0,
        zpos: 8.2,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    29: {
        id: 29,
        ar: true,
        marker: 'Cup',
        title: 'Produktion starten',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/produktion.png" alt="Produktion">-Taste, um die Produktion zu starten.</p><img src="static/img/produktion.jpg" alt="Produktion">',
        height: 1,
        width: 1,
        xpos: -2.9,
        ypos: 0,
        zpos: 7.5,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    30: {
        id: 30,
        ar: true,
        marker: 'Cup',
        title: 'Start drücken',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/start.png" alt="Start">-Taste, die Applikation auf dem Touchscreen leuchtet orange.</p><img src="static/img/start.jpg" alt="Start">',
        height: 1,
        width: 1,
        xpos: -2.1,
        ypos: 0,
        zpos: 7.5,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    31: {
        id: 31,
        ar: true,
        marker: 'Cup',
        title: 'Produktion unterbrechen',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/zyklus.png" alt="Zyklus">-Taste", um die Produktion wieder zu stoppen, da vorerst nur Ausschuss produziert wird.</p><p>Die Maschine wird unvollständige Becher produzieren.</p><img src="static/img/zyklus.jpg" alt="Zyklus">',
        height: 1,
        width: 1,
        xpos: -4.1,
        ypos: 0,
        zpos: 7.5,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    32: {
        id: 32,
        ar: true,
        marker: 'Cup',
        title: 'Automatik ausschalten',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/produktion.png" alt="Produktion">-Taste, um die Automatik auszuschalten.</p><img src="static/img/produktion.jpg" alt="Produktion">',
        height: 1,
        width: 1,
        xpos: -2.9,
        ypos: 0,
        zpos: 7.5,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    33: {
        id: 33,
        ar: false,
        title: 'Unfertige Becher entfernen',
        content: '<p>Öffnen Sie die Tür und entfernen Sie die unvollständigen Becher vorsichtig mit einem Hammer und dem bereitliegenden Werkzeug.</p><img src="static/img/becherentfernen.jpg" alt="Becher entfernen">',
        mapTop: 72,
        mapLeft: 28
    },
    34: {
        id: 34,
        ar: false,
        title: 'Tür schließen und quittieren',
        content: '<p>Schließen Sie die Tür und quittieren Sie mit der Taste "R".</p><img src="static/img/vorderetür.jpg" alt="Vordere Tür">',
        mapTop: 72,
        mapLeft: 28
    },
    35: {
        id: 35,
        ar: true,
        marker: 'Cup',
        title: 'Produktion starten',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/produktion.png" alt="Produktion">-Taste, um die Produktion zu starten.</p><img src="static/img/produktion.jpg" alt="Produktion">',
        height: 1,
        width: 1,
        xpos: -2.9,
        ypos: 0,
        zpos: 7.5,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    36: {
        id: 36,
        ar: true,
        marker: 'Cup',
        title: 'Start drücken',
        content: '<p>Drücken Sie die <img class="inline" src="static/img/start.png" alt="Start">-Taste, die Applikation auf dem Touchscreen leuchtet orange.</p><img src="static/img/start.jpg" alt="Start">',
        height: 1,
        width: 1,
        xpos: -2.1,
        ypos: 0,
        zpos: 7.5,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 70,
        mapLeft: 40
    },
    37: {
        id: 37,
        ar: false,
        title: 'Roboter beschleunigen',
        content: '<p>Halten Sie eine der Tasten auf der Rückseite des smartPADs mit einer Hand gedrückt und erhöhen Sie die Geschwindigkeit des Roboters mithilfe des smartPADs während des Anfahrens mit der Taste "+" auf 50% und anschließend auf 100%.</p><p>Die ersten zwei Becher werden automatisch als Ausschuss ausgeworfen, da sie von verminderter Qualität sind.</p><img src="static/img/plus.jpg" alt="Plus">',
        mapTop: 21,
        mapLeft: 41
    },
    38: {
        id: 38,
        ar: true,
        marker: 'Laser',
        title: 'Menü aufrufen',
        content: '<p>Drücken Sie die Taste "Menu", um zum Hauptmenü zu gelangen.</p><img src="static/img/menü.jpg" alt="Menü">',
        height: 1,
        width: 1,
        xpos: 4.2,
        ypos: 0,
        zpos: 1.9,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 15,
        mapLeft: 11
    },
    39: {
        id: 39,
        ar: true,
        marker: 'Laser',
        title: 'Aufträge aufrufen',
        content: '<p>Wählen Sie den Punkt "Job" durch Drehen des Steuerrades und drücken Sie dieses, um zu bestätigen.</p><img src="static/img/steuerrad.jpg" alt="Steuerrad">',
        height: 1,
        width: 1,
        xpos: 5,
        ypos: 0,
        zpos: 1,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 15,
        mapLeft: 11
    },
    40: {
        id: 40,
        ar: true,
        marker: 'Laser',
        title: 'Applikation auswählen',
        content: '<p>Wählen Sie die Laser-Applikation des gewünschten Auftrages durch Drehen des Steuerrades und drücken Sie dieses, um zu bestätigen.</p><img src="static/img/steuerrad.jpg" alt="Steuerrad">',
        height: 1,
        width: 1,
        xpos: 5,
        ypos: 0,
        zpos: 1,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 15,
        mapLeft: 11
    },
    41: {
        id: 41,
        ar: true,
        marker: 'Laser',
        title: 'Auftrag zuweisen',
        content: '<p>Drücken Sie die Taste "F1", um den Auftrag zuzuweisen.</p><img src="static/img/f1.jpg" alt="F1">',
        height: 1,
        width: 1,
        xpos: 5.1,
        ypos: 0,
        zpos: -2.6,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 15,
        mapLeft: 11
    },
    42: {
        id: 42,
        ar: true,
        marker: 'Laser',
        title: 'Zurückkehren',
        content: '<p>Durch zweimaliges Drücken der ESC-Taste gelangen Sie auf den Hauptbildschirm zurück. Dort wird der aktuell ausgewählte Schriftzug angezeigt.</p><img src="static/img/esc.jpg" alt="Esc">',
        height: 1,
        width: 1,
        xpos: 1.2,
        ypos: 0,
        zpos: 0.4,
        xrot: -90,
        yrot: 0,
        zrot: 0,
        mapTop: 15,
        mapLeft: 11
    },
    43: {
        id: 43,
        ar: false,
        title: 'Inbetriebnahme abgeschlossen',
        content: '<p>Die CUNA-Produktion ist nun vollständig in Betrieb genommen.</p><p>Mithilfe der grünen Taste lässt sich der Antrieb des Förderbandes manuell steuern.</p><img src="static/img/förderband.jpg" alt="Förderband">',
        mapTop: 15,
        mapLeft: 11
    }
};