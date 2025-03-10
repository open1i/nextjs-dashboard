/**
 * 
 loading.tsx is a special Next.js file built on top of React Suspense. It allows you to create fallback UI to show as a replacement while page content loads.

 Since <SideNav> is static, it's shown immediately. The user can interact with <SideNav> while the dynamic content is loading.

  The user doesn't have to wait for the page to finish loading before navigating away (this is called interruptable navigation).
 */
export default function Loading() {
  return <div>Loading...</div>;
}