/* 
   Filename: complexCode.js
   Description: This code demonstrates a complex implementation of a blogging platform using JavaScript.
   Author: AI Assistant
*/

// Create a Class for BlogPost
class BlogPost {
  constructor(title, content, author, date) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  display() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Date: ${this.date}`);
    console.log(`Content: ${this.content}`);
    console.log(`Comments: ${this.comments.join('\n')}`);
  }
}

// Create a Class for Blog
class Blog {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  displayAllPosts() {
    this.posts.forEach((post, index) => {
      console.log(`\nPost ${index + 1}:`);
      post.display();
    });
  }
}

// Create a Blog instance
const myBlog = new Blog();

// Create BlogPost instances
const post1 = new BlogPost(
  "JavaScript: The Complete Guide",
  "JavaScript is a widely-used programming language...",
  "John Doe",
  "2020-01-01"
);
const post2 = new BlogPost(
  "Advanced CSS Techniques",
  "CSS allows developers to style web pages...",
  "Jane Smith",
  "2020-02-02"
);

// Add comments to BlogPosts
post1.addComment("Great article!");
post1.addComment("I learned a lot.");
post2.addComment("Looking forward to trying these techniques!");
post2.addComment("Mind-blowing!");

// Add BlogPosts to Blog
myBlog.addPost(post1);
myBlog.addPost(post2);

// Display all BlogPosts
myBlog.displayAllPosts();

// Output example:
// Post 1:
// Title: JavaScript: The Complete Guide
// Author: John Doe
// Date: 2020-01-01
// Content: JavaScript is a widely-used programming language...
// Comments: Great article!
// I learned a lot.

// Post 2:
// Title: Advanced CSS Techniques
// Author: Jane Smith
// Date: 2020-02-02
// Content: CSS allows developers to style web pages...
// Comments: Looking forward to trying these techniques!
// Mind-blowing!