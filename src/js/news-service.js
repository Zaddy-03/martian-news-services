export default class MarsConditions {
    static getConditions() {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `https://api.maas2.apollorion.com`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(request.response);
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }
    static getDailyPhoto() {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `https://api.nasa.gov/planetary/apod?api_key=KqdZ3rPg5aKmZaGrahQYL7kZrUMh24s2G9R67r2x`
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(request.response);
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }
    static getDailyMarsPhoto() {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `https://api.nasa.gov/planetary/apod?api_key=KqdZ3rPg5aKmZaGrahQYL7kZrUMh24s2G9R67r2x`
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(request.response);
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }
}