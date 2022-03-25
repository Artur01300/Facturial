import { Datas } from "../classes/Datas.js";
export class FormInput {
    constructor() {
        this.form = document.getElementById('form');
        this.type = document.getElementById('type');
        this.firstName = document.getElementById('firstName');
        this.lastName = document.getElementById('lastName');
        this.address = document.getElementById('address');
        this.country = document.getElementById('country');
        this.town = document.getElementById('town');
        this.zip = document.getElementById('zip');
        this.product = document.getElementById('product');
        this.price = document.getElementById('price');
        this.quantity = document.getElementById('quantity');
        this.tva = document.getElementById('tva');
        this.listenEventEndSupbit();
    }
    listenEventEndSupbit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = this.inputDatas();
            if (Array.isArray(inputs)) {
                //Pour extrère les valeur depuis le variable inputs
                const [type, firstName, lastName, address, country, town, zipe, product, price, quantity, tva] = inputs;
                let date = new Date();
                // let datHtmlFormat: HasHtmlFormat;
                // datHtmlFormat = new Datas(type, firstName, lastName, address, country, town, zipe, product, price, quantity, tva, date);
                // console.log(datHtmlFormat);
                let datHtmlFormat;
                datHtmlFormat = new Datas(type, firstName, lastName, address, country, town, zipe, product, price, quantity, tva, date);
                console.log(datHtmlFormat.htmlForma());
            }
        });
    }
    inputDatas() {
        if (this.price.valueAsNumber > 0 && this.quantity.valueAsNumber > 0 && this.tva.valueAsNumber > 0) {
            return [
                this.type.value, this.firstName.value, this.lastName.value, this.address.value, this.country.value, this.town.value,
                this.zip.value, this.product.value, this.price.valueAsNumber, this.quantity.valueAsNumber, this.tva.valueAsNumber
            ];
        }
        else {
            alert('Les valeurs numériques doivent être > 0 !');
            return;
        }
    }
}
