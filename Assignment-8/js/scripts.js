var data = [
    {
      id: 1,
      title: 'Time',
      body: 'Time you enjoy wasting, was not wasted.',
      author: 'John Lennon'
    },
    {
      id: 2,
      title: 'Pain',
      body: 'If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. And it is in your power to wipe out this judgment now.',
      author: 'Marcus Aurelius'
    },
    {
      id: 3,
      title: 'Words',
      body: 'Some people just have a way with words, and other people â€¦ oh â€¦ not have way.',
      author: 'Steve Martin'
    },
    {
      id: 4,
      title: 'Peace',
      body: 'If everyone demanded peace instead of another television set, then thereâ€™d be peace.',
      author: 'John Lennon'
    },
    {
      id: 5,
      title: 'Art',
      body: 'Art is the imposing of a pattern on experience, and our aesthetic enjoyment is recognition of the pattern.',
      author: 'Alfred North Whitehead'
    }
  ];

var $nav = $('#nav-container');
var $intro = $('#intro');
var $posts = $('#post-container');


function initPosts(){
  for(var i = 0; i < data.length; i++){

    var postId = 'post-' + data[i].id,
    $post = $('<section class="post"></section>'),
    $title = $('<h2 class="title"></h2>'),
    $body = $('<blockquote></blockquote>'),
    $author = $('<span class="author"></span>'),
    $navItem = $('<li></li>');

    //add post data
    $title.text(data[i].title);
    $body.text(data[i].body);
    $author.text(data[i].author);

    //add nav item data
    $navItem.attr('id', data[i].id);
    $navItem.text(data[i].title);

    //Combine post elements
    $post.attr('id', postId);
    $post.append($title);
    $post.append($body);
    $post.append($author);

    //add post and nav elements to page
    $posts.append($post);
    $nav.append($navItem);

    //wire up nav item click event
    $navItem.on('click', function(){
      var id = $(this).attr('id');
      $posts.children().hide();
      $posts.find('#post-' + id).fadeIn();
    });

    //hide all post and show the intro
    $posts.children('.post').hide();
    $intro.fadeIn(1000);
  }
}
function addPost(event){
  var inputTitle = document.getElementById("title").value;
  var inputEl = document.getElementById("input-quote").value;
  inputEl.scrollTop = inputEl.scrollHeight;
  var inputAuth = document.getElementById("author").value;
  if(inputEl.value !== ""){
    var postId = 'post-' + (data.length + 1),
    $post = $('<section class="post"></section>'),
    $title = $('<h2 class="title"></h2>'),
    $body = $('<blockquote></blockquote>'),
    $author = $('<span class="author"></span>'),
    $navItem = $('<li></li>');

    $title.text(inputTitle);
    $body.text(inputEl);
    $author.text(inputAuth);
    //add nav item data
    $navItem.attr('id', (data.length + 1));
    $navItem.text(inputTitle);

    //Combine post elements
    $post.attr('id', postId);
    $post.append($title);
    $post.append($body);
    $post.append($author);

    //add post and nav elements to page
    $posts.append($post);
    data.push($post);
    $nav.append($navItem);
    console.log(data[data.length-1]);

    //wire up nav item click event
    $navItem.on('click', function(){
      var id = $(this).attr('id');
      $posts.children().hide();
      $posts.find('#post-' + id).fadeIn();
    });

    //hide all post and show the intro
    $posts.children('.post').hide();
    $intro.fadeIn(1000);

    //reset input
    inputTitle.value = "Title";
    inputEl.value = "Quote";
    inputAuth.value = "Author";
  }
}
function init(){
  initPosts();
  document.getElementById("add-task").onclick = addPost;
}

init();
