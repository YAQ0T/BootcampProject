const renderer = Renderer();
const tweeter = twitsModule();
renderer.renderPosts(tweeter.getPosts());

$("#button").on("click", function () {
  tweeter.addPost($("#text").val());
  console.log(tweeter.getPosts());

  renderer.renderPosts(tweeter.getPosts());
});

$(".posts").on("click", "#delete", function () {
  let postId = $(this).closest(".child").attr("id");

  tweeter.removePost(postId);
  renderer.renderPosts(tweeter.getPosts());
});

$(".posts").on("click", "#sendComment", function () {
  let postId = $(this).closest(".child").attr("id");

  comment = $(this).closest(".child").find("#coomment").val();

  tweeter.addComment(comment, postId);
  renderer.renderPosts(tweeter.getPosts());
});

$(".posts").on("click", "li", function () {
  let postId = $(this).closest(".child").attr("id");
  let commentId = $(this).closest("div").attr("id");
  tweeter.removeComment(postId, commentId);
  renderer.renderPosts(tweeter.getPosts());
});
