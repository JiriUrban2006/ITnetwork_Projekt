'use strict'

class Zaznam {
  constructor(jmeno, prijmeni, vek, telefon,) {
    this.jmeno = jmeno;
    this.prijmeni = prijmeni;
    this.vek = vek;
    this.telefon = telefon;
  }

  toString() {
    return `
      <tr>
        <td>${this.jmeno} ${this.prijmeni}</td>
        <td>${this.vek}</td>
        <td>${this.telefon}</td>
      </tr>
      `;
  }
}
