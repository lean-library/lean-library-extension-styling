# Development
To develop the styling, run `$ gulp`.

Also in the leanlibrary-extension project run `$ gulp watch`. 

# Deployment
Wil je de styling wijzigen en dit live zetten? Doe dit als volgt:
Pas de styling aan in het leanlibrary-extension-styling project en verhoog hier ook de versie in package.json. Deploy dit naar master.

Ga naar het leanlibrary-extension project en doe hier "npm install lean-library-extension-styling". In je console krijg je nu een link met een nieuwe hash (eentje die begint met git+ssh). Kopieer alles wat er tussen de haakjes staat naar je clipboard.

Open nu package-lock.json en plak hier de link met de nieuwe hash bij "version" onder "lean-library-extension-styling".

Open nu voordat je dit deployt de manifest.json en verhoog hier ook de versie.