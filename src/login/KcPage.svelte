<script lang="ts">
  import Template from './Template.svelte';
  import UserProfileFormFields from '@keycloakify/svelte/login/components/UserProfileFormFields.svelte';
  import type { KcContext } from 'keycloakify/login/KcContext';
  import type { ClassKey } from 'keycloakify/login/lib/kcClsx';
  import type { Component } from 'svelte';
  import { useI18n } from './i18n';
  import "./main.css"

  const { kcContext }: { kcContext: KcContext } = $props();

  const { i18n } = useI18n({ kcContext });

  const classes = {} satisfies { [key in ClassKey]?: string };
  const doMakeUserConfirmPassword = true;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page = async (): Promise<{ default?: Component<any> }> => {
    switch (kcContext.pageId) {
      default:
        return import('@keycloakify/svelte/login/DefaultPage.svelte');
    }
  };
</script>

{#await page() then { default: Page }}
  <Page
    {kcContext}
    {i18n}
    {classes}
    {Template}
    {UserProfileFormFields}
    doUseDefaultCss={true}
    {doMakeUserConfirmPassword}
  ></Page>
{/await}
