export class AbstractService {
    constructor(baseURL) {
        this.baseURL = baseURL;
        const headers = new Headers();
        headers.append("Content-Type", "text/plain");

        this.options = { method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default' };
    }
    
    get(params) {
        const urlToReq = new URL(this.baseURL);
        params.forEach(param => {
            urlToReq.searchParams.append(`${param.name}`, param.value);
        });
        const myRequest = new Request(urlToReq, this.options);
        return new Promise((resolve) => {
            return fetch(myRequest).then(res => {
                return res.json();
            }).then(res => {resolve(res.data)});
        })
    }
}