Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.

    if (this.length !== other.length) {
        return false;
    }
        let TakaSama =true
        for(let i=0;i<this.length;i++)
        {
            const czyTakieSamoArray= typeof(this[i])
            const czyTakieSamoOther = typeof (other[i])

            if(czyTakieSamoArray !== czyTakieSamoOther)
            {
                TakaSama = false
                break;
            }
        }
        return TakaSama
}
