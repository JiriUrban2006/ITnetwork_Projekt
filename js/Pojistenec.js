"use strict";

class Pojistenec {
    constructor() {
        const zaznamyZeStorage = localStorage.getItem("zaznamy");
        this.zaznamy = zaznamyZeStorage ? JSON.parse(zaznamyZeStorage) : [];
        this.limit = 5;

        this.jmenoInput = document.getElementById("jmeno");
        this.prijmeniInput = document.getElementById("prijmeni");
        this.vekInput = document.getElementById("vek");
        this.telefonInput = document.getElementById("telefon");
        this.potvrditButton = document.getElementById("ulozit");
        this.nacistButton = document.getElementById("nacist");
        this._nastavUdalosti();
    }

    _nastavUdalosti() {
        this.potvrditButton.onclick = () => {
            // this zůstane nyní stále this

            if (
                this.jmenoInput.value !== "" &&
                this.prijmeniInput.value !== "" &&
                this.vekInput.value.length !== 0 &&
                this.telefonInput.value.length !== 0
            ) {
                const zaznam = new Zaznam(
                    this.jmenoInput.value,
                    this.prijmeniInput.value,
                    this.vekInput.value,
                    this.telefonInput.value
                );
                this.zaznamy.unshift(zaznam);
                this.ulozZaznamy();
                this.pridejZaznam(zaznam);
            }
        };
        this.nacistButton.onclick = () => {
            this.limit += 5;
            this.vypisZaznamy();
            if (this.zaznamy.length <= this.limit) {
                this.nacistButton.classList.add("disabled");
            }
        };
    }

    vypisZaznamy() {
        const vypisPojistenych = document.getElementById("tabulka-pojistencu");
        console.log(this.zaznamy);
        vypisPojistenych.innerHTML = "";
        for (const pojistenci of this.zaznamy.slice(0, this.limit)) {
            const zaznam = new Zaznam(
                pojistenci.jmeno,
                pojistenci.prijmeni,
                pojistenci.vek,
                pojistenci.telefon
            );
            vypisPojistenych.innerHTML += zaznam;
        }
    }

    ulozZaznamy() {
        localStorage.setItem("zaznamy", JSON.stringify(this.zaznamy));
    }

    pridejZaznam(zaznam) {
        const vypisPojistenych = document.getElementById("tabulka-pojistencu");
        vypisPojistenych.appendChild(zaznam);
    }
}
