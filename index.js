fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const userContainer = document.getElementById('user-list');
    users.forEach(user => {
      userContainer.innerHTML += `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
      `;
    });
  });


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const postContainer = document.getElementById('post-list');
    let count = 0;
    posts.forEach(post => {
      if (count < 5) {
        postContainer.innerHTML += `
          <h3>Post by User ${post.userId}</h3>
          <p><strong>${post.title}</strong></p>
          <p>${post.body}</p>
        `;
        count++;
      }
    });
  });


fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(comments => {
    const commentContainer = document.getElementById('comment-list');
    let count = 0;
    comments.forEach(comment => {
      if (count < 5) {
        commentContainer.innerHTML += `
          <h3>Comment by ${comment.name} ${comment.email}</h3>
          <p>${comment.body}</p>
        `;
        count++;
      }
    });
  });


for (let i = 1; i <= 3; i++) {
  fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
    .then(response => response.json())
    .then(user => {
      const addressContainer = document.getElementById('address-list');
      addressContainer.innerHTML += `
        <div>
          <h3>${user.name}'s Address</h3>
          <p>Street: ${user.address.street}</p>
          <p>City: ${user.address.city}</p>
          <p>Zipcode: ${user.address.zipcode}</p>
        </div>
      `;
    });
}




