module.exports = class Image {
    constructor(id, name, size, body, uploadedAt, mimeType) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.body = body;
        this.uploadedAt = uploadedAt;
        this.mimeType = mimeType;
    }
};