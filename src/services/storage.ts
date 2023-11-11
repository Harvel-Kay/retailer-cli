import jwtDecode from "jwt-decode";
import Store from "../enums/storage";
import IUser from "../interfaces/user";

class LStorage {
  user(): null | IUser {
    try {
      const token = localStorage.getItem(Store.Auth_id);
      if (!token) return null;

      // A verification request to the server required
      return jwtDecode(token);
    } catch (err) {
      console.log("Error Decoding User...");
    }
    return null;
  }

  setToken(token: string) {
    localStorage.setItem(Store.Auth_id, token);
  }

  getToken(): string | null {
    return localStorage.getItem(Store.Auth_id);
  }

  removeUser() {
    localStorage.removeItem(Store.Auth_id);
  }
}

const store = new LStorage();

export default store;
