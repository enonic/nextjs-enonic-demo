import { appKey } from '../enonic-connection-config';

// Example:
// import MyPage from '../components/pagetypes/MyPage;

// Content types mapped to top-level react components that render that content type.
// If content type is not found here, falls back to the default page renderer in pages/Default.tsx
export const pageSelector = {

    // Examples:
    //'my-hardcoded-appname:my-content-type': MyPage,
    //[`${appKey}:my-content-type`]: MyPage,
};

