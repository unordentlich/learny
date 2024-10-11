class FlashCard {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.tags = [];
        this.lastPracticed = new Date();
    }

    constructor(question, answer, module, tags, lastPracticed) {
        this.question = question;
        this.answer = answer;
        this.module = module;
        this.tags = tags;
        this.lastPracticed = lastPracticed;
    }
    
    getQuestion() {
        return this.question;
    }
    
    getAnswer() {
        return this.answer;
    }

    setModule(module) {
        this.module = module;
    }

    addTag(tag) {
        this.tags.push(tag);
    }

    getTags() {
        return this.tags;
    }

    removeTag(tag) {
        this.tags = this.tags.filter(t => t !== tag);
    }

    practiced() {
        this.lastPracticed = new Date();
    }
}