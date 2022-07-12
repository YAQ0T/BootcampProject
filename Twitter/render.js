const Renderer = function () {
  const renderPosts = function (posts) {
    $(".posts").empty();
    for (let post of posts) {
      $(".posts").append(
        " <div class='child' id=" +
          post.id +
          ">  <h2>" +
          post.text +
          "</h2>  <ul class=comments>  </ul>  <div>    <input type='text' id='coomment' style='margin-right: 8px' />  <div> <input type='button' value='Comment' id='sendComment' />  </div>  <input type='button' value='delete post' id='delete' /></div></div>"
      );

      for (let comment of post.comments) {
        text = comment.text;
        text = "<li>" + comment.text + "</li>";
        $("#" + post.id)
          .closest(".child")
          .find(".comments")
          .append("<div id=" + comment.id + ">" + text + "</div>");
      }
    }
  };
  return {
    renderPosts,
  };
};
