---
title: GSoC 2021: Week 0 date: '2021-06-01T12:00:00.000Z'
---

### Getting familiar with REST-WS development

My first task is to expose a list of administration links for installed modules through REST API.

That's why I will need to familiarise myself
with [REST-WS module](https://github.com/openmrs/openmrs-module-webservices.rest) development :)

I need to know how to modify, build and deploy changes using OpenMRS-SDK.

### Running OpenMRS server

The first thing we need is a running OpenMRS distribution server. I will use OpenMRS SDK for simplicity.

#### Install OpenMRS SDK

OpenMRS SDK, at the time of writing, requires JDK 1.8 and Maven 3.x installed.

You can install it by running:

```shell
mvn org.openmrs.maven.plugins:openmrs-sdk-maven-plugin:setup-sdk
```

#### Create server

Then, we will need to create an OpenMRS server.

```shell
mvn openmrs-sdk:setup
```

It will ask you a bunch of questions:

- server ID
- type of server (Platform or Distribution)
- type of database
- version of Reference Application module

I've chosen Distribution and then went to select a database. I wanted to use the one in a docker container for simplicity, but I bumped into a problem:

```
[ERROR] Failed to execute goal org.openmrs.maven.plugins:openmrs-sdk-maven-plugin:4.0.0:setup (default-cli) on project standalone-pom: Failed to setup server: Unable to execute mojo: Execution null of goal org.openmrs.maven.plugins:openmrs-sdk-docker-maven-plugin:4.0.0:run-db failed: failed to create shim: OCI runtime create failed: invalid mount {Destination:openmrs-sdk-mysql-v3-2-data:/var/lib/mysql Type:bind Source:/var/lib/docker/volumes/549d46724fe820dc4bccba568b350c6f976afe0168c19595d19bfb4edd49a725/_data Options:[rbind]}: mount destination openmrs-sdk-mysql-v3-2-data:/var/lib/mysql not absolute: unknown -> [Help 1]
```

I wasn't able to resolve this, so I've chosen a self-hosted MySQL server.

I also had issues with the default MySQL connection string. The solution was pretty easy - I had to add `serverTimezone=CEST`
attribute to the JDBC connection string.

#### Run server

```shell
mvn openmrs-sdk:run
```

After running the command above, you should have an OpenMRS server running
on: [http://localhost:8080/openmrs/](http://localhost:8080/openmrs/).

Default user credentials are:

```shell
Username: admin
Password: Admin123
```

I've created a test patient to test basic REST endpoints.

Using "Testing REST URIs" page, I've executed the following requests:

`GET /openmrs/ws/rest/v1/patient?q=Test`

`GET /openmrs/ws/rest/v1/patient/fa6f9908-f757-4a03-9f2a-3a2d14ec7212`

### Deploy REST-WS module on local server

I've made a simple change to REST-WS code to test the deployment of the new module version to the existing OpenMRS server.

Basically, I have added a new "test" string field to the Patient resource.

To deploy a new version, you have to go into the root directory of a module that you want to deploy and run:

```shell
mvn openmrs-sdk:deploy
```

It will ask you for serverID that it should be deployed at. After that, you will have to restart your server and voilà - you're running modified code :)

### Conclusions
It turns out that modifying OpenMRS modules and their deployment is super easy, thanks to OpenMRS SDK.

I will be adding a new blog post about my first task implementation in a week, so stay tuned!

### Resources:

- [https://wiki.openmrs.org/display/docs/OpenMRS+SDK](https://wiki.openmrs.org/display/docs/OpenMRS+SDK)
- [https://wiki.openmrs.org/display/docs/REST+Module](https://wiki.openmrs.org/display/docs/REST+Module)
- [https://wiki.openmrs.org/display/docs/Adding+a+Web+Service+Step+by+Step+Guide+for+Core+Developers](https://wiki.openmrs.org/display/docs/Adding+a+Web+Service+Step+by+Step+Guide+for+Core+Developers)
- [https://wiki.openmrs.org/display/docs/REST+Web+Services+API+For+Clients](https://wiki.openmrs.org/display/docs/REST+Web+Services+API+For+Clients)
