module.exports = class Image {
    constructor(id, name, size, uploadedAt, mimeType) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.uploadedAt = uploadedAt;
        this.mimeType = mimeType;
    }
};