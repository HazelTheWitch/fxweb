import FIXERS from "./handler";

function format_url(protocol: string, domain: string, path: string): string {
    return `${protocol}//${domain}${path}`
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

        const original_domain = url.pathname.split("/")[1];
        const original_path = url.pathname.substring(original_domain.length + 1);
        let redirect_url = format_url(url.protocol, original_domain, original_path);

        for (let fixer of FIXERS) {
            if (fixer.urlMatches(original_domain)) {
                redirect_url = format_url(url.protocol, fixer.fix(original_domain), original_path);
                break;
            }
        }

        return Response.redirect(redirect_url);
	},
};
