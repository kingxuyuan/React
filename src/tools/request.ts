import server from './server';

interface ResquestParams<T> {
    url?: string,
    method?: string,
    params?: T
}

const request = <T>({ url, method = 'get', params }: ResquestParams<T>): any => {
    let data: any = {};
    if (method === 'get') data = { params };
    if (method === 'post') data = { data: params };

    return new Promise((resolve) => {
        server({
            url,
            method,
            ...data
        }).then((res: any) => {
            resolve(res);
        })
    })
}

export default request;