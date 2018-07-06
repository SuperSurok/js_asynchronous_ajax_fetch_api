const http = new easyHTTP;

// Get Request
// (function() {
// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',
//     function(err, posts) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(posts);
//         }
//     });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/2',
//     function(err, posts) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(posts);
//         }
//     });
// })();

// Post Request

// Create Data
const someData = {
    title: 'Custom Post',
    body: 'This Custom Post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', someData, function(err, post) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(post);
//     }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5',
//     someData,
//     function(err, post) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(post);
//         }
//     });

// Delete Post

http.delete('https://jsonplaceholder.typicode.com/posts/1',
    function(err, response) {
        if (err) {
            console.log(err)
        } else {
            console.log(response);
        }
    });