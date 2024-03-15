String.prototype.capitalize = () => {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

console.log("hello world".capitalize());