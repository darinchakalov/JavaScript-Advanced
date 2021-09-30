function solution(command) {
    if (command === "upvote") {
        this.upvotes++;
    } else if (command === "downvote") {
        this.downvotes++;
    } else if (command === "score") {
        let totalVotes = this.upvotes + this.downvotes
        let toAdd = 0
        if (totalVotes > 50) {
            toAdd = this.upvotes > this.downvotes ? Math.ceil(this.upvotes * 0.25) : Math.ceil(this.downvotes * 0.25)
        }
        let finalScore = this.upvotes - this.downvotes;
        let postType = "";
        if (totalVotes < 10) {
            postType = 'new'
        } else {
            if (finalScore < 0) {
                postType = "unpopular";
            } else if ((this.upvotes / totalVotes) * 100 > 66 ) {
                postType = 'hot'
            } else if (totalVotes > 100 && (this.upvotes / totalVotes) * 100 < 66) {
                postType = 'controversial'
            }
        }

        let result = [this.upvotes + toAdd, this.downvotes + toAdd, finalScore, postType];
        return result;
    }
}

let post = {
    id: "3",
    author: "emil",
    content: "wazaaaaa",
    upvotes: 100,
    downvotes: 100,
};
solution.call(post, 'wtf')
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');   // (executed 50 times)
score = solution.call(post, 'score');
console.log(score);

var forumPost = {
    id: "1",
    author: "pesho",
    content: "hi guys",
    upvotes: 0,
    downvotes: 0,
};
solution.call(forumPost, 'upvote');
console.log(solution.call(forumPost, 'score'));
