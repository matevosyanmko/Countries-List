
class Request {
  constructor() {
    this.host = 'https://restcountries-v1.p.rapidapi.com';
    this.x_rapidapi_host = 'restcountries-v1.p.rapidapi.com';
    this.x_rapidapi_key = 'f21e07632cmsh37ca4edc8ea9593p1fbcfajsn21e1024f2c80';
  }
  get = (url) => this.sendRequest('GET', url);
  sendRequest(method, url, data, contentType) {
    const headers = {
      'x-rapidapi-host': this.x_rapidapi_host,
      'x-rapidapi-key': this.x_rapidapi_key
    };
    return fetch(this.host + url, { method, headers, body: data });
  }
}

export default new Request();
