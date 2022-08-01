//API calls
const BASE_URL = 'http://localhost:3000';
const todopath = 'todos';
const getPosts = () => {
  const postsEndPoint = [BASE_URL, todopath].join('/');
  return fetch(postsEndPoint).then((response) => {
    return response.json();
  });
};

const deletePost = (id) => {
  const postsEndPoint = [BASE_URL, todopath, id].join('/');
  return fetch(postsEndPoint, {
    method: 'DELETE',
  }).then((response) => {
    return response.json();
  });
};
const updatePost = (id) => {
  const postsEndPoint = [BASE_URL, todopath, id].join('/');
  return fetch(postsEndPoint, {
    method: 'PUT',
  }).then((response) => {
    return response.json();
  });
};
const patchPost = (id) => {
  const postsEndPoint = [BASE_URL, todopath, id].join('/');
  return fetch(postsEndPoint, {
    method: 'PATCH',
  }).then((response) => {
    return response.json();
  });
};

//Create Posts
const createPosts = () => {
    const form = document.querySelector("todo_form");
    form.addEventListener('submit', function(e){
    const postsEndPoint = [BASE_URL, todopath].join('/');
    return fetch(postsEndPoint, {
      method: 'POST',
      body: JSON.stringify({
          title:textbox,
          completed:completed
      })
    })
  });
  };

//Retrieve Posts

const retrieve_posts = getPosts()
    .then(json => {
        console.log(json);
    })

