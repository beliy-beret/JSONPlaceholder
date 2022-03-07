import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export async function getUsers() {
  const res = await instance.get('users');
  return res.data;
}

export async function getProfile(userId: number) {
  const res = await instance.get('users', {
    params: {
      id: userId,
    },
  });
  return res.data;
}

export async function getPosts(userId: number) {
  const res = await instance.get('posts', {
    params: {
      userId: userId,
    },
  });
  return res.data;
}
