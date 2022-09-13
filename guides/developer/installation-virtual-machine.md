---
title: Install Formatif as a Virtual Machine
summary: Guides the user through installation with a pre-packaged virtual machine
authors: Justfeedme
---

# A Note on Namespaces

Formatif is the name for a project previously named "Doubtfire". While all outward presenting aspects of the tool are branded as Formatif, the codebase and diagrams below may make frequent references to "Doubtfire". This is always refering to Formatif.

# Instructions

If you are new to the Formatif project, there is a pre-packaged virtual machine that contains a fully-functional
instance of Formatif. This method of installation offers a quick, no fuss way to experiment with Formatif; to see what
a functional installation should look like. It allows you to interact with both the back-end API and the web interface,
to test user functionality for the various user roles, and to familiarize yourself with the codebase. However,
installation through this method is limited:

- To minimize the size of the virtual machine itself, the virtualized instance of Formatif does not contain LaTeX,
  meaning that the platform's PDF functionality will not work.

- The virtual hard disk allocated to the machine has also been limited to the size required for a bare-bones Formatif
  installation.

- VirtualBox's overheads may impair the performance of Formatif software; it is recommended you run Formatif with an
  allocated hard drive of 20 GB or more, and with 4 GB or more of RAM.

This installation method requires you to install the VirtualBox software onto your host machine. VirtualBox is an
open-source hypervisor developed by Oracle. It effectively emulates the hardware of a computer, within your existing
computer and operating system--allowing you to run a computer within a computer. Installation instructions are available
through the [VirtualBox website](https://www.virtualbox.org/). Note: it may also be possible to install the packaged
virtual machine using another hypervisor by exporting/importing the provided virtual machine. This method has not been
tested.

Once VirtualBox has been installed, download the
[Formatif Virtual Machine](https://deakin365-my.sharepoint.com/:u:/g/personal/jwtayl_deakin_edu_au/Ea5v4lk7mqZKi4bs9-sykoIBvtC9YY6JrYtneqIrp899fw?e=xJ0aH).
Import the Virtual Machine into VirtualBox using the import utility, as depicted below.

![Virtual Machine Import](/guides/installation-virtual-machine/1.png)

Once the Virtual Machine has been imported, starting the machine should load Ubuntu desktop. Note that **_doubtfire_**
is both the username _and_ password for this Ubuntu machine.

![Ubuntu Desktop](/guides/installation-virtual-machine/2.png)
