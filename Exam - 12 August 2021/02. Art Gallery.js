class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        }
        let currentArticle = this.listOfArticles.find((e) => e.articleName === articleName);
        if (currentArticle && currentArticle.articleModel === articleModel) {
            currentArticle.quantity += Number(quantity);
        } else {
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName: articleName,
                quantity: Number(quantity),
            });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {
        let currentGuest = this.guests.find((e) => e.guestName === guestName);

        if (currentGuest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = 0;
        switch (personality) {
            case "Vip":
                points = 500;
                break;
            case "Middle":
                points = 250;
                break;
            default:
                points = 50;
                break;
        }
        this.guests.push({
            guestName: guestName,
            points: points,
            purchaseArticle: 0,
        });
        return `You have successfully invited ${guestName}!`;
    }
    buyArticle(articleModel, articleName, guestName) {
        let currentGuest = this.guests.find((e) => e.guestName === guestName);
        let currentArticle = this.listOfArticles.find((e) => e.articleName === articleName);
        if (!currentArticle || currentArticle.articleModel !== articleModel.toLowerCase()) {
            throw new Error("This article is not found.");
        }
        if ((currentArticle.quantity === 0)) {
            return `The ${articleName} is not available.`;
        }
        if (!currentGuest) {
            return `This guest is not invited.`;
        }
        if (this.possibleArticles[articleModel.toLowerCase()] > currentGuest.points) {
            return `You need to more points to purchase the article.`;
        } else {
            currentGuest.points -= this.possibleArticles[articleModel.toLowerCase()];
            currentArticle.quantity -= 1;
            currentGuest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel.toLowerCase()]} points.`;
        }
    }
    showGalleryInfo(criteria) {
        if (criteria === "article") {
            let result = ["Articles information:"];
            for (const article of this.listOfArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            }
            return result.join("\n");
        } else if (criteria === "guest") {
            let result = ["Guests information:"];
            for (const guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`);
            }
            return result.join("\n");
        }
    }
}

// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.addArticle("picture", "Mona Liza", 3));
// console.log(artGallery.addArticle("Item", "Ancient vase", 2));
// console.log(artGallery.addArticle("PICTURE", "Mona Liza", 1));

// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.inviteGuest("John", "Vip"));
// console.log(artGallery.inviteGuest("Peter", "Middle"));
// console.log(artGallery.inviteGuest("John", "Middle"));

const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("Photo", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
console.log(artGallery.buyArticle("picture", "Mona Liza", "John"));
console.log(artGallery.buyArticle("item", "Ancient vase", "Peter"));
console.log(artGallery.buyArticle("item", "Mona Liza", "John"));

// const artGallery = new ArtGallery("Curtis Mayfield");
// artGallery.addArticle("picture", "Mona Liza", 3);
// artGallery.addArticle("Item", "Ancient vase", 2);
// artGallery.addArticle("picture", "Mona Liza", 1);
// artGallery.inviteGuest("John", "Vip");
// artGallery.inviteGuest("Peter", "Middle");
// artGallery.buyArticle("picture", "Mona Liza", "John");
// artGallery.buyArticle("item", "Ancient vase", "Peter");
// console.log(artGallery.showGalleryInfo("article"));
// console.log(artGallery.showGalleryInfo("guest"));
