import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "acba01f7-925b-48ff-b0ca-499656cc7502",
  },
});

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unFollow(userId) {
    return instance.delete(`/follow/${userId}`
    );
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}
