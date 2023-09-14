interface IFixer {
    urlMatches(domain: string): boolean,
    fix(domain: string): string,
}

function contains(items: string[], item: string): boolean {
    return items.indexOf(item) != -1;
}

const FIXERS: IFixer[] = [
    { // Twitter
        urlMatches(domain: string): boolean {
            return contains(["www.twitter.com", "twitter.com", "www.x.com", "x.com"], domain);
        },
        fix(domain: string): string {
            return "fxtwitter.com";
        },
    },
    { // Pixiv
        urlMatches(domain: string): boolean {
            return contains(["www.pixiv.net", "pixiv.net"], domain);
        },
        fix(domain: string): string {
            return "www.phixiv.net";
        },
    },
    { // Tiktok
        urlMatches(domain: string): boolean {
            return contains(["www.tiktok.com", "tiktok.com"], domain);
        },
        fix(domain: string): string {
            return "www.vxtiktok.com";
        },
    },
    { // Instagram
        urlMatches(domain: string): boolean {
            return contains(["www.instagram.com", "instagram.com"], domain);
        },
        fix(domain: string): string {
            return "www.ddinstagram.com";
        },
    },
]

export default FIXERS;