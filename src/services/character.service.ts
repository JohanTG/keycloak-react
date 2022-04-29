import http from "./http";

class CharacterService {
  getAll() {
    return http.get('character/');
  }
  get(id: number) {
    return http.get(`character/${id}`);
  }
}

export default new CharacterService();