---
title: GSoC 2021 - Week 3
date: '2021-06-26T12:00:00.000Z'
---

### Week 3 update

#### First blocker

First, I wanted to work on the following ticket: [RESTWS-842](https://issues.openmrs.org/browse/RESTWS-842)

It quickly turned out that the underlying service that's supposed to return duplicated patients throws SQLException.

That's why I had to resolve this blocker. I've created a ticket for this issue: [TRUNK-6008](https://issues.openmrs.org/browse/TRUNK-6008) and started looking into it. It was a relatively easy task. There was a syntax issue within the executed SQL. I quickly fixed it and posted a pull request: [https://github.com/openmrs/openmrs-core/pull/3810](https://github.com/openmrs/openmrs-core/pull/3810)

I'm now waiting for it to be merged so that I could get back to my task :)

#### Merged PRs

In this week, we've managed to merge PRs for the following tasks:

- [RESTWS-822](https://issues.openmrs.org/browse/RESTWS-822)

- [RESTWS-841](https://issues.openmrs.org/browse/RESTWS-841)

#### Completed tasks

I've been able to complete the following task from my list: [RESTWS-838](https://issues.openmrs.org/browse/RESTWS-838)

At first, I thought it would include a significant portion of coding, but it turned out that there already exists a REST Resource that fulfills the objectives of this task. That's why I've decided only to update its REST documentation.

The PR with docs is posted here: [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/145](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/145)

#### Next week

In the next week, I will try to get my open pull request to be merged, especially the old ones: [RESTWS-821](https://issues.openmrs.org/browse/RESTWS-821) and [RESTWS-823](https://issues.openmrs.org/browse/RESTWS-823)

Next, I'm planning to work on these three next tasks from my list:

- [RESTWS-839](https://issues.openmrs.org/browse/RESTWS-839)

- [RESTWS-840](https://issues.openmrs.org/browse/RESTWS-840)

- [RESTWS-825](https://issues.openmrs.org/browse/RESTWS-825)

