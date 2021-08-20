---
title: GSoC 2021 - Final evaluation
date: '2021-08-15T12:00:00.000Z'
---

# GSoC 2021: The REST of Administration Project Final Evaluation

- Project Title: The REST of Administration
- Primary mentor: Daniel Kayiwa
- Backup mentor: Cliff Gita
- Student: Bartłomiej Rasztabiga
- Project
  Link: [https://wiki.openmrs.org/display/projects/GSoC+2021%3A+The+REST+of+Administration](https://wiki.openmrs.org/display/projects/GSoC+2021%3A+The+REST+of+Administration)

## Overview

In order to meet the goal of migrating administration functions to the new micro frontend framework, I had to make sure
all the administration functions are accessible through REST APIs.

This task involved getting familiar with current Legacy UI administration section functionalities. Then I had to find
what is the missing functionality and how it's currently handled by the UI.

Then, I have added new or modified existing REST resources as well as added REST API documentation to them.

## Objective

Create REST endpoints for managing administration functions that are not yet available via REST - COMPLETED

## Contributions

I've worked on three OpenMRS repositories:

* [https://github.com/openmrs/openmrs-module-webservices.rest](https://github.com/openmrs/openmrs-module-webservices.rest)
* [https://github.com/openmrs/openmrs-contrib-rest-api-docs](https://github.com/openmrs/openmrs-contrib-rest-api-docs)
* [https://github.com/openmrs/openmrs-core](https://github.com/openmrs/openmrs-core)

Tickets closed:

1. Ticket: [RESTWS-821](https://issues.openmrs.org/browse/RESTWS-821)

   Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/484](https://github.com/openmrs/openmrs-module-webservices.rest/pull/484)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/140](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/140)

2. Ticket: [RESTWS-822](https://issues.openmrs.org/browse/RESTWS-822)

   Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/141](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/141)

3. Ticket: [RESTWS-823](https://issues.openmrs.org/browse/RESTWS-823)

   Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/485](https://github.com/openmrs/openmrs-module-webservices.rest/pull/485)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/143](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/143)

4. Ticket: [RESTWS-841](https://issues.openmrs.org/browse/RESTWS-841)

   Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/144](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/144)

5. Ticket: [RESTWS-842](https://issues.openmrs.org/browse/RESTWS-842)

   Pull Requests:

    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/488](https://github.com/openmrs/openmrs-module-webservices.rest/pull/488)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/148](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/148)

6. Ticket: [RESTWS-838](https://issues.openmrs.org/browse/RESTWS-838)

   Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/145](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/145)

7. Ticket: [RESTWS-839](https://issues.openmrs.org/browse/RESTWS-839)

   Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/146](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/146)

8. Ticket: [RESTWS-840](https://issues.openmrs.org/browse/RESTWS-840)

   Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/149](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/149)

9. Ticket: [RESTWS-825](https://issues.openmrs.org/browse/RESTWS-825)

   Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/150](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/150)

10. Ticket: [RESTWS-837](https://issues.openmrs.org/browse/RESTWS-837)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/489](https://github.com/openmrs/openmrs-module-webservices.rest/pull/489)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/151](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/151)

11. Ticket: [RESTWS-824](https://issues.openmrs.org/browse/RESTWS-824)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/152](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/152)

12. Ticket: [RESTWS-826](https://issues.openmrs.org/browse/RESTWS-826)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/153](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/153)

13. Ticket: [RESTWS-829](https://issues.openmrs.org/browse/RESTWS-829)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/492](https://github.com/openmrs/openmrs-module-webservices.rest/pull/492)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/157](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/157)

14. Ticket: [RESTWS-836](https://issues.openmrs.org/browse/RESTWS-836)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/493](https://github.com/openmrs/openmrs-module-webservices.rest/pull/493)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/158](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/158)

15. Ticket: [RESTWS-834](https://issues.openmrs.org/browse/RESTWS-834)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/491](https://github.com/openmrs/openmrs-module-webservices.rest/pull/491)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/154](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/154)

16. Ticket: [RESTWS-827](https://issues.openmrs.org/browse/RESTWS-827)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/155](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/155)

17. Ticket: [RESTWS-828](https://issues.openmrs.org/browse/RESTWS-828)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/160](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/160)

18. Ticket: [RESTWS-830](https://issues.openmrs.org/browse/RESTWS-830)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/494](https://github.com/openmrs/openmrs-module-webservices.rest/pull/494)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/159](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/159)

19. Ticket: [RESTWS-831](https://issues.openmrs.org/browse/RESTWS-831)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/161](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/161)

20. Ticket: [RESTWS-832](https://issues.openmrs.org/browse/RESTWS-832)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/495](https://github.com/openmrs/openmrs-module-webservices.rest/pull/495)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/162](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/162)

21. Ticket: [RESTWS-833](https://issues.openmrs.org/browse/RESTWS-833)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/496](https://github.com/openmrs/openmrs-module-webservices.rest/pull/496)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/163](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/163)

22. Ticket: [RESTWS-835](https://issues.openmrs.org/browse/RESTWS-835)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/497](https://github.com/openmrs/openmrs-module-webservices.rest/pull/497)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/164](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/164)

23. Ticket: [RESTWS-845](https://issues.openmrs.org/browse/RESTWS-845)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/165](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/165)

24. Ticket: [RESTWS-846](https://issues.openmrs.org/browse/RESTWS-846)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-module-webservices.rest/pull/498](https://github.com/openmrs/openmrs-module-webservices.rest/pull/498)
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/166](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/166)

25. Ticket: [RESTWS-847](https://issues.openmrs.org/browse/RESTWS-847)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/167](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/167)

26. Ticket: [TRUNK-6008](https://issues.openmrs.org/browse/TRUNK-6008)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-core/pull/3810](https://github.com/openmrs/openmrs-core/pull/3810)

27. Ticket: [TRUNK-6010](https://issues.openmrs.org/browse/TRUNK-6010)

    Pull Requests:
    * [https://github.com/openmrs/openmrs-core/pull/3814](https://github.com/openmrs/openmrs-core/pull/3814)

## Weekly Blog Posts

* [week-0](https://rasztabiga.me/blog/gsoc-2021-week-0/)
* [week-1](https://rasztabiga.me/blog/gsoc-2021-week-1/)
* [week-2](https://rasztabiga.me/blog/gsoc-2021-week-2/)
* [week-3](https://rasztabiga.me/blog/gsoc-2021-week-3/)
* [week-4](https://rasztabiga.me/blog/gsoc-2021-week4/)
* [week-5](https://rasztabiga.me/blog/gsoc-2021-week-5/)
* [week-6](https://rasztabiga.me/blog/gsoc-2021-week-6/)
* [week-7](https://rasztabiga.me/blog/gsoc-2021-week-7/)
* [week-8](https://rasztabiga.me/blog/gsoc-2021-week-8/)
* [week-9](https://rasztabiga.me/blog/gsoc-2021-week-9/)
* [week-10](https://rasztabiga.me/blog/gsoc-2021-week-10/)

## Video Presentation

[https://www.youtube.com/watch?v=bAZXe7euYsg](https://www.youtube.com/watch?v=bAZXe7euYsg) 

## Resources

* [Project proposal](https://docs.google.com/document/d/12Z3ui0y7h8gapoSuIiEJJ6jsK2RImSJCUyKfvb4LWcc)
* [Project Talk thread](https://talk.openmrs.org/t/gsoc-2021-the-rest-of-administration/32663)
* [Project Updates Talk thread](https://talk.openmrs.org/t/gsoc-2021-project-the-rest-of-administration/33518)
* [Wiki page](https://wiki.openmrs.org/display/projects/GSoC+2021%3A+The+REST+of+Administration)

## Future Works

Fortunately, I've been able to complete all my work, and there are no pending items on this project.

However, I do not guarantee that I've converted all the functionality of Legacy UI into REST resources, so adding any
missing ones can be taken into account in the future :)

Also, outcomes of this task will be used by future contributors when working on admin modules of new micro frontend
architecture.

## Thoughts on GSoC

It has been a wonderful ten weeks for me. It was great to work with OpenMRS and GSoC communities. It's been an absolute
pleasure. Also, I really liked the architecture of the REST WS module that was easy to extend and to work with overall.

I also want to thank OpenMRS and obviously my mentors: Daniel Kayiwa and Cliff Gita, who provided me with a lot of
knowledge about the OpenMRS platform, as well as much technical help while reviewing my pull requests.

