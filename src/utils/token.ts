const token = {
    setToken(value: string) {
        localStorage.setItem('token', value);
    },
    getToken(): string {
        return localStorage.getItem('token') || '';
    },
    clearn() {
        localStorage.removeItem('token');
    },
}

export default token;