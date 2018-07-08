/**
 * Obtains parameters from the hash of the URL
 * @return Object
 */
export function getHashParams(hash) {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = hash.substring(12);
    while ( e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}