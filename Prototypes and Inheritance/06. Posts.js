function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let printResult = [`Post: ${this.title}`, `Content: ${this.content}`, `Rating: ${this.likes - this.dislikes}`];
            if (this.comments.length > 0) {
                printResult.push(`Comments:`);
                this.comments.forEach((comment) => {
                    printResult.push(` * ${comment}`);
                });
            }
            return printResult.join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}



const classes = solution();
let post = new classes.Post("Post", "Content");
console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let vid = new classes.BlogPost("TestTitle", "TestContent", 255);
vid.view;
vid.view;
vid.view;
console.log(vid.toString());
