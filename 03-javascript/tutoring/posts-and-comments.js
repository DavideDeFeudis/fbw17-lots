let data = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "comments": [
      'Comment 1', 'Comment 2', 'Comment 3'
    ]
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    "comments": [
      'P2 - Comment 1', 'P2 - Comment 2', 'P2 - Comment 3'
    ]
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "comments": [
      'Comment 1', 'Comment 2', 'Comment 3', 'Comment 4', 'Comment 5',
      'Comment 6', 'Comment 7', 'Comment 8', 'Comment 9'
    ]
  }
]; // an array of postings. Every post has some comments

let post = data[2]; // pick a post from the array
printPostComments(post); // call the function 
  // to print the post comments

/**
 * This function gets a post object and will 
 * print all of it's associated comments 
 * (= the items in the array "comments")
 */
function printPostComments(postObject) {
  
  // save the comments array to a separate variable
  let comments = postObject.comments;

  // loop through the comments and print them out, line by line
  for(let i=0; i < comments.length; i++) {
    console.log(comments[i]);
  }
}

