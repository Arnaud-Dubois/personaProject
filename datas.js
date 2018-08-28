
// *
// DATAS OF RACES AND JOBS
// *

const races = {
    human: {
        maleFirstName: ['Aurlont','Merander','Gyram','Darrick','Hebry','Roberick','Lansire',
        'Iglant','Danforth','Rupert','Archibald','Remy','Gontrand','Theodule','Rogor','Baldwin','Christophe',
        'Horrault','Alfric','Hugo','Aiken','Lino','Julio','Jacob','Lyndon','Felix','Benedict','Marius','Howard','Tommy','Valentinus',
        'Olwen','Ramsay','Renault','Roberto','Dimitri','Silas',
        'Louisix',
        'Clouvisoix',
        'Ordric',
        'Rodmund'],
        femaleFirstName: ['Lilla','Merianne','Richelle','Ammi','Yellen','Limmy','Sarias','Mierelle','Evelyn','Clarice','Cassie','Mathilda',
        'Auldeanne','Maybelle','Gwend','Bertha','Fleur','Beatrix','Elsbeth',
        'Eona'],
        lastName: ['Tasteeh','Hex','Curtis','Gelma','Shatterfist','Folker','Akhob','Bacchus','Godfrey','Harley','Renn','Townguard','Silversmith',
        'Runetouch','Fortemps','Durendale','Chevalier','Hawk','Ford','Wolfram','Cromwell'],
    },
    elf: {
        maleFirstName: ['Athaniar','Anandor','Viridiel','Malanior',
        'Mellitharn','Andissiel','Mardant','Tanavar',
        'Nevariel',
        'Zelel'],
        femaleFirstName: ['Tondi','Mariel','Tharama','Anariel','Driana','Daena','Garnet','Kriele',
        'Feena','Coria','Alanassori','Khardona','Keina','Deliantha','Meridia',
        'Saoho',
        'Vahlomi',
        'Fanis',
        'Laameh',
        'Sierra',
        'Imi',
        'Gwenledyr',
        'Lena'],
        lastName: ['Asgeidottir','Andammas','Reeld','Skywinds','Deis','Morningray','Dawnblade'],
    },
    dwarf: {
        maleFirstName: ['Zwynmoth','Barab','Aradun','Thorin','Magni','Garrim','Wendel','Thurimar','Ulrike',
        'Krydsald','Furga','Harald','Wilfert','Asgall','Taog','Tormod','Fearghas','Calum','Cormac','Tomag',
        'Bruldig','Eiric','Vuksan','Bogomir','Dragan','Njegomir',
        'Rock',
        'Stedd',
        'Junghitar',
        'Fjolnir',
        'Havarr',
        'Auswaltz'],
        femaleFirstName: ['Helga','Chise','Ferya','Tyree','Frieda','Ulla','Cunigonde','Kriemhilde','Ursina','Calaminag','Marta',
        'Krona','Imli','Caitir','Silis','Moenbrynda','Navenka','Zoila','Olga','Ygnizem','Ivana',
        'Khat'],
        lastName: ['Ambermantle','Thunderforge','Hammergrim','Thornsteel','Chunderstout','Drei','Bryndoesyn',
        'Rod','Reinhart',
        'Winteringot',
        'Stulwamn',
        'Melgwot',
        'Wur',
        'Humbledew',
        'Zwei',
        'Kriegg'],
    },
    halforc: {
        maleFirstName: ['Strango','Thrum','Drog','Gorrum','Harg','Thurg','Karg','Azok','Ruth','Duluk','Golub',
        'Bron','Turok','Garaddon','Hruon','Jeddek','Argo','Kharag','Podagog',
        'Gozz',
        'Kerg',
        'Rugzoth',
        'Tsarg',
        'Tarshim',
        'Dabu'],
        femaleFirstName: ['Groma','Igrim','Dragga','Grima','Morne','Borga','Glasha','Shel','Dura','Mogaka',
        'Oghe','Serga','Grenda','Beruma'],
        lastName: ['Sad','Rockband','Hellkill','Gnan','Ironfury','Judrod','Kach','Hellsmile','Elfkiller','Fistcrusher','Plainstalker',
        'Blackball'
        ],
    },
    gnome: {
        maleFirstName: ['Grobnick','Kazbo','Hagin','Gamash','Beedle','Caesar','Raraju','Urupa',
        'Mefeero','Sazai','Zautso','Nunuzac','Mephianse','Mufufu','Coco','Magus',
        'Los',
        'Reck',
        'Gon',
        'Tututuqo'],
        femaleFirstName: ['Snuwi','Snoonose','Beggra','Nefti','Sorassa','Tomomi','Zerla','Ami','Sade','Ciel',
        'Mefeero','Queena','Rossa','Lulu','Fulupi','Zilly','Lene','Kulata','Momoko',
        'Donana',
        'Poruju'],
        lastName: ['Pipli','Poco','Miss','Focks','Gigi','Meth','Airslicer','Bombtosser','Steamgear','Manclamp','Leafgrinder'],
    },
    halfelin: {
        maleFirstName: ['Pralisu','Den','Grall','Fitz','Cormac','Loch','Donnan','Moirin','Blaine','Elan','Khaled','Winston',
        'Kutotas','Frietz','Denm','Brendan','Fergus','Fin','Paddy','Teague','Aengus','Liam','Isaac','Padraig','Iomhair',
        'Mer',
        'Dodu',
        'Vard',
        'Tard'],
        femaleFirstName: ['Sepi','Lughna','Haejae','Leopolda','Rosemary','Merle','Faith','Seraphine','Nora','Emer','Ellen','Grania','Deirdre',
        'Ezonri','Keavy','Rosheen','Maeve','Margaret'],
        lastName: ['Vlebraldon','Bandor','Volmug','Greenblossom','Kinchulbai','Brannigan','Fallon','O\Connel','Mclean','McGlinchy'],
    },
    halfelf: {
        maleFirstName: ['Uldulas','Alsbuh','Asu','Korlau','Shul','Ikari','Tao','Altahir','Za'],
        femaleFirstName: ['Helthinn','Trese','Mig','Gal','Shi','Mith','Hai','So','Tia','Shae','Misty','Nya'],
        lastName: ['Krim','Betrimal','Bedogna','Fes','Pioth','Sterks','Slind','Luna','Warudo'],
    }
}

const jobs = {
    merchant: {
        name: 'marchand',
        stuff: ['Lanterne','Couteau','Turban','Bourse','Potion','Poison'],
    },
    bard: {
        name: 'barde',
        stuff: ['Harpe','Ukulele','Violon','Guitare','Morgenstern','Cimeterre','Arc'],
    },
    druid: {
        name: 'druide',
        stuff: ['Peau de loup','Baton','Griffes d\'ours','Une pierre','Collier'],
    },
    magician: {
        name: 'magicien',
        stuff: ['Orbe','Parchemin','Un grimoire','Canne','Baguette','Chapeau pointu','Poudre magique'],
    },
    monk: {
        name: 'moine',
        stuff: ['Un slip','Un coup de poing','Un rosaire','Un nunchuk'],
    },
    warrior: {
        name: 'guerrier',
        stuff: ['Arme tranchante','Arme contondante','Arme agassante','Un kilt','Un casque de viking','Un drapeau'],
    },
    paladin: {
        name: 'paladin',
        stuff: ['Une épée et un bouclier','Une bible','Une armure très brillante','Morgenstern','Hallebarde']
    },
    priest: {
        name: 'prêtre',
        stuff: ['Une croix','Une dague','Un cierge','Du tissu','Un fouet']
    },
    ranger: {
        name: 'rôdeur',
        stuff: ['Un perroquet sur l\'épaule','Une hache','Des pantoufles en peau d\'ours','Une armure en cuir']
    },
    thief: {
        name: 'roublard',
        stuff: ['Une bourse','Des dagues','Des chaussures de ninja','Un trefle','Une corde']
    }
}

const spec = ['Du Nord','Du Sud','Poilu','Imposant','Petit','Des forêts','Des montagnes','Des Lacs','Doigts de fée','Ancien','Jeune',
'Peau pâle','Peau noire','Blond','De la nature','D\'un autre monde','Adepte de la magie','Peau étrange','Costaud','Ballafré',
'Des grottes','Orfèvre'
]

const traits = ['Aimable','Sombre','Névrosé','Hautain','Fourbe','Confiant','Agile','Beau-parleur','Isolé','Ami des animaux','Robuste',
'Bienveillant','Fanatique','Inquisiteur','Lunatique','Musclé','Discipliné','Aveugle','Sourd','Muet','Irritable','Érudit','Conciliant','Sociable',
'Poète','Confiant','Bruyant','Pauvre','Riche','Passif agressif','Agressif','Hautain','Solitaire','Grincheux'
]



// *
// END OF DATAS
// *