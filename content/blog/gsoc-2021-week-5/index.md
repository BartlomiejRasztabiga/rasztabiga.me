---
title: GSoC 2021 - Week 5
date: '2021-07-11T12:00:00.000Z'
---

### Week 6 update

#### Issues closed.

The following issues have been closed this week.

Here's a list of them with appropriate links:

* [TRUNK-6010](https://issues.openmrs.org/browse/TRUNK-6010)
* [RESTWS-842](https://issues.openmrs.org/browse/RESTWS-842)
* [RESTWS-834](https://issues.openmrs.org/browse/RESTWS-834)
* [RESTWS-826](https://issues.openmrs.org/browse/RESTWS-826)
* [RESTWS-824](https://issues.openmrs.org/browse/RESTWS-824)
* [RESTWS-837](https://issues.openmrs.org/browse/RESTWS-837)

We've finally merged an issue [TRUNK-6010](https://issues.openmrs.org/browse/TRUNK-6010) which blocked [RESTWS-842](https://issues.openmrs.org/browse/RESTWS-842). However, we couldn't add appropriate tests to it in REST-WS module, as it doesn't have access to the newest Core module (2.5 SNAPSHOT). That's why we've decided to ignore those tests for now and unignore them after 2.5 version release.

#### PRs in Code Review

There is also 1 task currently undergoing a code review by my mentors:

* [RESTWS-827](https://issues.openmrs.org/browse/RESTWS-827)

#### In progress tasks

There are also 2 tasks currently in progress:

* [RESTWS-829](https://issues.openmrs.org/browse/RESTWS-829)
* [RESTWS-836](https://issues.openmrs.org/browse/RESTWS-836)

A quick note about [RESTWS-829](https://issues.openmrs.org/browse/RESTWS-829), initially I thought this task would involve coding. However, after investigating for a bit, it turned out that there are already REST Resources that fulfill the functionality of Legacy UI pages. That's why I will need only to prepare the documentation, but it's going to be significant, as I will have to document 6 resources :)

#### Next week

In the upcoming week, I'm going to work on the two issues above as they are pretty significant in the volume of work needed.

We're also slowly but surely coming to an end of the task list, so I will probably find some more tasks to work on during GSoC 2021 :)

Best regards and see you next week!
