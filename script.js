let rate1=document.querySelector(".rate1");
let rate2=document.querySelector(".rate2");
let resulbtn=document.querySelector(".result");
let selects=document.querySelectorAll(".options select");
let sel1=selects[0];
let sel2=selects[1];
console.log(Object.prototype.toString.call(sel1));
let inputs=document.querySelectorAll(".input input");
let inpt1=inputs[0];
let inpt2=inputs[1];

let rate={};
//let requesturl="https://api.currencyapi.com/v3/latest?apikey=cur_live_zgJXwOBKid8OxK6LJI5mhTxSz5m7wYaSLmXxd11X";
const fetchrates=()=>{
    res=JSON.parse(`{
    "meta": {
      "last_updated_at": "2024-02-23T23:59:59Z"
    },
    "data": {
      "ADA": {
        "code": "ADA",
        "value": 1.7142081056
      },
      "AED": {
        "code": "AED",
        "value": 3.6717705166
      },
      "AFN": {
        "code": "AFN",
        "value": 73.6580097828
      },
      "ALL": {
        "code": "ALL",
        "value": 95.7644390572
      },
      "AMD": {
        "code": "AMD",
        "value": 404.6601567478
      },
      "ANG": {
        "code": "ANG",
        "value": 1.7861502343
      },
      "AOA": {
        "code": "AOA",
        "value": 829.7722633661
      },
      "ARB": {
        "code": "ARB",
        "value": 0.5548315458
      },
      "ARS": {
        "code": "ARS",
        "value": 838.8935823009
      },
      "AUD": {
        "code": "AUD",
        "value": 1.5237602167
      },
      "AVAX": {
        "code": "AVAX",
        "value": 0.0277954225
      },
      "AWG": {
        "code": "AWG",
        "value": 1.79
      },
      "AZN": {
        "code": "AZN",
        "value": 1.7
      },
      "BAM": {
        "code": "BAM",
        "value": 1.7278602313
      },
      "BBD": {
        "code": "BBD",
        "value": 2
      },
      "BDT": {
        "code": "BDT",
        "value": 109.5892324858
      },
      "BGN": {
        "code": "BGN",
        "value": 1.8007503552
      },
      "BHD": {
        "code": "BHD",
        "value": 0.376
      },
      "BIF": {
        "code": "BIF",
        "value": 2856.3001765431
      },
      "BMD": {
        "code": "BMD",
        "value": 1
      },
      "BNB": {
        "code": "BNB",
        "value": 0.0026562587
      },
      "BND": {
        "code": "BND",
        "value": 1.3419701685
      },
      "BOB": {
        "code": "BOB",
        "value": 6.9328113206
      },
      "BRL": {
        "code": "BRL",
        "value": 4.9929107983
      },
      "BSD": {
        "code": "BSD",
        "value": 1
      },
      "BTC": {
        "code": "BTC",
        "value": 0.0000196868
      },
      "BTN": {
        "code": "BTN",
        "value": 82.7113217437
      },
      "BWP": {
        "code": "BWP",
        "value": 13.7796723667
      },
      "BYN": {
        "code": "BYN",
        "value": 3.273924816
      },
      "BYR": {
        "code": "BYR",
        "value": 32739.234002025
      },
      "BZD": {
        "code": "BZD",
        "value": 2
      },
      "CAD": {
        "code": "CAD",
        "value": 1.3502001441
      },
      "CDF": {
        "code": "CDF",
        "value": 2661.4304394654
      },
      "CHF": {
        "code": "CHF",
        "value": 0.8807401757
      },
      "CLF": {
        "code": "CLF",
        "value": 0.0262700046
      },
      "CLP": {
        "code": "CLP",
        "value": 982.1756551983
      },
      "CNY": {
        "code": "CNY",
        "value": 7.1941608798
      },
      "COP": {
        "code": "COP",
        "value": 3963.831084453
      },
      "CRC": {
        "code": "CRC",
        "value": 514.1826973951
      },
      "CUC": {
        "code": "CUC",
        "value": 1
      },
      "CUP": {
        "code": "CUP",
        "value": 24
      },
      "CVE": {
        "code": "CVE",
        "value": 101.8732023678
      },
      "CZK": {
        "code": "CZK",
        "value": 23.4006134869
      },
      "DAI": {
        "code": "DAI",
        "value": 0.9993512656
      },
      "DJF": {
        "code": "DJF",
        "value": 177.721
      },
      "DKK": {
        "code": "DKK",
        "value": 6.8876311314
      },
      "DOP": {
        "code": "DOP",
        "value": 58.7893014683
      },
      "DOT": {
        "code": "DOT",
        "value": 0.1323865695
      },
      "DZD": {
        "code": "DZD",
        "value": 135.0910806244
      },
      "EGP": {
        "code": "EGP",
        "value": 30.8966734594
      },
      "ERN": {
        "code": "ERN",
        "value": 15
      },
      "ETB": {
        "code": "ETB",
        "value": 56.7643106676
      },
      "ETH": {
        "code": "ETH",
        "value": 0.0003416922
      },
      "EUR": {
        "code": "EUR",
        "value": 0.9238001386
      },
      "FJD": {
        "code": "FJD",
        "value": 2.2347004114
      },
      "FKP": {
        "code": "FKP",
        "value": 0.7888344346
      },
      "GBP": {
        "code": "GBP",
        "value": 0.7890401229
      },
      "GEL": {
        "code": "GEL",
        "value": 2.6479204197
      },
      "GGP": {
        "code": "GGP",
        "value": 0.7888338889
      },
      "GHS": {
        "code": "GHS",
        "value": 12.5018924517
      },
      "GIP": {
        "code": "GIP",
        "value": 0.7888339299
      },
      "GMD": {
        "code": "GMD",
        "value": 58.4475687337
      },
      "GNF": {
        "code": "GNF",
        "value": 8544.4558198202
      },
      "GTQ": {
        "code": "GTQ",
        "value": 7.8029909022
      },
      "GYD": {
        "code": "GYD",
        "value": 208.8743721578
      },
      "HKD": {
        "code": "HKD",
        "value": 7.821451202
      },
      "HNL": {
        "code": "HNL",
        "value": 24.6763445857
      },
      "HRK": {
        "code": "HRK",
        "value": 6.679631153
      },
      "HTG": {
        "code": "HTG",
        "value": 134.4669440348
      },
      "HUF": {
        "code": "HUF",
        "value": 358.9667305737
      },
      "IDR": {
        "code": "IDR",
        "value": 15570.55921811
      },
      "ILS": {
        "code": "ILS",
        "value": 3.6240804528
      },
      "IMP": {
        "code": "IMP",
        "value": 0.7888340364
      },
      "INR": {
        "code": "INR",
        "value": 82.8202035907
      },
      "IQD": {
        "code": "IQD",
        "value": 1307.6791992493
      },
      "IRR": {
        "code": "IRR",
        "value": 41992.492795506
      },
      "ISK": {
        "code": "ISK",
        "value": 136.9745258003
      },
      "JEP": {
        "code": "JEP",
        "value": 0.7888345358
      },
      "JMD": {
        "code": "JMD",
        "value": 154.3847337343
      },
      "JOD": {
        "code": "JOD",
        "value": 0.71
      },
      "JPY": {
        "code": "JPY",
        "value": 150.4576639097
      },
      "KES": {
        "code": "KES",
        "value": 145.9751369525
      },
      "KGS": {
        "code": "KGS",
        "value": 89.4789358586
      },
      "KHR": {
        "code": "KHR",
        "value": 4068.4185702958
      },
      "KMF": {
        "code": "KMF",
        "value": 454.6467403616
      },
      "KPW": {
        "code": "KPW",
        "value": 900.0106778425
      },
      "KRW": {
        "code": "KRW",
        "value": 1328.3914832597
      },
      "KWD": {
        "code": "KWD",
        "value": 0.3074800589
      },
      "KYD": {
        "code": "KYD",
        "value": 0.83333
      },
      "KZT": {
        "code": "KZT",
        "value": 448.8133250869
      },
      "LAK": {
        "code": "LAK",
        "value": 20872.999373466
      },
      "LBP": {
        "code": "LBP",
        "value": 89549.944743082
      },
      "LKR": {
        "code": "LKR",
        "value": 310.4714255779
      },
      "LRD": {
        "code": "LRD",
        "value": 190.7532554676
      },
      "LSL": {
        "code": "LSL",
        "value": 19.1866623442
      },
      "LTC": {
        "code": "LTC",
        "value": 0.0145243434
      },
      "LTL": {
        "code": "LTL",
        "value": 3.1879582407
      },
      "LVL": {
        "code": "LVL",
        "value": 0.6488932317
      },
      "LYD": {
        "code": "LYD",
        "value": 4.826840853
      },
      "MAD": {
        "code": "MAD",
        "value": 10.0451314152
      },
      "MATIC": {
        "code": "MATIC",
        "value": 1.01172397
      },
      "MDL": {
        "code": "MDL",
        "value": 17.7983423331
      },
      "MGA": {
        "code": "MGA",
        "value": 4550.6491517871
      },
      "MKD": {
        "code": "MKD",
        "value": 56.9422384939
      },
      "MMK": {
        "code": "MMK",
        "value": 2094.5590014377
      },
      "MNT": {
        "code": "MNT",
        "value": 3391.5981390595
      },
      "MOP": {
        "code": "MOP",
        "value": 8.0412012085
      },
      "MRO": {
        "code": "MRO",
        "value": 356.999828
      },
      "MRU": {
        "code": "MRU",
        "value": 39.8016206142
      },
      "MUR": {
        "code": "MUR",
        "value": 45.6055970616
      },
      "MVR": {
        "code": "MVR",
        "value": 15.4461216716
      },
      "MWK": {
        "code": "MWK",
        "value": 1683.0263710725
      },
      "MXN": {
        "code": "MXN",
        "value": 17.1175521075
      },
      "MYR": {
        "code": "MYR",
        "value": 4.7746505677
      },
      "MZN": {
        "code": "MZN",
        "value": 63.6898119859
      },
      "NAD": {
        "code": "NAD",
        "value": 19.2705336262
      },
      "NGN": {
        "code": "NGN",
        "value": 1488.6538573213
      },
      "NIO": {
        "code": "NIO",
        "value": 36.8234942083
      },
      "NOK": {
        "code": "NOK",
        "value": 10.5387614626
      },
      "NPR": {
        "code": "NPR",
        "value": 132.5543058093
      },
      "NZD": {
        "code": "NZD",
        "value": 1.6134502847
      },
      "OMR": {
        "code": "OMR",
        "value": 0.3839100741
      },
      "OP": {
        "code": "OP",
        "value": 0.2845138654
      },
      "PAB": {
        "code": "PAB",
        "value": 0.9988601713
      },
      "PEN": {
        "code": "PEN",
        "value": 3.7970306475
      },
      "PGK": {
        "code": "PGK",
        "value": 3.7771306422
      },
      "PHP": {
        "code": "PHP",
        "value": 55.886418734
      },
      "PKR": {
        "code": "PKR",
        "value": 279.3342558642
      },
      "PLN": {
        "code": "PLN",
        "value": 3.9763004773
      },
      "PYG": {
        "code": "PYG",
        "value": 7297.304115476
      },
      "QAR": {
        "code": "QAR",
        "value": 3.6392004684
      },
      "RON": {
        "code": "RON",
        "value": 4.5955506449
      },
      "RSD": {
        "code": "RSD",
        "value": 107.880961935
      },
      "RUB": {
        "code": "RUB",
        "value": 94.7394773803
      },
      "RWF": {
        "code": "RWF",
        "value": 1275.6992364046
      },
      "SAR": {
        "code": "SAR",
        "value": 3.744280509
      },
      "SBD": {
        "code": "SBD",
        "value": 8.229024031
      },
      "SCR": {
        "code": "SCR",
        "value": 14.446012874
      },
      "SDG": {
        "code": "SDG",
        "value": 601.5
      },
      "SEK": {
        "code": "SEK",
        "value": 10.3160119867
      },
      "SGD": {
        "code": "SGD",
        "value": 1.3418801356
      },
      "SHP": {
        "code": "SHP",
        "value": 0.7890401013
      },
      "SLL": {
        "code": "SLL",
        "value": 22710.047194448
      },
      "SOL": {
        "code": "SOL",
        "value": 0.0099803279
      },
      "SOS": {
        "code": "SOS",
        "value": 571.3318162838
      },
      "SRD": {
        "code": "SRD",
        "value": 35.4981239331
      },
      "STD": {
        "code": "STD",
        "value": 22842.625704675
      },
      "STN": {
        "code": "STN",
        "value": 22.8426264001
      },
      "SVC": {
        "code": "SVC",
        "value": 8.75
      },
      "SYP": {
        "code": "SYP",
        "value": 13001.907449694
      },
      "SZL": {
        "code": "SZL",
        "value": 19.3023319962
      },
      "THB": {
        "code": "THB",
        "value": 35.9058263703
      },
      "TJS": {
        "code": "TJS",
        "value": 10.9440914256
      },
      "TMT": {
        "code": "TMT",
        "value": 3.5
      },
      "TND": {
        "code": "TND",
        "value": 3.1134203294
      },
      "TOP": {
        "code": "TOP",
        "value": 2.3485602803
      },
      "TRY": {
        "code": "TRY",
        "value": 30.966103637
      },
      "TTD": {
        "code": "TTD",
        "value": 6.7901610699
      },
      "TWD": {
        "code": "TWD",
        "value": 31.6222751619
      },
      "TZS": {
        "code": "TZS",
        "value": 2546.9011333995
      },
      "UAH": {
        "code": "UAH",
        "value": 38.5996153492
      },
      "UGX": {
        "code": "UGX",
        "value": 3868.7119073412
      },
      "USD": {
        "code": "USD",
        "value": 1
      },
      "USDC": {
        "code": "USDC",
        "value": 1.0000243143
      },
      "USDT": {
        "code": "USDT",
        "value": 0.9992910723
      },
      "UYU": {
        "code": "UYU",
        "value": 38.5101376746
      },
      "UZS": {
        "code": "UZS",
        "value": 12505.998470169
      },
      "VEF": {
        "code": "VEF",
        "value": 3610627.5574268
      },
      "VES": {
        "code": "VES",
        "value": 36.1062573211
      },
      "VND": {
        "code": "VND",
        "value": 24624.26109868
      },
      "VUV": {
        "code": "VUV",
        "value": 119.1980125576
      },
      "WST": {
        "code": "WST",
        "value": 2.7315135158
      },
      "XAF": {
        "code": "XAF",
        "value": 606.1167451617
      },
      "XAG": {
        "code": "XAG",
        "value": 0.043582778
      },
      "XAU": {
        "code": "XAU",
        "value": 0.0004911847
      },
      "XCD": {
        "code": "XCD",
        "value": 2.7
      },
      "XDR": {
        "code": "XDR",
        "value": 0.7538501157
      },
      "XOF": {
        "code": "XOF",
        "value": 606.1167620878
      },
      "XPD": {
        "code": "XPD",
        "value": 0.0011044731
      },
      "XPF": {
        "code": "XPF",
        "value": 110.1510386024
      },
      "XPT": {
        "code": "XPT",
        "value": 0.0011144677
      },
      "XRP": {
        "code": "XRP",
        "value": 1.8688432831
      },
      "YER": {
        "code": "YER",
        "value": 249.7901557204
      },
      "ZAR": {
        "code": "ZAR",
        "value": 19.2908925499
      },
      "ZMK": {
        "code": "ZMK",
        "value": 9001.2
      },
      "ZMW": {
        "code": "ZMW",
        "value": 23.0388424224
      },
      "ZWL": {
        "code": "ZWL",
        "value": 361.9
      }}}`);


    
    rate=res["data"];
    optionshover();
};
fetchrates();
function optionshover(){
    let v=" ";
    Object.keys(rate).forEach(c=>{
        let str=`<option>${c}</option>`;
        v+=str;
     
    })
    selects.forEach((s1)=>(s1.innerHTML=v));
}
//let selects=document.querySelector(".options select");
//let sel1=selects[0];
//let sel2=selects[1];
function convertcurrency(val,fromcurr, tocurr){
  let val1=(val/rate[fromcurr]["value"])*rate[tocurr]["value"];
  let v1=val1.toFixed(3);
  return v1==0.0?val1.toFixed(5):v1;

}
function display(){
 let value1=sel1.value;
 let value2=sel2.value;
 let val=convertcurrency(1,value1,value2);
 rate1.innerHTML=`1 ${value1} equals`;
 rate2.innerHTML=`${val} ${value2}`;

}
resulbtn.addEventListener('click',()=>{
    let fromcurr=sel1.value;
    let fromval=parseFloat(inpt1.value);
    let tocurr=sel2.value;
    if(isNaN(fromval)){
        alert("Enter a number");
        
    }
    else{
        let cval=convertcurrency(fromval,fromcurr,tocurr);
        inpt2.value=cval;
        console.log(sel1.value);
    }
});
selects.forEach(s=>s.addEventListener("change",display));
document.querySelector(".swap").addEventListener("click",()=>{
    let inp1= inpt1.value;
    let inp2=inpt2.value;
    let op1=sel1.value;
    let op2=sel2.value;
    inpt1.value=inp2;
    inpt2.value=inp1;
    sel1.value=op2;
    sel2.value=op1;
    display();

});