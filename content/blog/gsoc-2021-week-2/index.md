---
title: GSoC 2021 - Week 2
date: '2021-06-19T12:00:00.000Z'
---

### First serious work

I've started the week by working on my next big task:

[RESTWS-823](https://issues.openmrs.org/browse/RESTWS-823)

It involves creating a REST Resource for Alert object from scratch.

The work actually went pretty smoothly, and I didn't encounter any major difficulties.

I've learnt how to create sub-resources, because I had to make one for Alert Recipients.

I also had an opportunity to create my first Controller Test, which is e2e test, verifying endpoint's functionality from client's perspective.

I've posted my PR for this task here: 

[https://github.com/openmrs/openmrs-module-webservices.rest/pull/485](https://github.com/openmrs/openmrs-module-webservices.rest/pull/485)

I also had to add REST API documentation for it:

[https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/143](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/143)

### Difficulties with the previous task

[RESTWS-821](https://issues.openmrs.org/browse/RESTWS-821)

In the process of code review it turned out, that I can't really copy the `AdministrationSectionExt` from legacyui module directly. I had to depend on it.

Unfortunately, that caused some more problems which we're now investigating.

### Another documentation task

Next, I've spent some time on this task:

[RESTWS-841](https://issues.openmrs.org/browse/RESTWS-841)

It was a basic documentation task. The RelationshipTypeResource didn't have any REST API documentation. 

However, it would be required for the [People management](https://wiki.openmrs.org/display/projects/GSoC+2021%3A+People+Management) task, that's why the docs should be up to date.

I've posted my PR here:

[https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/144](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/144)


#### Summary

That's it for the week. At the end of it I've started the following task:

[RESTWS-842](https://issues.openmrs.org/browse/RESTWS-842)

I'm going to continue working on it the next week. I will also tackle the next task from my list, which is:

[RESTWS-383](https://issues.openmrs.org/browse/RESTWS-838)

Hopefully, we will also resolve problems with the previous task.

Take care and stay safe!

### Resources:

- [https://rest.openmrs.org/](https://rest.openmrs.org/)
- [https://issues.openmrs.org/browse/RESTWS-820](https://issues.openmrs.org/browse/RESTWS-820)
