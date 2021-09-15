const token = Object.freeze({
    clear() {
        localStorage.removeItem("token");
    },
    setToken(value = "") {
        localStorage.setItem("token", value);
    },
    getterToken(): string {
        return localStorage.getItem("token") || "";
    },
});

export default token;
