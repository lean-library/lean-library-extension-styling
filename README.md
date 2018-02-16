# Development
To develop the styling, run `$ gulp`.

Also in the leanlibrary-extension project run `$ gulp watch`. 

# Workflow & pushen
Pas de styling aan in het leanlibrary-extension-styling project en verhoog hier ook de versie in package.json. 
Push dit naar master.

Ga naar https://bitbucket.org/insydebv/leanlibrary-extension-styling/commits/branch/master, klik op de bovenste commit 
(ook als deze greyed out is, dit is waarschijnlijk een merge) en kopieer de hash in de adresbalk vanaf /commits/ tot 
aan ?at=master.

Ga naar leanlibrary-extension én leanlibrary-app en voer de volgende stappen uit:
1. open package.json (in de root)
2. plak de nieuwe hash achter de "#" op de plaats van de oude
3. run "npm install" (als het goed is wordt nu de package.lock ook geupdated met de nieuwe hash)
4. deploy dit naar de juiste branch (volg de standaard workflow)

Als alleen de styling live gaat en verder niets anders (bijvoorbeeld bij een hotfix): verhoog voor de 
leanlibrary-extension de versie in app/manifest.json
