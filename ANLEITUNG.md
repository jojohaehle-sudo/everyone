# EVERYONE als installierbare App (PWA)

## Inhalt
- index.html – die App
- manifest.webmanifest – Name, Farben und Icons der App
- sw.js – Service Worker (Offline-Start)
- icons/ – App-Icons (192, 512, maskable, iOS 180, Favicon)

## Veröffentlichen mit GitHub Pages (kostenlos)
1. Auf github.com ein neues Repository anlegen, z. B. "everyone".
2. Alle Dateien und den Ordner "icons" hochladen (Add file > Upload files).
3. Settings > Pages > Source: "Deploy from a branch", Branch "main", Ordner "/ (root)".
4. Nach 1–2 Minuten ist die App unter https://DEINNAME.github.io/everyone/ erreichbar.

## Auf dem Handy installieren
- iPhone (Safari): Teilen-Symbol > "Zum Home-Bildschirm".
- Android (Chrome): Menü (drei Punkte) > "App installieren" bzw. "Zum Startbildschirm hinzufügen".

## Wichtig
- Die Seite muss über https laufen (GitHub Pages tut das). Beim Öffnen der Datei direkt vom Rechner (file://) funktionieren Installation und Offline-Modus nicht.
- Nach Änderungen an der App in sw.js die Versionsnummer (const V) erhöhen, damit Handys die neue Version laden.
- Die Schriftart Atkinson Hyperlegible wird online von Google Fonts geladen. Offline zeigt die App Verdana als Ersatzschrift.
