import { Component, OnInit } from '@angular/core'
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';
  routes =['annapurna','everest'];
  rates = [2000,5000];
  rate :any;
  constructor(private payPal: PayPal,public router:Router) { }

  ngOnInit() {
   let val = window.localStorage.getItem('value');
  this.paymentvalue(val);
  }
  payWithPaypal() {
    console.log("Pay ????");
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'AT55FhWpiPX-yEXYgoYMT41faEv9DKX9BCYKi4BLTmKRRKaSCjL60GU5I3ZYbQdhFE6qigokGWIs-xLm'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.rate, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);
          // Successfully paid

          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }
  paymentvalue(value){ 
   for(var j=0;j<this.routes.length;j++){
     console.log(value)
     console.log(this.routes[j])
     if(value === this.routes[j]){
       let rr = this.rates[j];
       this.rate = rr;
       console.log(this.rate)
       document.getElementById('rate').innerHTML = this.rate+"$"+"   "+value ;
   }
  }
}
payWithPaypal1(){
  alert("Your payment has been made,Thank you")
  window.localStorage.setItem("accesstoken","#!!$%5678SSSs");
  this.router.navigate(['booknow']);
} 
}