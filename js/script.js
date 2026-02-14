import { posts } from "./posts.js";

console.log(posts);

const contentFeed = document.querySelector(".content-feed");

function generatePostsHTML(postsArr) {
  return postsArr.map((upload) => {
    const { avatar, comment, likes, location, name, post, username } = upload;
    return `
            <article class="post">
              <header class='post-header'>
                <img class='avatar' src="${avatar}" />
                <div class="name-div">
                    <p class='name'>${name}</p>
                    <p class='location'>${location}</p>
                </div>
              </header>
              <img class="post-img" src="${post}" />
              <div class="post-actions">
                <button aria-label="like">
                  <i class="fa-regular fa-heart"></i>
                </button>
                <button aria-label="comment">
                  <i class="fa-regular fa-comment"></i>
                </button>
                <button aria-label="share">
                  <i class="fa-regular fa-paper-plane"></i>
                </button>
                <span class="like-count">${likes}</span>
              </div>
              <div class="user-message-div">
                <span class="username">${username}</span>
                <p class="comment">${comment}</p>
              </div>
            </article>
        `;
  }).join('');
}

function renderFeed() {
    const postsHTML = generatePostsHTML(posts)
    contentFeed.innerHTML = postsHTML
}

renderFeed();
console.log(renderPostsHTML(posts))
