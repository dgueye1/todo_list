//API calls
const BASE_URL = 'http://localhost:3000';
const todopath = 'todos';


const deletePost = (id) => {
  const postsEndPoint = [BASE_URL, todopath, id].join('/');
  return fetch(postsEndPoint, {
    method: 'DELETE',
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
    const form = document.querySelector(".todo_form");
    form.addEventListener('submit', function(e){
    const postsEndPoint = [BASE_URL, todopath].join('/');
    return fetch(postsEndPoint, {
      method: 'POST',
      body: JSON.stringify({
          title:textbox,
          completed:Boolean(completed)
      })
    })
  });
  };

//Retrieve Posts
const getPosts = () => {
    const postsEndPoint = [BASE_URL, todopath].join('/');
    return fetch(postsEndPoint).then(response => 
      response.json()
    ).then(json => {
        const posts = json.map(post =>
        {
            return`
                <div class="todo_title">${post.title}</div> 
                  `
        }).join("");
        document.querySelector(".todos").innerHTML = posts;
    });
  };

  getPosts();

  //Updating Posts
  const updatePost = (id) => {
    update_button = document.querySelector()
    const postsEndPoint = [BASE_URL, todopath, id].join('/');
    return fetch(postsEndPoint, {
      method: 'PUT',
      body
    }).then((response) => {
      return response.json();
    });
  };

