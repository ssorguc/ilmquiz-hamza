"use strict";

/*Global*/

let kviz1 = [
  {
    redniBroj: 1,
    pitanje: "1. Koliko ajeta ima sura El-Fatiha?",
    odgovori: ["a) 6", "b) 9", "c) 7"],
    tacanOdgovor: "c",
    name: "odgovor1"
  },
  {
    redniBroj: 2,
    pitanje: "2. Koja je po redu u Kur'anu sura El-Fatiha?",
    odgovori: ["a) 1", "b) 89", "c) 106"],
    tacanOdgovor: "a",
    name: "odgovor2"
  },
  {
    redniBroj: 3,
    pitanje: "3. O cemu se govori u suri El-Fatihi?",
    odgovori: ["a) O objavi Kur'ana", "b) O zastiti od sejtana", "c) O zahvali prema Allahu dz.s"],
    tacanOdgovor: "c",
    name: "odgovor3"
  },
  {
    redniBroj: 4,
    pitanje: "4. Kako se u arapskom jeziku kaze rijec 'zahvala'",
    odgovori: ["a) El Insikak", "b) El-Hamd", "c) Ez-zarijaat"],
    tacanOdgovor: "b",
    name: "odgovor4"
  },
  {
    redniBroj: 5,
    pitanje: "5. Gdje je sura El-Fatiha objavljena",
    odgovori: ["a) U Medini", "b) U Mekki", "c) U Rijadu"],
    tacanOdgovor: "b",
    name: "odgovor5"
  },
  {
    redniBroj: 6,
    pitanje: "6. Koja je sura poslije El-Fatihe?",
    odgovori: ["a) En-Nisa", "b) El-Bekara", "c) En-Nas"],
    tacanOdgovor: "b",
    name: "odgovor6"
  },
  {
    redniBroj: 7,
    pitanje: "7. Koliko imena ima sura El-Fatiha?",
    odgovori: ["a) 1", "b) 6", "c) 12"],
    tacanOdgovor: "c",
    name: "odgovor7"
  },
  {
    redniBroj: 8,
    pitanje: "8. Kako prevesti rijec 'El-Fatiha' na nas jezik?",
    odgovori: ["a) Otvaranje", "b) Ulaz", "c) Zahvala"],
    tacanOdgovor: "a",
    name: "odgovor8"
  },
  {
    redniBroj: 9,
    pitanje: "9. Koliko rijeci ima u suri El-Fatihi?",
    odgovori: ["a) 18", "b) 25", "c) 39"],
    tacanOdgovor: "b",
    name: "odgovor9"
  },
  {
    redniBroj: 10,
    pitanje: "10. Koliko slova ima sura El-Fatiha?",
    odgovori: ["a) 93", "b) 115", "c) 123"],
    tacanOdgovor: "c",
    name: "odgovor10"
  },
];

let kviz2 = [
  {
    redniBroj: 1,
    pitanje: "1. Koliko je ukupno bilo poslanika?",
    odgovori: ["a) 145", "b) 1478", "c) 12400"],
    tacanOdgovor: "c",
    name: "odgovor11"
  },
  {
    redniBroj: 2,
    pitanje: "2. Koliko je poslanika spomenuto u Kur'anu?",
    odgovori: ["a) 15", "b) 25", "c) 35"],
    tacanOdgovor: "b",
    name: "odgovor12"
  },
  {
    redniBroj: 3,
    pitanje: "3. Koliko je bilo poslanika koji su smatrani kao ulul-'azm?",
    odgovori: ["a) 3", "b) 6", "c) 9"],
    tacanOdgovor: "b",
    name: "odgovor13"
  },
  {
    redniBroj: 4,
    pitanje: "4. Koji je od ovih poslanika ulul-azm?",
    odgovori: ["a) Jusuf a.s", "b) Zul-Kifl a.s", "c) Ibrahim a.s"],
    tacanOdgovor: "c",
    name: "odgovor14"
  },
  {
    redniBroj: 5,
    pitanje: "5. Koji je poslanik primio objavu Zebur?",
    odgovori: ["a) Davud a.s", "b) Nuh a.s", "c) Muhammed s.a.v"],
    tacanOdgovor: "a",
    name: "odgovor15"
  },
  {
    redniBroj: 6,
    pitanje: "6. Koji je poslanik primio 50 listova suhufa?",
    odgovori: ["a) Musa a.s", "b) Idris a.s", "c) Sit a.s"],
    tacanOdgovor: "c",
    name: "odgovor16"
  },
  {
    redniBroj: 7,
    pitanje: "7. Koji je poslanik imao vlast nad nekim prirodnim elementima?",
    odgovori: ["a) Idris a.s", "b) Musa a.s", "c) Sulejman a.s"],
    tacanOdgovor: "c",
    name: "odgovor17"
  },
  {
    redniBroj: 8,
    pitanje: "8. Koliko je sinova imao Jakub a.s?",
    odgovori: ["a)4", "b) 7", "c) 12"],
    tacanOdgovor: "c",
    name: "odgovor18"
  },
  {
    redniBroj: 9,
    pitanje: "9. Koliko je Muhammed s.a.v imao godina kad je umro?",
    odgovori: ["a) 46", "b) 63", "c) 78"],
    tacanOdgovor: "b",
    name: "odgovor19"
  },
  {
    redniBroj: 10,
    pitanje: "10. Koji je poslanik roden sa majkom, ali bez oca?",
    odgovori: ["a) Adem a.s", "b) Harun a.s", "c) Isa a.s"],
    tacanOdgovor: "c",
    name: "odgovor20"
  },
];

let kviz3 = [
  {
    redniBroj: 1,
    pitanje: "1. Koliko ima sura u Kur'anu?",
    odgovori: ["a) 93", "b) 114", "c) 117"],
    tacanOdgovor: "b",
    name: "odgovor21"
  },
  {
    redniBroj: 2,
    pitanje: "2. Koliko ima stranica u Kur'anu?",
    odgovori: ["a) 604", "b) 606", "c) 616"],
    tacanOdgovor: "a",
    name: "odgovor22"
  },
  {
    redniBroj: 3,
    pitanje: "3. Koji je poslanik primio objavu Kur'an?",
    odgovori: ["a) Muhammed s.a.v", "b) Is a.s", "c) Junus a.s"],
    tacanOdgovor: "a",
    name: "odgovor23"
  },
  {
    redniBroj: 4,
    pitanje: "4. Koji je melek dostavio Kur'an Muhammedu s.a.v?",
    odgovori: ["a) Azrail a.s", "b) Ridvan a.s", "c) Dzibril a.s"],
    tacanOdgovor: "c",
    name: "odgovor24"
  },
  {
    redniBroj: 5,
    pitanje: "5. Koliko ima ajeta u Kur'anu?",
    odgovori: ["a) 6236", "b) 6341", "c) 6812"],
    tacanOdgovor: "a",
    name: "odgovor25"
  },
  {
    redniBroj: 6,
    pitanje: "6. Koliko ima ajeta sura El-Bekara?",
    odgovori: ["a) 247", "b) 275", "c) 286"],
    tacanOdgovor: "c",
    name: "odgovor26"
  },
  {
    redniBroj: 7,
    pitanje: "7. Koliko ajeta ima sura El-Kevser?",
    odgovori: ["a) 2", "b) 3", "c) 4"],
    tacanOdgovor: "b",
    name: "odgovor27"
  },
  {
    redniBroj: 8,
    pitanje: "8. Koji je poslanik najvise spomenut u Kur'anu?",
    odgovori: ["a) Musa a.s", "b) Davud a.s", "c) Junus a.s"],
    tacanOdgovor: "a",
    name: "odgovor28"
  },
  {
    redniBroj: 9,
    pitanje: "9. Koliko rijeci ima sura En-Nas?",
    odgovori: ["a) 20", "b) 25", "c) 30"],
    tacanOdgovor: "a",
    name: "odgovor29"
  },
  {
    redniBroj: 10,
    pitanje: "10. Koliko stranica ima sura El-Bekara?",
    odgovori: ["a) 46", "b) 47", "c) 49"],
    tacanOdgovor: "c",
    name: "odgovor30"
  },
];
/*Funkcije*/
function zavrsiKviz(imeKviza) {
  let brojBodova = 0;
  //prvo nademo koji kviz 
  let kviz = null;
  if (imeKviza === 'Sura El Fatiha') {
    kviz = kviz1;
  } else if (imeKviza === 'Poslanici') {
    kviz = kviz2;
  } else if (imeKviza === 'Kur an') {
    kviz = kviz3;
  }
  let pogresnaPitanjaPoruka = "";
  kviz.forEach((pitanje) => {
    let odgovor = document.querySelector("input[name='" + pitanje.name + "']:checked")?.value;
    if (pitanje.tacanOdgovor === odgovor) {
      brojBodova++;
    } else {
      let jednaPoruka = document.createElement("p");
      jednaPoruka.innerHTML = "Na pitanje " + pitanje.redniBroj + " tacan odgovor je: " + pitanje.tacanOdgovor;
      document.getElementById("pogresnaPitanja").appendChild(jednaPoruka);
      pogresnaPitanjaPoruka += "Na pitanje " + pitanje.redniBroj + " tacan odgovor je: " + pitanje.tacanOdgovor;
    }
  });
  document.getElementById("bodovi").innerHTML = "Zavrsili ste kviz. Broj osvojenih bodova: " + brojBodova;

  document.getElementById("pogresnaPitanja").style.color = "#DD1155"

  document.getElementById("bodovi").style.fontSize = "24px";

  document.getElementById("bodovi").style.color = "#CECE5A";
  document.getElementById("predajKvizDugme").style.visibility = "hidden";
}