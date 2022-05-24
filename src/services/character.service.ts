import http from "./http";

class CharacterService {
  getAll(page: number) {
    return http.get('character/', { params: { page } });
  }
  get(id: number) {
    return http.get(`character/${id}`);
  }
}

export default new CharacterService();