---
title: "Beyond the Code: Why Authentication Matters in CI/CD"
description: "\"This article is for anyone looking to understand authentication mechanisms and learn how CI platform, Harness, manages various types of authentication.\"\n\nIntroduction\nTechnology is rapidly transforming our daily applications, from messaging to gamin..."
date: 2024-10-20
draft: false
readTime: 11
views: 87
---
> "This article is for anyone looking to understand authentication mechanisms and learn how CI platform, Harness, manages various types of authentication."

## Introduction

Technology is rapidly transforming our daily applications, from messaging to gaming, enhancing how we interact with the digital world. These apps are continually evolving through seamless updates, often unnoticed by users. At the heart of this evolution is CI/CD (Continuous Integration and Continuous Delivery), a process that automates development and deployment, enabling engineers to roll out new features and fixes with unprecedented speed.

However, with the speed of these releases comes the need for strong security. As more updates are pushed out, it's crucial to ensure that only authorized users can access or modify the system. This is where authentication becomes vital, protecting apps while keeping updates seamless and secure.

In this article, we will explore the importance of CI/CD authentication and how it can be seamlessly integrated into modern software development using platforms like [Harness](https://www.harness.io/products/platform).

## Ensuring Security in CI/CD

To maintain the security of CI/CD pipelines, it’s essential to integrate authentication and authorization along with regular auditing. This combination ensures that only authorized individuals can access the system while monitoring their activities for added safety.

<div data-node-type="callout">
<div data-node-type="callout-emoji"></div>
<div data-node-type="callout-text"><em>In this article, we’ll focus specifically on authentication. For more details on authorization, you can refer to the relevant resources </em><a target="_blank" rel="noopener noreferrer nofollow" href="https://developer.harness.io/docs/platform/role-based-access-control/rbac-in-harness" style="pointer-events: none"><em>here</em></a><em>.</em></div>
</div>

**What is Authentication?**

Authentication is all about ensuring that only the right people can access important information, using methods like passwords, biometrics, or tokens. Identity providers (IdPs) such as Google SSO, Azure AD, or Okta handle this by allowing users to log in once and use that verified identity across multiple applications.

Authentication can generally be categorized into three main types:

* **Identity Providers (IdPs):** These systems (e.g., Okta, Azure AD, Google SSO) authenticate users and manage access to applications. IdPs simplify login by allowing users to log in once and access multiple apps without needing separate passwords. They also issue tokens to prove authentication.
    
* **Tokens:** OAuth tokens or API keys are used for non-interactive authentication, granting users access without re-entering passwords. Tokens are digital keys provided by IdPs.
    
* **Multi-Factor Authentication (MFA):** MFA requires two or more verification methods, like passwords and biometrics, enhancing security and reducing unauthorized access risks.
    
    Harness offers these mechanisms to streamline and secure access for users.
    

## Harness Authentication Capabilities

Harness offers several authentication mechanisms to ensure security while maintaining the flexibility CI/CD pipelines require. Here’s a deeper look at the authentication options Harness provides, and when each should be used:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1729450048359/47d20ffd-813b-4322-8759-b6c0dd164e8c.png)

1. Single Sign-On (SSO) with Identity Providers
    
    1. SAML
        
    2. LDAP
        
    3. OAuth
        
2. Two Factor Authentication
    

It is recommended to use a **Harness Account** when you want centralized control over user access, detailed auditing, and integration with Harness features. It’s ideal for organizations that need specific security policies and user management.

### Login via Harness Account

When using Harness for authentication, you can configure various settings to enhance password strength and account security, which is essential for establishing a secure CI/CD pipeline.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1729447868040/2d4c913a-9f98-4aea-9a4d-15b1783b8000.gif)

* **Enforcing Password Strength**: Require users to create complex passwords with a mix of letters, numbers, and symbols to reduce the risk of unauthorized access.
    
* **Periodically Expiring Passwords**: Set policies to require users to change their passwords at regular intervals, which helps mitigate the risk of compromised credentials.
    
* **Enforcing Lockout Policy**: Implement a lockout mechanism after a certain number of failed login attempts, preventing brute force attacks.
    
* **Enforcing Two-Factor Authentication (2FA)**: Require an additional verification step, such as a code sent to a mobile device, to enhance security beyond just passwords.
    

### Public OAuth Providers

Public OAuth providers, like Google, Azure, and GitHub, allow users to access third-party applications using their existing accounts, streamlining the login process.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1729435713441/af5a1fdf-b78b-452d-bbc9-e433d9d65d93.png)

Here's how it works:

1. **User Initiates Login**: The user selects the OAuth provider option on the application’s login page.
    
2. **Authorization Request**: The application sends a request to the OAuth provider for permission to access specific user information.
    
3. **User Consent**: The user is prompted to grant access and can see what data the application will access.
    
4. **Token Issuance**: Upon approval, the provider issues an access token to the application, enabling it to retrieve user data securely without needing the user’s password.
    

This method enhances security by minimizing password exposure and simplifying the user experience.

## Single Sign-On (SSO) with Identity Providers

Single Sign-On (SSO) allows users to log in once and gain access to multiple systems without needing to manage separate credentials. In our CI/CD pipeline, SSO simplified user access by connecting Harness with our existing IdP (Okta, Azure, or Onelogin).

![source : ByteByteGo.com](https://cdn.hashnode.com/res/hashnode/image/upload/v1729681812590/a6249209-c0e1-48c5-9335-4dd3dae21d13.png)

*Image source : ByteByteGo.com*

**Why Use SSO?**

* It provides centralized user management, making it easier to control access to the pipeline and environments.
    
* It reduces the overhead of managing multiple passwords while integrating seamlessly with corporate security policies like MFA.
    

### SSO with Security Assertion Markup Language(SAML).

SAML (Security Assertion Markup Language) is an open standard for exchanging authentication and authorization data between parties, particularly between an identity provider and a service provider.

It enables single sign-on (SSO), allowing users to authenticate once and gain access to multiple applications without needing to log in again for each one. SAML uses XML-based tokens to convey user identity and attribute information, enhancing security and user experience in enterprise environments.

Harness recommends using the SCIM protocol alongside SAML to maintain continuous and real-time synchronization of user groups and access controls.

### Why would one need SCIM API integration?

SCIM enables real-time synchronization of user data, such as additions and updates, ensuring consistent access controls and permissions.

With SCIM API integration, new users can be automatically added to Harness when the number of users increases. This automation ensures that any additions or updates to user accounts in the identity provider are reflected in Harness, streamlining user management and maintaining consistent access controls without manual intervention

This makes it easier to manage user identities, especially in organizations with a growing workforce.

### SCIM API integration settings[​](https://developer.harness.io/docs/platform/authentication/single-sign-on-saml#scim-api-integration-settings)

If you manage users and groups using the SCIM API, apply the following settings for your SAML integration.

* **SCIM connector base URL:** [`https://app.harness.io/gateway/ng/api/scim/account/<YOUR_ACCOUNT_ID>`](https://app.harness.io/gateway/ng/api/scim/account/%3CYOUR_ACCOUNT_ID)
    
    * Replace `YOUR_ACCOUNT_ID` with your Harness account ID which can be found in the *Account Setting &gt; Account Details*
        
        ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1729447968590/0850353d-28fb-48da-a1cd-409b2457b0c0.gif)
        
        The URL depends on the Harness production cluster you use: for me, it is **prod 1,** again this can be found below your Account ID  
        Prod1: [`https://app.harness.io`](https://app.harness.io),  
        Prod2: [`https://app.harness.io/gratis`](https://app.harness.io/gratis), or  
        Prod3: [`https://app3.harness.io`](https://app3.harness.io).
        
* **Unique identifier:** `userName`
    
* **Authentication Mode:** HTTP Header
    
* **Authorization:** `<YOUR_SERVICE_A`[`C`](https://developer.harness.io/docs/platform/authentication/single-sign-on-saml#scim-api-integration-settings)`COUNT_TOKEN>`
    

<div data-node-type="callout">
<div data-node-type="callout-emoji"></div>
<div data-node-type="callout-text"><em>Before proceeding with SAML SSO with IdPs, you need to create an account to set up the application and configure settings in both Harness and IdP simultaneously.</em></div>
</div>

You can find a detailed, step-by-step guide on setting up your SSO with various options, including how to configure your SAML SSO with [Harness](https://developer.harness.io/docs/platform/authentication/single-sign-on-saml#saml-sso-with-harness), [Okta](https://developer.harness.io/docs/platform/authentication/single-sign-on-saml#saml-sso-with-okta), Keycloak [OneLogin](https://developer.harness.io/docs/platform/authentication/single-sign-on-saml#saml-sso-with-onelogin), and [Azure](https://developer.harness.io/docs/platform/authentication/single-sign-on-saml#saml-sso-with-microsoft-entra-id).

### When should one use SSO with SAML?

SSO with SAML (Security Assertion Markup Language) should be used when:

* Your organization has multiple web applications, and you want users to authenticate once and gain access to all.
    
* You prefer to manage authentication centrally through an identity provider (IdP).
    
* You need enhanced security features, like multi-factor authentication, and single-sign-on capabilities.
    
* Your users operate within an enterprise environment, where SAML is commonly supported by various applications. This allows for secure authentication across services without the need for multiple passwords.
    

### SSO with Lightweight Directory Access Protocol (LDAP)

Harness allows users to log in using their LDAP accounts, such as Active Directory and OpenLDAP. By connecting Harness to your LDAP directory, you can create user groups in Harness that sync with your LDAP users.

This way, people in your LDAP directory can easily access Harness using their existing email and password without needing to create separate credentials.

**What is LDAP?**

LDAP (Lightweight Directory Access Protocol) is a protocol used to access and manage directory services. It enables organizations to store and retrieve user information, such as email addresses and passwords, in a centralized database.

It is commonly used for managing user authentication and authorization, allowing users to log in to various applications with a single set of credentials. It supports hierarchical structures, making it easier to organize user data in a way that reflects the organization’s structure.

<div data-node-type="callout">
<div data-node-type="callout-emoji"></div>
<div data-node-type="callout-text"><em>To enable LDAP integration in Harness, an enterprise account is required. This ensures that organizations can manage user authentication securely through their existing LDAP directories.</em></div>
</div>

**SSO with LDAP**

To set up Single Sign-On (SSO) with [**LDAP in Harness**](https://developer.harness.io/docs/platform/authentication/single-sign-on-sso-with-ldap#add-ldap-sso-provider), follow these steps:

1. **Add LDAP as an SSO Provider**: Authenticate with your LDAP server and configure how Harness will query it for users and groups.
    
2. **Create a User Group**: Link a Harness User Group to your LDAP directory so that users are automatically synced and authorized.
    
3. **Enable the LDAP Provider**: Set it as the SSO provider in Harness.
    
4. **Verify the Setup**: Log in to Harness using one of the synchronized LDAP users.
    

**Ports and Permissions**

* **Ports**:
    
    * HTTPS: 443
        
    * LDAP without SSL: 389
        
    * Secure LDAP (LDAPS): 636
        

By default, LDAP traffic is unencrypted, but you can secure it using SSL/TLS.

### When should one use SSO with LDAP?

SSO with LDAP should be used when:

* You want to integrate with existing on-premises directory services, such as Active Directory or OpenLDAP.
    
* Your organization already relies on LDAP for user authentication and management.
    
* You need to centralize authentication for internal applications that support LDAP.
    
* You want to provide users with a seamless login experience using their LDAP credentials.
    
* Your infrastructure and applications are better suited to use LDAP over cloud-based identity services.
    

It's typically used in enterprise environments with legacy or local directory management needs.

### SSO with OAuth

Single Sign-On (SSO) integration with OAuth 2.0 providers like GitHub, Google, and Microsoft Entra ID, allows users to log in using their existing accounts. This setup requires that each user's email in Harness matches their email with the OAuth provider.

Only users in groups with the necessary permissions can configure OAuth SSO.

**Key Steps:**

1. Enable OAuth 2.0 SSO in Harness and choose the providers.
    
2. Test the setup by logging in with users from each provider.
    

**Lockout Prevention Tips:**

* Use an admin account to set up OAuth and stay logged in while testing.
    
* Ensure admin users have matching email addresses with the OAuth provider.
    

You can restrict which users can log in to Harness through OAuth 2.0 by limiting the allowed email domains. By default, any invited user can log in using an enabled OAuth provider like Google or GitHub. However, if you want only users with a specific domain, like "**vikramsahu.in**," to access Harness via OAuth, you can configure this restriction.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1729445213605/e211cad9-c52a-4684-a7ca-0295de2578a1.gif)

For example, if Google is the OAuth provider, only users with email addresses ending in "@**vikramsahu.in**" will be permitted to log in.

### When should one use SSO with OAuth?

SSO with OAuth should be used when:

* You want to integrate with cloud-based applications and services.
    
* You need to simplify user access across multiple platforms like Google, GitHub, or Microsoft.
    
* Your organization prefers using modern, token-based authentication methods for enhanced security.
    
* You want to allow users to log in with existing accounts from third-party providers, improving user experience.
    
* You are building applications that require delegated access to user resources without sharing passwords.
    

OAuth is especially suitable for web and mobile applications.

## Two-factor authentication

Two-factor authentication (2FA) is an added security measure that requires users to provide two forms of verification before accessing their accounts. This usually involves something you know (like a password) and something you have (like a mobile app or authentication code).

Even if your password is compromised, 2FA helps protect your account by requiring the second layer of verification. This strengthens security by reducing the risk of unauthorized access to your data or services.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1729445770523/5b832315-b43e-457c-85d4-f1f928d4182b.gif)

To enable two-factor authentication (2FA) for your profile in Harness:

1. Go to your **Profile or Account Settingswrite** by clicking on the User Profile icon.
    
2. Toggle the **Two-Factor Authentication** switch to enable it.
    
3. Use a 2FA app like Google Authenticator to scan the QR code or manually enter the Secret Key.
    
4. Once added, select **Enable**.
    
5. On your next login, you’ll need to provide a code from your 2FA app after entering your password.
    

To enforce 2FA for all users, admins can enable 2FA account-wide, prompting all members to set it up.

### When to use Two-factor authentication?

Two-factor authentication (2FA) should be used when:

* You need an added layer of security beyond just a password, especially for sensitive accounts (like email or banking).
    
* You want to protect against unauthorized access from compromised passwords.
    
* Your organization handles confidential data or complies with regulations requiring enhanced security.
    
* You want to ensure that users have a secure method to recover their accounts in case of credential theft.
    
* You are implementing access control for systems that require stringent security measures.
    

## Conclusion

In conclusion, understanding and implementing strong authentication methods, such as OAuth 2.0, SAML, and LDAP, alongside provisioning solutions like SCIM, are crucial to ensuring security in cloud-based platforms like Harness.

These methods not only simplify the login process through Single Sign-On (SSO) but also enhance security with features like two-factor authentication (2FA) and domain restrictions.

By integrating these solutions, organizations can streamline user management while maintaining strict security protocols, ensuring safe and seamless access across their infrastructure.
