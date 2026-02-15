import {v4 as uuidv4} from "https://cdn.jsdelivr.net/npm/uuid@13.0.0/+esm";

export const posts = [
  {
    uuid: uuidv4(),
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    isLiked: false,
    isShared: false,
    isCommented: false,
    
  },
  {
    uuid: uuidv4(),
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    isLiked: false,
    isShared: false,
    isCommented: false,
  },
  {
    uuid: uuidv4(),
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    isLiked: false,
    isShared: false,
    isCommented: false,
  },
];
