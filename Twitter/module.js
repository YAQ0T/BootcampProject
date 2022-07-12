const twit = document.getElementById("twit");
const twitsModule = function () {
  posts = [];
  let postIdCounter = 0;
  let commentIdCounter = 0;
  const getPosts = () => posts; //return the posts to use it later
  const addPost = function (text) {
    let twit = {};
    twit.id = "p" + postIdCounter;
    twit.text = text;
    twit.comments = [];
    posts.push(twit);
    console.log("twit has saved in the posts array");
    postIdCounter++;
  };
  const removePost = function (postID) {
    for (let j = 0; j < posts.length; j++) {
      if (posts[j].id == postID) {
        posts.splice(j, 1);
      }
    }
    console.log("twit has removed from  the posts array");
  };
  const addComment = function (text, postID) {
    commentIdCounter++;
    for (let i = 0; i < posts.length; i++) {
      if (postID == posts[i].id) {
        let comment = {};
        comment.id = "c" + commentIdCounter;
        comment.text = text;
        posts[i].comments.push(comment);
      }
    }
  };
  const removeComment = function (postID, commentID) {
    for (let i = 0; i < posts.length; i++) {
      if ((posts.id = postID)) {
        for (let j = 0; j < posts[i].comments.length; j++) {
          if (posts[i].comments[j].id == commentID)
            posts[i].comments.splice(j, 1);
        }
      }
    }
  };

  return {
    getPosts: getPosts,
    addPost: addPost,
    addComment: addComment,
    removePost: removePost,
    removeComment: removeComment,
  };
};
