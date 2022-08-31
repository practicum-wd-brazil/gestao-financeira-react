class Api {
  constructor(baseUrl) {
    this.baseURL = baseUrl;
  }

  getAll() {
    return fetch(this.baseURL).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Erro no getAll");
    });
  }

  save(record) {
    return fetch(this.baseURL, {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      res.text().then((err) => console.error(err));
      return Promise.reject("Erro no save");
    });
  }

  remove(id) {
    return fetch(`${this.baseURL}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        return;
      }

      return Promise.reject("Erro no remove");
    });
  }
}

const api = new Api("http://localhost:3005/api");
export default api;
