import {HasHtmlFormat} from "../interfaces/HasHtmlFormat.js";

export class Datas implements HasHtmlFormat{
    constructor(
        private type: string,
        private firstName: string,
        private lastName: string,
        private address: string,
        private country: string,
        private town: string,
        private zip: string,
        private product: string,
        private price: number,
        private quantity: number,
        private tva: number,
        private date: Date,
    ){}
    htmlForma() {
        return `
            <div class="row p-5">
                <div class="col-md-6">
                    <h2 class="text-left">LOGO</h2>
                </div>
                <div class="col-md-6 text-right">
                    <p class="font-weight-bold mb-1">xxxxxxxxxxxxxxx<span class="font-weight-normal">xxxxxxxxxx</span></p>
                    <p class="font-weight-bold mb-1">Date <span class="font-weight-normal">xxxxxxxxxxxxxxx</span></p>
                </div>
            </div>
    
            <div class="row pb-5 p-5">
                <div class="col-sm-6 text-left">
                    <p class="font-weight-bold">Entreprise de Toto</p>
                    <p class="mb-1">22 boulevard Moe Szyslak</p>
                    <p>75008 - Paris</p>
                    <p class="mb-1">Tél: 00.00.00.00.00</p>
                </div>
            
                <div class="col-sm-6 text-right">
                    <p class="font-weight-bold">Informations du client</p>
                    <p class="mb-1">Mr/Mme xxxxxxxxxxxxxxx</p>
                    <p class="mb-1">xxxxxxxxxxxxxxx</p>
                    <p>xxxxxxxxxxxxxxx</p>
                    <p>xxxxxxxxxxxxxxx</p>
                    <p>xxxxxxxxxxxxxxx</p>
                </div>
            </div>
    
            <div class="row p-5">
                <div class="col-md-12">
                    <table class="table">
                    <thead>
                        <tr>
                        <th class="border-0 text-uppercase small font-weight-bold">Produit/Service</th>
                        <th class="border-0 text-uppercase small font-weight-bold">Prix unitaire HT</th>
                        <th class="border-0 text-uppercase small font-weight-bold">Quantité</th>
                        <th class="border-0 text-uppercase small font-weight-bold">Total HT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>xxxxxxxxxxxxxxx</td>
                        <td>xxxxxxxxxxxxxxx € HT</td>
                        <td>xxxxxxxxxxxxxxx</td>
                        <td>xxxxxxxxxxxxxxx € HT</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            
            <div class="d-flex flex-row-reverse bg-light p-4">
                <div class="py-3 px-5">
                    <div class="mb-2">TOTAL TTC</div>
                    <div class="h2 font-weight-light">xxxxxxxxxxxxxxx €</div>
                </div>
            </div>
        `
    }
}