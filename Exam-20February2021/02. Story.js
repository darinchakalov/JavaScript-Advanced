class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this._currentCommentID = 1;
        this._currentReplyId = 1.1;
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        }
        if (this.creator === username) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }
    comment(username, content, id) {
        if (id === undefined || !this._comments.find((e) => e.Id === id)) {
            id = this._comments.length + 1;

            this._comments.push({
                Id: id,
                Username: username,
                Content: content,
                Replies: [],
            });
            return `${username} commented on ${this.title}`;
        }
        if (this._comments.find((e) => e.Id === id)) {
            let currentComment = this._comments.find((e) => e.Id === id);
            let replyId = currentComment.Replies.length + 1;
            currentComment.Replies.push({
                Id: currentComment.Id + replyId * 0.1,
                Username: username,
                Content: content,
            });
            return `You replied successfully`;
        }
    }
    toString(sortingType) {
        switch (sortingType) {
            case "asc":
                this._comments.sort((a,b) => a.Id - b.Id)
                this._comments.forEach(el => {
                    el.Replies.sort((a,b) => a.Id - b.Id)
                });
                break;
            case "desc":
                this._comments.sort((a,b) => b.Id - a.Id) 
                this._comments.forEach(el => {
                    el.Replies.sort((a,b) => b.Id - a.Id)
                });
                break;
            case "username":
                this._comments.sort((a,b) => a.Username.localeCompare(b.Username)) 
                this._comments.forEach(el => {
                    el.Replies.sort((a,b) => a.Username.localeCompare(b.Username))
                });
                break;
            default:
                break;
        }
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, `Comments:`];
        this._comments.forEach((comment) => {
            result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`);
            comment.Replies.forEach((reply) => {
                result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`);
            });
        });
        return result.join("\n");
    }
}

let art = new Story("My Story", "Anny");
console.log(art.like("John")) //"John liked My Story!";
console.log(art.likes)// "John likes this story!");
console.log(art.dislike("Sally"))// "You can't dislike this story!");
console.log(art.like("Ivan"))//"Ivan liked My Story!");
console.log(art.like("Steven"))// "Steven liked My Story!");
console.log(art.likes)// "John and 2 others like this story!");
console.log(art.comment("Anny", "Some Content"))//,"Anny commented on My Story");
console.log(art.comment("Ammy", "New Content", 1))//,"You replied successfully");
console.log(art.comment("Zane", "Reply", 2))//,"Zane commented on My Story");
console.log(art.comment("Jessy", "Nice :)"))//, "Jessy commented on My Story");
console.log(art.comment("SAmmy", "Reply@", 2))//, "You replied successfully");

console.log(art.toString('asc'))
// `Title: My Story
// Creator: Anny
// Likes: 3
// Comments:
// -- 1. Anny: Some Content
// --- 1.1. Ammy: New Content
// -- 2. Zane: Reply
// --- 2.1. SAmmy: Reply@
// -- 3. Jessy: Nice :)`);
