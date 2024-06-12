Array.prototype.sameStructureAs = function (other) {
    if (this.length !== other.length) {
        return false;
    }

    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) !== Array.isArray(other[i])) {
            return false;
        }

        if (Array.isArray(this[i]) && Array.isArray(other[i])) {
            if (!this[i].sameStructureAs(other[i])) {
                return false;
            }
        }
    }

    return true;
};
