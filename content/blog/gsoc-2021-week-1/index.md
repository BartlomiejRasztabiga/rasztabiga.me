---
title: GSoC 2021 - Week 1 
date: '2021-06-07T12:00:00.000Z'
---

### Planning the work

I've started the week by gathering all requirements for the task ahead.

First, I've used these two articles on OpenMRS Wiki:

- [https://wiki.openmrs.org/display/projects/GSOC+2021%3A+Modernizing+Administration+functions+for+OpenMRS](https://wiki.openmrs.org/display/projects/GSOC+2021%3A+Modernizing+Administration+functions+for+OpenMRS)

- [https://wiki.openmrs.org/display/projects/GSoC+2021%3A+The+REST+of+Administration](https://wiki.openmrs.org/display/projects/GSoC+2021%3A+The+REST+of+Administration)

I also had to spend some time with REST API documentation [here](https://rest.openmrs.org/), because not every endpoint is
documented well, and in some cases, required features were already implemented but not yet documented :)

After a few hours I've been able to come up with the draft list of tasks that I will be tackling this summer. Here it is:

- [Add REST resource with links to administration pages of installed modules](https://issues.openmrs.org/browse/RESTWS-821)
- [UserResource should allow including disabled users in the response](https://issues.openmrs.org/browse/RESTWS-822)
- [Add REST resource for Alert Management](https://issues.openmrs.org/browse/RESTWS-823)
- [EncounterResource should allow including deleted encounters in the response](https://issues.openmrs.org/browse/RESTWS-824)
- [ProviderResource should allow including retired providers in the response](https://issues.openmrs.org/browse/RESTWS-825)
- [Add REST resource for Address Template Management](https://issues.openmrs.org/browse/RESTWS-826)
- [Update REST API docs about "List all observations" endpoint](https://issues.openmrs.org/browse/RESTWS-827)
- [Add REST API docs about Task related resources](https://issues.openmrs.org/browse/RESTWS-828)
- [Add REST resource for Program Management](https://issues.openmrs.org/browse/RESTWS-829)
- [Add REST resource for ConceptProposal management](https://issues.openmrs.org/browse/RESTWS-830)
- [Add REST resource for ConceptStopWord management](https://issues.openmrs.org/browse/RESTWS-831)
- [Add REST resource for Field Types management](https://issues.openmrs.org/browse/RESTWS-832)
- [Add REST resource for Implementation ID management](https://issues.openmrs.org/browse/RESTWS-833)
- [Add REST resource for Database Changes](https://issues.openmrs.org/browse/RESTWS-834)
- [Add REST resource for Logged In Users](https://issues.openmrs.org/browse/RESTWS-835)
- [Add REST resource for Triggered State Conversions management](https://issues.openmrs.org/browse/RESTWS-836)
- [Add REST resource for Visits Behavior management](https://issues.openmrs.org/browse/RESTWS-837)
- [Add REST resource for Patient Identifier Sources management](https://issues.openmrs.org/browse/RESTWS-838)
- [Add REST resource for Auto-Generation Options management](https://issues.openmrs.org/browse/RESTWS-839)
- [Add REST resource for Log Entries of identifier generation management](https://issues.openmrs.org/browse/RESTWS-840)

As you can see, most of them involve creating a brand new resource for our objects.

Me and my mentors decided that we'll be adding or removing tasks from this list when needed, according to the time left.

Let's look at the first task from the list :)

### My first task

My first task - exposing the list of administration links for installed modules through REST.

[RESTWS-821](https://issues.openmrs.org/browse/RESTWS-821)

#### Created wrapper class for the resource return value

I've created class `ModuleAdministrationLinks1_8` that represents one module with its administration links. It also contains `AdministrationLink` inner class to encapsulate a single link with its title.

#### Created AdministrationLinksResource1_8

It extends `BaseDelegatingReadableResource` class, because it only provides GET operations, as those objects cannot be persisted directly.

The implementation of it is fairly simple. I'm gathering all AdministrationSection extensions by calling `ModuleFactory.getExtensions("org.openmrs.admin.list")`.
Then I'm casting each extension to its supper class - `AdministrationSectionExt` and retrieving a map of administration links. What's left to do is to pack this into my custom class and send it as a response :)

#### Created AdministrationLinksResource1_8Test

Every class must be tested. That's why I've created a basic unit test for my new REST Resource.
My class extends `BaseDelegatingResourceTest` so I didn't have much code to write myself.

#### Posted a Pull Request

After implementing all of the above, I've posted a pull request to review:

[https://github.com/openmrs/openmrs-module-webservices.rest/pull/484](https://github.com/openmrs/openmrs-module-webservices.rest/pull/484)

I've also created a pull request with the documentation for the AdministrationLinksResource:

[https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/140](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/140)

### My second task

My second task was [RESTWS-822](https://issues.openmrs.org/browse/RESTWS-822).

It involved adding the ability to include disabled users when querying UserResource.

After investigating, it turned out that the Resource already supports such a filter, and you would only need to
append `includeAll=true` parameter to retrieve all users, including disabled ones.

That's why I've only made a pull request to update the REST API
documentation:

[https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/141](https://github.com/openmrs/openmrs-contrib-rest-api-docs/pull/141)

#### Summary

That's it for the week. It was a fairly productive one, mainly because I'm in the middle of preparing for my final exams
at the university :)

Next week, I will try to implement a more significant task - [RESTWS-823](https://issues.openmrs.org/browse/RESTWS-823). It will involve me creating a REST resource from
scratch.

Take care and stay safe!

### Resources:

- [https://rest.openmrs.org/](https://rest.openmrs.org/)
- [https://qa-refapp.openmrs.org/openmrs/](https://qa-refapp.openmrs.org/openmrs/)
- [https://issues.openmrs.org/browse/RESTWS-820](https://issues.openmrs.org/browse/RESTWS-820)
