
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const IRBRC: string;
	export const PATH: string;
	export const SDKMAN_VERSION: string;
	export const GRAILS_HOME: string;
	export const HOST: string;
	export const RBENV_SHELL: string;
	export const PS1: string;
	export const COLORTERM: string;
	export const SDKMAN_DIR: string;
	export const LOGNAME: string;
	export const rvm_version: string;
	export const PWD: string;
	export const SHELL: string;
	export const PORT: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const MY_RUBY_HOME: string;
	export const GEM_HOME: string;
	export const TMPDIR: string;
	export const rvm_path: string;
	export const XPC_FLAGS: string;
	export const RUBY_VERSION: string;
	export const HEROKU_TOKEN: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const NODE_ENV: string;
	export const LC_CTYPE: string;
	export const SLACK_BOT_TOKEN: string;
	export const FORCE_COLOR: string;
	export const rvm_bin_path: string;
	export const JAVA_HOME: string;
	export const rvm_prefix: string;
	export const DEBUG_COLORS: string;
	export const GRADLE_HOME: string;
	export const COMMAND_MODE: string;
	export const npm_config_color: string;
	export const GROOVY_HOME: string;
	export const MOCHA_COLORS: string;
	export const SLACK_SIGNING_SECRET: string;
	export const XPC_SERVICE_NAME: string;
	export const BASH_SILENCE_DEPRECATION_WARNING: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const __CFBundleIdentifier: string;
	export const GRACE_PERIOD: string;
	export const HEROKU_HEADER: string;
	export const SDKMAN_PLATFORM: string;
	export const USER: string;
	export const GO111MODULE: string;
	export const SSH_AUTH_SOCK: string;
	export const EXTERNAL_SYSTEM_TOKEN: string;
	export const GEM_PATH: string;
	export const REDISCLOUD_URL: string;
	export const IDEA_INITIAL_DIRECTORY: string;
	export const HOME: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		IRBRC: string;
		PATH: string;
		SDKMAN_VERSION: string;
		GRAILS_HOME: string;
		HOST: string;
		RBENV_SHELL: string;
		PS1: string;
		COLORTERM: string;
		SDKMAN_DIR: string;
		LOGNAME: string;
		rvm_version: string;
		PWD: string;
		SHELL: string;
		PORT: string;
		SDKMAN_CANDIDATES_API: string;
		MY_RUBY_HOME: string;
		GEM_HOME: string;
		TMPDIR: string;
		rvm_path: string;
		XPC_FLAGS: string;
		RUBY_VERSION: string;
		HEROKU_TOKEN: string;
		__CF_USER_TEXT_ENCODING: string;
		NODE_ENV: string;
		LC_CTYPE: string;
		SLACK_BOT_TOKEN: string;
		FORCE_COLOR: string;
		rvm_bin_path: string;
		JAVA_HOME: string;
		rvm_prefix: string;
		DEBUG_COLORS: string;
		GRADLE_HOME: string;
		COMMAND_MODE: string;
		npm_config_color: string;
		GROOVY_HOME: string;
		MOCHA_COLORS: string;
		SLACK_SIGNING_SECRET: string;
		XPC_SERVICE_NAME: string;
		BASH_SILENCE_DEPRECATION_WARNING: string;
		SDKMAN_CANDIDATES_DIR: string;
		__CFBundleIdentifier: string;
		GRACE_PERIOD: string;
		HEROKU_HEADER: string;
		SDKMAN_PLATFORM: string;
		USER: string;
		GO111MODULE: string;
		SSH_AUTH_SOCK: string;
		EXTERNAL_SYSTEM_TOKEN: string;
		GEM_PATH: string;
		REDISCLOUD_URL: string;
		IDEA_INITIAL_DIRECTORY: string;
		HOME: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
