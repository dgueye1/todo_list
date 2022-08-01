//API calls
const BASE_URL = 'http://localhost:3000';
const todopath = 'todos';




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
                <p class="todo_title">${post.title}</p>
                <button type="button" class="edit_button"></button>
                <button type="button" class="delete_button" value="delete"></button> 
                  `
        }).join("");
        document.querySelector(".todos").innerHTML = posts;
    });
  };

  getPosts();

  //Updating Posts
  const updatePost = (id) => {
    const update_button = document.querySelector(".edit_button");
    update_button.addEventListener('click', () =>{
    const postsEndPoint = [BASE_URL, todopath, id].join('/');
    return fetch(postsEndPoint, {
      method: 'PUT',
      body:JSON.stringify
    }).then((response) => {
      return response.json();
    })
    .then(json =>{
        return `
        <input type="text" name="change_title" id="change_title" placeholder="${json.title}">
        `
    })
    });
  };

  //Delete Post
  const deletePost = (id) => {
    const postsEndPoint = [BASE_URL, todopath, id].join('/');
    return fetch(postsEndPoint, {
      method: 'DELETE',
    }).then((response) => {
      return response.json();
    })
  };

  const deleteall = (posts) =>{
    posts.addEventListener('click', (event) => {
        if (name?.startsWith('delete_button')) {
          const id = +name.substring(11);
          deletePost(id).then(() => {
            state.posts = state.posts.filter((post) => {
              return post.id !== id;
            });
          });
        }
      });
    };

