import http from "../http-common";

class RecommendationDataService {
  getAll() {
    return http.get("/recommendations");
  }

  get(id) {
    return http.get(`/recommendations/${id}`);
  }

  create(data) {
    return http.post("/recommendations", data);
  }

  update(id, data) {
    return http.put(`/recommendations/${id}`, data);
  }

  delete(id) {
    return http.delete(`/recommendations/${id}`);
  }

  deleteAll() {
    return http.delete(`/recommendations`);
  }

  findByTitle(title) {
    return http.get(`/recommendations?title=${title}`);
  }
}

export default new RecommendationDataService();