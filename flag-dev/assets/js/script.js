const level1 = {
  FR: "France",
  DE: "Germany",
  IN: "India",
  JP: "Japan",
  AU: "Australia",
  BD: "Bangladesh",
  BE: "Belgium",
  CN: "China",
  BR: "Brazil",
  EG: "Egypt",
  IT: "Italy",
  KR: "Korea",
  US: "United States of America",
  TR: "Turkey",
  CA: "Canada",
  HR: "Croatia",
  MX: "Mexico",
  NZ: "New Zealand",
  PT: "Portugal",
  AR: "Argentina",
};

const level2 = {
  AF: "Afghanistan",
  AT: "Austria",
  BT: "Bhutan",
  BO: "Bolivia",
  CR: "Costa Rica",
  HK: "Hong Kong",
  CU: "Cuba",
  LB: "Lebanon",
  NP: "Nepal",
  NL: "Netherlands",
  NG: "Nigeria",
};

const countryListAlpha2 = {
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AM: "Armenia",
  AW: "Aruba",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BB: "Barbados",
  BY: "Belarus",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BQ: "Bonaire",
  BA: "Bosnia",
  BW: "Botswana",
  BV: "Bouvet Island",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodia",
  CM: "Cameroon",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CD: "Congo",
  CG: "Congo",
  CK: "Cook Islands (the)",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  CI: "Côte d'Ivoire",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic (the)",
  EC: "Ecuador",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",
  ET: "Ethiopia",
  FK: "Falkland Islands (the) [Malvinas]",
  FO: "Faroe Islands (the)",
  FJ: "Fiji",
  FI: "Finland",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories (the)",
  GA: "Gabon",
  GM: "Gambia (the)",
  GE: "Georgia",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  VA: "Holy See",
  HN: "Honduras",
  HU: "Hungary",
  IS: "Iceland",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  JM: "Jamaica",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  FM: "Micronesia",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NC: "New Caledonia",
  NI: "Nicaragua",
  NE: "Niger",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands (the)",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine, State of",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines (the)",
  PN: "Pitcairn",
  PL: "Poland",
  PR: "Puerto Rico",
  QA: "Qatar",
  MK: "Republic of North Macedonia",
  RO: "Romania",
  RU: "Russian Federation (the)",
  RW: "Rwanda",
  RE: "Réunion",
  BL: "Saint Barthélemy",
  SH: "Saint Helena, Ascension and Tristan da Cunha",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "United Republic of Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  UM: "United States Minor Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Virgin Islands",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

const home = document.querySelector(".home");
const homeChild = document.querySelector(".home__child");

console.log(home);
console.log(homeChild);

const renderCountry = function (data) {
  let html = `
   <div class="card-container">
        <div class="img"><img  src=${data.flag} alt=${data.name} class="card-flag-img" /></div>
        <div class="card-info">
          <h1 class="info info-country">${data.name}</h1>
          <h2 class="info info-continent">${data.region}</h2>
          <h3 class="info other-info other-info-1">${data.population}</h3>
          <h3 class="info other-info other-info-2">Language</h3>
          <h3 class="info other-info other-info-3">${data.capital}</h3>
        </div>
      </div>
  `;

  homeChild.insertAdjacentHTML("beforeend", html);
};

export const Countries = async function (countryCode) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${countryCode}`
  );

  const data = await response.json();

  console.log(data);

  renderCountry(data);
};

// displayCountries("USA");

let codeCountry = new Array();

const arrayKeysConverted = Object.keys(level1);

const arrayValuesConverted = Object.values(level1);

arrayValuesConverted.forEach((val, i) =>
  codeCountry.push([val, arrayKeysConverted[i]])
);

console.log(codeCountry);

const first20Countries = codeCountry.slice(0, 20);

console.log(first20Countries);

codeCountry.forEach((country) => {
  // displayCountries(country[1]);
});

// const getFourRandomCountries = function (level) {
//   let array;
//   let options = new Array();

//   if (level == 1) {
//     array = Object.keys(level1);
//   }

//   console.log("this is array ----> ", array.length);

//   while (options.length != 4) {
//     let random = Math.floor(Math.random() * array.length);

//     if (options.indexOf(array[random]) == -1) options.push(array[random]);
//   }

//   const correctIndex = Math.floor(Math.random() * 4);

//   console.log(options);

//   console.log(correctIndex, options[correctIndex]);

//   return options;
// };

const getFourRandomCountries = function (level) {
  if (level == 1) {
  }
  let options = new Array();
  let array = Object.keys(level1);
  console.log("this is array ----> ", array.length);

  while (options.length != 4) {
    let random = Math.floor(Math.random() * array.length);

    if (options.indexOf(array[random]) == -1) options.push(array[random]);
  }

  console.log(options);

  let temp;
  const correct = Math.floor(Math.random() * 4);

  // swapping
  temp = options[0];
  options[0] = options[correct];
  options[correct] = temp;

  console.log(options);

  return options;
};

getFourRandomCountries(1);
