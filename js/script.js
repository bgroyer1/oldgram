import { posts } from "./posts.js";

console.log(posts);

const contentFeed = document.querySelector(".content-feed");

function generatePostsHTML(postsArr) {
  return postsArr.map((upload) => {
    const { avatar, uuid, isLiked, isCommented, isShared, comment, likes, location, name, post, username } = upload;
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
                <div class="post-actions-button-div">
                    <button aria-label="like">
                      <i data-like='${uuid}' id='like-btn' class="fa-${isLiked ? 'solid' : 'regular'} fa-heart ${isLiked ? 'liked' : ''}"></i>
                    </button>
                    <button aria-label="comment">
                      <i data-comment='${uuid}' id='share-btn'  class="fa-${isCommented ? 'solid' : 'regular'} fa-comment ${isCommented ? 'commented' : ''}"></i>
                    </button>
                    <button aria-label="share">
                      <i data-share='${uuid}' id='share-btn' class="fa-${isShared ? 'solid' : 'regular'} fa-paper-plane ${isShared ? 'shared' : ''}"></i>
                    </button>
                </div>
                <span class="like-count">${likes} likes</span>
              </div>
              <div class="message-div">
                <p class="comment"><span class='username'>${username}</span> ${comment}</p>
              </div>
            </article>
        `;
  }).join('');
}
renderFeed();

function renderFeed() {
    const postsHTML = generatePostsHTML(posts)
    contentFeed.innerHTML = postsHTML
}

function findSelectedPost(uuid) {
  return posts.find(post => post.uuid === uuid)
}

const handleLikeClick = (uuid) => {
  const targetPost = findSelectedPost(uuid)
  targetPost.isLiked = !targetPost.isLiked
  renderFeed()
}

const handleShareClick = (uuid) => {
  const targetPost = findSelectedPost(uuid)
  targetPost.isShared = !targetPost.isShared
  renderFeed();
}

const handleCommentClick = (uuid) => {
  const targetTweetObj = findSelectedPost(uuid)
  targetTweetObj.isCommented = !targetTweetObj.isCommented
  renderFeed()
}

document.addEventListener('click', (e) => {
  const t = e.target.dataset
  if (t.like) {
    handleLikeClick(t.like)
  } else if (t.share) {
    handleShareClick(t.share)
  } else if (t.comment) {
    handleCommentClick(t.comment)
  }
})

console.log(contentFeed.children)
