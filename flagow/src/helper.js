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
  HU: "Hungary",
  ID: "Indonesia",
  IQ: "Iraq",
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
  PK: "Pakistan",
  CL: "Chile",
  FI: "Finland",
  IE: "Ireland",
};

const level3 = {
  DZ: "Algeria",
  AQ: "Antarctica",
  BS: "Bahamas",
  KH: "Cambodia",
  CO: "Colombia",
  DK: "Denmark",
  IS: "Iceland",
  MA: "Morocco",
  PR: "Puerto Rico",
  QA: "Qatar",
  SG: "Singapore",
  LK: "Sri Lanka",
  BG: "Bulgaria",
  CM: "Cameroon",
  EC: "Ecuador",
  SV: "El Salvador",
  GR: "Greece",
  GL: "Greenland",
  IL: "Israel",
  KE: "Kenya",
  ZW: "Zimbabwe",
};
const level4 = {
  FJ: "Fiji",
  GE: "Georgia",
  GD: "Grenada",
  JE: "Jersey",
  MY: "Malaysia",
  MV: "Maldives",
  MM: "Myanmar",
  PE: "Peru",
  PH: "Philippines (the)",
  PL: "Poland",
  MF: "Saint Martin",
  ZA: "South Africa",
  ES: "Spain",
  CH: "Switzerland",
  TH: "Thailand",
  UG: "Uganda",
  AE: "United Arab Emirates",
  VE: "Venezuela",
  YE: "Yemen",
  ZM: "Zambia",
};
const level5 = {
  AL: "Albania",
  BY: "Belarus",
  BI: "Burundi",
  CG: "Congo",
  ET: "Ethiopia",
  GH: "Ghana",
  IR: "Iran",
  JM: "Jamaica",
  KW: "Kuwait",
  LR: "Liberia",
  LY: "Libya",
  MG: "Madagascar",
  MH: "Marshall Islands",
  MC: "Monaco",
  MS: "Montserrat",
  NC: "New Caledonia",
  NF: "Norfolk Island",
  PY: "Paraguay",
  RO: "Romania",
  RU: "Russian Federation (the)",
  LC: "Saint Lucia",
  WS: "Samoa",
  SA: "Saudi Arabia",
  SE: "Sweden",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TN: "Tunisia",
  TM: "Turkmenistan",
  UA: "Ukraine",
  UY: "Uruguay",
  VG: "Virgin Islands",
};
const level6 = {
  AG: "Antigua and Barbuda",
  AM: "Armenia",
  AW: "Aruba",
  AZ: "Azerbaijan",

  BH: "Bahrain",
  BZ: "Belize",
  BJ: "Benin",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  CI: "Côte d'Ivoire",

  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",

  IM: "Isle of Man",

  JO: "Jordan",
  KZ: "Kazakhstan",

  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",

  MP: "Northern Mariana Islands (the)",
  NO: "Norway",
  OM: "Oman",

  PW: "Palau",
  SM: "San Marino",
  ST: "Sao Tome and Principe",

  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",

  GS: "South Georgia",
  SS: "South Sudan",

  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",

  SY: "Syrian Arab Republic",

  TZ: "United Republic of Tanzania",

  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
};

const countryList = {
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",

  BM: "Bermuda",
  BQ: "Bonaire",
  BA: "Bosnia",
  BW: "Botswana",
  BV: "Bouvet Island",
  BN: "Brunei Darussalam",

  BF: "Burkina Faso",

  CV: "Cabo Verde",

  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",

  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",

  KM: "Comoros",
  CD: "Congo",

  CK: "Cook Islands (the)",

  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic (the)",

  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",

  FK: "Falkland Islands (the) [Malvinas]",
  FO: "Faroe Islands (the)",

  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories (the)",
  GA: "Gabon",
  GM: "Gambia (the)",

  GI: "Gibraltar",

  GP: "Guadeloupe",
  GU: "Guam",

  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  VA: "Holy See",
  HN: "Honduras",

  KI: "Kiribati",

  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LS: "Lesotho",

  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",

  MW: "Malawi",

  ML: "Mali",
  MT: "Malta",

  FM: "Micronesia",
  MD: "Moldova",

  MN: "Mongolia",
  ME: "Montenegro",

  MZ: "Mozambique",

  NA: "Namibia",
  NR: "Nauru",

  NI: "Nicaragua",
  NE: "Niger",
  NU: "Niue",

  PS: "Palestine, State of",
  PA: "Panama",
  PG: "Papua New Guinea",

  PN: "Pitcairn",

  MK: "Republic of North Macedonia",

  RW: "Rwanda",
  RE: "Réunion",
  BL: "Saint Barthélemy",
  SH: "Saint Helena, Ascension and Tristan da Cunha",
  KN: "Saint Kitts and Nevis",

  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",

  SX: "Sint Maarten",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",

  UM: "United States Minor Outlying Islands",

  UZ: "Uzbekistan",
  VU: "Vanuatu",

  VN: "Viet Nam",

  WF: "Wallis and Futuna",
  EH: "Western Sahara",
};

// let html = `
//    <div class="card-container">
//         <div class="img"><img  src=${data.flag} alt=${data.name} class="card-flag-img" /></div>
//         <div class="card-info">
//           <h1 class="info info-country">${data.name}</h1>
//           <h2 class="info info-continent">${data.region}</h2>
//           <h3 class="info other-info other-info-1">${data.population}</h3>
//           <h3 class="info other-info other-info-2">Language</h3>
//           <h3 class="info other-info other-info-3">${data.capital}</h3>
//         </div>
//       </div>
//   `;

export const fetchCountries = async function (countryCode) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${countryCode}`
  );

  const data = await response.json();

  return data;
};

export const getFourRandomCountries = function (level) {
  let array;
  if (level == "level1") {
    array = Object.keys(level1);
  }
  if (level == "level2") {
    array = Object.keys(level2);
  }
  if (level == "level3") {
    array = Object.keys(level3);
  }
  if (level == "level4") {
    array = Object.keys(level4);
  }
  if (level == "level5") {
    array = Object.keys(level5);
  }
  if (level == "level6") {
    array = Object.keys(level6);
  }

  let options = new Array();

  while (options.length != 4) {
    let random = Math.floor(Math.random() * array.length);

    if (options.indexOf(array[random]) == -1) options.push(array[random]);
  }

  const correct = Math.floor(Math.random() * 4);

  return { optionsArray: options, correctOption: correct };
};

// export const startGame = function () {
//   const options = getFourRandomCountries(1);
//   setOptions(options);
//   setCorrectIndex(options.correctOption);
//   options.optionsArray.forEach((country) => {
//     fetchCountries(country);
//   });
// };
