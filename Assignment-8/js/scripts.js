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

var $nav = $('nav-container');
var $intro = $('intro');
var $posts = $('#post-container');

function initPosts(){
  for(var i = 0; i < data.length; i++){
    var postId = 'post-' + data(i).id,
    $post = $('<section></section>'),
    $title = $('<h2 class="title"></h2>'),
    $body = $('<blockquote></blockquote>'),
    $author = $('<span class="author"></span>'),
    $navItem = $('<li></li>');

    //add post data
    

  }
}
