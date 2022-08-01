//API calls
const BASE_URL = 'http://localhost:3000';
const todopath = 'todos';
const getPosts = () => {
  const postsEndPoint = [BASE_URL, postsPath].join('/');
  return fetch(postsEndPoint).then((response) => {
    return response.json();
  });
};

const deletePost = (id) => {
  const postsEndPoint = [BASE_URL, postsPath, id].join('/');
  return fetch(postsEndPoint, {
    method: 'DELETE',
  }).then((response) => {
    return response.json();
  });
};
const updatePost = (id) => {
  const postsEndPoint = [BASE_URL, postsPath, id].join('/');
  return fetch(postsEndPoint, {
    method: 'PUT',
  }).then((response) => {
    return response.json();
  });
};
const patchPost = (id) => {
  const postsEndPoint = [BASE_URL, postsPath, id].join('/');
  return fetch(postsEndPoint, {
    method: 'PATCH',
  }).then((response) => {
    return response.json();
  });
};

