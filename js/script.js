// Basic JavaScript 

function make_ele(eleId){
    return document.getElementById(eleId);
}

let country_data = {
    "United States": "US",
    "Canada": "CA",
    "United Kingdom": "GB",
    "France": "FR",
    "Germany": "DE",
    "Italy": "IT",
    "Spain": "ES",
    "China": "CN",
    "Japan": "JP",
    "India": "IN",
    "Brazil": "BR",
    "Russia": "RU",
    "Australia": "AU",
    "Mexico": "MX",
    "South Africa": "ZA",
    "South Korea": "KR",
    "Nigeria": "NG",
    "Egypt": "EG",
    "Argentina": "AR",
    "Sweden": "SE",
    "Switzerland": "CH",
    "Netherlands": "NL",
    "Belgium": "BE",
    "Turkey": "TR",
    "Saudi Arabia": "SA",
    "United Arab Emirates": "AE",
    "Singapore": "SG",
    "New Zealand": "NZ",
    "Norway": "NO",
    "Denmark": "DK"
};

let guess_entry = document.querySelector('#flag');
let decide = document.querySelector('.decision');
let guess = make_ele('guess');

guess.addEventListener('click', ()=>{
    let guess_name = document.querySelector('#country-name').value
    console.log(guess_name);
    if (guess_name.toLowerCase() == guess_entry.getAttribute('alt').toLowerCase()){
        console.log('You Win');
        textnode = document.createTextNode('You Win');
        decide.innerHTML = "Correct";
    }
    else{
        console.log("You lose");
        decide.innerHTML= "Wrong";
    }

})



random = make_ele('random');

/*async function random_name(){
    let res = await fetch('http://127.0.0.1:5510/countries');
    let data = await res.json().then((res)=>{
        let num = Math.floor(Math.random() * 30);
        console.log(res['data'], num)
        let code_list = Object.values(res['data']);
        let name_list = Object.keys(res['data']);
    
        random_flag(code_list[num], name_list[num]);
        return 'done'
    });

}
*/

function random_name(){
    decide.innerHTML = "";


    let num = Math.floor(Math.random() * 30);
    let code_list = Object.values(country_data);
    let name_list = Object.keys(country_data);

    random_flag(code_list[num], name_list[num]);    
}
  

function random_flag(code, name){
    document.querySelector('#flag').setAttribute('src', `https://flagsapi.com/${code}/flat/64.png`);
    document.querySelector('#flag').setAttribute('alt', `${name}`)
}

random.addEventListener('click', random_name);
