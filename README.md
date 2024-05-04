# CompetitorsDevider

## Jak stáhnout, nainstalovat a spustit

Takhle se stáhne.
![image](https://github.com/Ailta/CompetitorsDevider/assets/29490877/57bdb8fe-3eed-473d-8ec6-2503ec381e74)
Pak stačí jen extrahovat.


Tady se to rozdělí na dva způsoby jak to nainstalovat a spustit.
**1.**
Toto je automatizovanější způsob instalace a spuštění.
Druhý existuje pro to kdyby to nešlo automaticky.

1.Po extrahování spusťte install.bat který obsahuje tyto příkazi:
`start /WAIT "." node-v22.1.0-x64.msi
cd ./src/
npm install`
Až se vám ukáže světlé okno, tak stačí klikat na next a pak install.

2.Pak stačí jen spustit run.bat který obsahuje tyto příkazi:
`cd ./src/
npm run dev`

![image](https://github.com/Ailta/CompetitorsDevider/assets/29490877/761753d8-a53c-4f46-98f1-926b5ea6f186)


**2.**
Kdyby z nějakého důvodu ten první způsob nešel, tak se to musí udělat více manuálně.
1. Spusťte soubor s názvem: node-v22.1.0-x64.msi
2. Jen to odklikejte, stačí klikat na next a pak install.
3. Po instalaci node.js je potřeba nainstalovat balíčky.
4. Stačí vlízt do adresáře src a nahoře jak je cesta do adresáře tak tam stačí kliknout a napsat "/cmd".
![image](https://github.com/Ailta/CompetitorsDevider/assets/29490877/eeab511a-65e9-4fcc-9e87-0c1aaba56492)

5. Otevře se příkazová řádka, tam jen stačí napsat "npm install" a pak "npm run dev".


A na konec, v konzoli se vypíše > http://localhost:6060
To pak stačí dát do prohlížeče a hotovo.
