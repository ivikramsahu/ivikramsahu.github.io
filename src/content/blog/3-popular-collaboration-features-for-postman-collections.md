---
title: "3 Popular Collaboration Features for Postman Collections"
description: "We all know that Postman Collections are one of the most important pillars of the Postman API Platform. They allow you to organize, manage, and document your APIs efficiently, and they act as a central storage where you can save your API requests.\nBu..."
date: 2022-02-15
draft: false
readTime: 4
views: 10
---
---

We all know that [Postman Collections](https://learning.postman.com/docs/getting-started/creating-the-first-collection/) are one of the most important pillars of the [Postman API Platform](https://www.postman.com/product/what-is-postman/). They allow you to organize, manage, and document your APIs efficiently, and they act as a central storage where you can save your API requests.

But there are many features attached to a collection that make using Postman user-friendly—and a few of the most popular ones are the move, duplicate, and share features. You can find these functions by hovering over a collection name and clicking the three dots as shown in the screenshot below:

![Options for collection activity](https://cdn.hashnode.com/res/hashnode/image/upload/v1720788548889/ea88844d-980a-43c5-b7f8-887aa24c1317.png)

*Options for collection activity*

Let’s have a look at these three foundational features in detail.

## 1\. Move

The move feature allows you to transfer a collection from one workspace to another. This feature helps you collaborate effectively, especially while working with your team.

Let’s assume you’ve made some changes to the collection on your personal workspace, and now you want to hand over the collection to another member of your team. It becomes super simple to transfer the collection using this functionality.

When moving a collection, there are a few prerequisites:

1. [Roles and permissions](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#collection-roles): To use the move feature without any restriction, you need to have editor access for the collection.
    
2. A collection cannot be moved from the team, private, or [public workspaces](https://blog.postman.com/introducing-postman-public-workspaces/) to personal workspaces.
    

### How to move a collection in Postman

1. Hover over the collection name, click the three dots ( **°°°** ) beside the star icon.
    
2. Select **Move** from the list.
    
3. Find and select the workspace using the search bar, then click on **Move Collection**.
    
4. Check and confirm the target workspace.
    

![Moving a collection](https://cdn.hashnode.com/res/hashnode/image/upload/v1720788550453/fe3726b1-0ea0-4467-a533-b211ed5f8a36.gif)

*Moving a collection*

## 2\. Duplicate

The Duplicate feature is similar to cloning a repository on [GitHub](https://blog.postman.com/better-practices-for-git-version-control-in-postman/). This feature can be used to create a copy of the current version of the collection which is kept untouched, and another can be used to work parallely on your new API features.

### How to duplicate a collection in Postman

1. Hover over the collection name, click the three dots ( **°°°** ) beside the star icon.
    
2. Select **Duplicate** from the list.
    

Once you click **Duplicate** , you can find a new collection with the collection name format of “collection name Copy.” (For example, if the initial collection is ABC **,** then the copy would be ABC Copy and if duplicating recursively, then the resulting collections would be named ABC Copy 2, ABC Copy 3 **,** and so on.)

![Duplicating a collection](https://cdn.hashnode.com/res/hashnode/image/upload/v1720788552805/bc77d823-072d-4c11-94d0-7de9a5a045b9.gif)

*Duplicating a collection*

## 3\. Share

Collaboration is a vital part of every team, especially when the team is small and everyone is working on similar priorities. Sharing helps users to collaborate conveniently. You can share a collection via the link or by moving it to a shared private, team, or public workspace.

Workspaces can be shared via the Run in Postman button or JSON link, but we need to make sure that the visibility of the workspace is public.

To share the workspace with people, here are a few prerequisites:

1. You need to have admin access for the workspace from which you will be using the share functionality, or else you will only be able to share with members who are already in the workspace.
    
2. If the collection is in a personal workspace, then you need to change the workspace visibility to the team.
    
3. If you have Editor access, you’ll have the ability to give new collaborators Viewer or Editor access to the collection.
    
4. If you have Viewer access, you’ll be able to share, but you won’t be able to assign roles.
    

Sharing features allow you to share in three different ways:

1. Sharing with people:
    

![Sharing a collection via invite using name, email, or group name](https://cdn.hashnode.com/res/hashnode/image/upload/v1720788554504/1aa65e6c-9f95-48bd-b4e6-c80f2ff8fc2d.png)

*Sharing a collection via invite using name, email, or group name*

2. The [Run in Postman](https://learning.postman.com/docs/publishing-your-api/run-in-postman/creating-run-button/) button:
    

![Sharing a collection via the Run in Postman button](https://cdn.hashnode.com/res/hashnode/image/upload/v1720788555585/01e9b8f0-4ddf-4ee9-9641-b7cb7442758d.png)

*Sharing a collection via the Run in Postman button*

3. JSON link: A public, shareable link to a static copy of your collection:
    

![Sharing collection via JSON link](https://cdn.hashnode.com/res/hashnode/image/upload/v1720788557633/dceb89e8-5969-4fd4-a939-7bc096240653.png)

*Sharing collection via JSON link*

## For collections—and much more

These are a few easy ways you can start collaborating in Postman. Also, just like with a Postman Collection, you can use the above features with other elements in Postman—including APIs, environments, mocks, and monitors.

The post [3 Popular Collaboration Features for Postman Collections](https://dev.to/jansche/3-popular-collaboration-features-for-postman-collections-39lk-temp-slug-1213605) appeared first on [Postman Blog](https://blog.postman.com).
