import { Datas } from "../classes/Datas.js";
import { HasHtmlFormat } from "../interfaces/HasHtmlFormat.js";

export class FormInput {
    form: HTMLFormElement;
    type: HTMLSelectElement
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    address: HTMLInputElement;
    country: HTMLInputElement;
    town: HTMLInputElement;
    zip: HTMLInputElement;
    product: HTMLInputElement;
    price: HTMLInputElement;
    quantity: HTMLInputElement;
    tva: HTMLInputElement;
    constructor(){
        this.form = document.getElementById('form')as HTMLFormElement;
        this.type = document.getElementById('type')as HTMLSelectElement;
        this.firstName = document.getElementById('firstName') as HTMLInputElement;
        this.lastName =  document.getElementById('lastName') as HTMLInputElement;
        this.address =  document.getElementById('address') as HTMLInputElement;
        this.country =  document.getElementById('country') as HTMLInputElement;
        this.town =  document.getElementById('town') as HTMLInputElement;
        this.zip =  document.getElementById('zip') as HTMLInputElement;
        this.product =  document.getElementById('product') as HTMLInputElement;
        this.price =  document.getElementById('price') as HTMLInputElement;
        this.quantity =  document.getElementById('quantity') as HTMLInputElement;
        this.tva =  document.getElementById('tva') as HTMLInputElement;

        this.listenEventEndSupbit();
    }
    private listenEventEndSupbit(){
        this.form.addEventListener('submit', (e:Event)=>{
            e.preventDefault();
            const inputs = this.inputDatas();

            if(Array.isArray(inputs)){
                //Pour extrère les valeur depuis le variable inputs
                const [type, firstName, lastName, address, country, town, zipe, product, price, quantity, tva] = inputs;
                
                let date: Date = new Date();
                
                // let datHtmlFormat: HasHtmlFormat;
                // datHtmlFormat = new Datas(type, firstName, lastName, address, country, town, zipe, product, price, quantity, tva, date);
                // console.log(datHtmlFormat);

                let datHtmlFormat: Datas;
                datHtmlFormat = new Datas(type, firstName, lastName, address, country, town, zipe, product, price, quantity, tva, date);
                console.log(datHtmlFormat.htmlForma());

            }
        });
    }
    private inputDatas(): [string, string, string, string, string, string, string, string, number, number, number] | void{

        if(this.price.valueAsNumber > 0 && this.quantity.valueAsNumber > 0 && this.tva.valueAsNumber > 0 ){
            return [
                this.type.value, this.firstName.value, this.lastName.value, this.address.value, this.country.value, this.town.value, 
                this.zip.value, this.product.value, this.price.valueAsNumber, this.quantity.valueAsNumber, this.tva.valueAsNumber
            ];
        }
        else{
            alert('Les valeurs numériques doivent être > 0 !');
            return;
        }
    }
}