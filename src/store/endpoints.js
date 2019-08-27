const All = `/all`;
const ByName = (name) => `/name/${name}`;
const ByCode = (code) => `/alpha/${code}`;
const ByCallingCode = (code) => `/callingcode/${code}`;
const ByCapital = (capital) => `/capital/${capital}`;
const ByCurrency = (currency) => `/currency/${currency}`;
const ByRegion = (region) => `/region/${region}`;

export const API = {
  All,
  ByName,
  ByCode,
  ByCallingCode,
  ByCapital,
  ByCurrency,
  ByRegion
};
