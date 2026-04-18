/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  /** Публичная ссылка на Google Form (открывается в новой вкладке) */
  readonly PUBLIC_GOOGLE_FORM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
