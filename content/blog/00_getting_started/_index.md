---
title: "0. Getting Started"
authors: ["Jayesh Badwaik", "Salem El Sayed Mohammed"]
layout: article
timestamp: true
toc: true
autonumbering: true
date : 2022-06-02T22:14:40+02:00
---

At its heart, a filesystem takes a set of memory and storage devices and adds a
semantic structure to the data on those devices. In Linux, the semantic
structure is a [POSIX-like
filesystem](https://tldp.org/LDP/intro-linux/html/sect_03_01.html). Multiple
file systems are handled by creating a [virtual
filesystem](https://en.wikipedia.org/wiki/Virtual_file_system) and making all
the files on all the devices appear to exist in a single hierarchy. The [Virtual
File System in
Linux](https://www.kernel.org/doc/html/latest/filesystems/index.html) also
provides an abstraction within the kernel which allows for different filesystem
implementations to co-exist.

All filesystem drivers in linux must implement the API as specified by the VFS.
It is not necessary to implement the file system driver in the kernel mode.
[FUSE](https://www.kernel.org/doc/html/latest/filesystems/fuse.html) is a
framework which allows filesystem API to be implemented in the userspace.
However, the userspace nature of the framework introduces certain limitations.

The objective of our experiment is to take a set of storage devices, and design
a VFS-compatible filesystem on top of them. The experiment requires ability to
directly write at specific blocks in a hard drive. Therefore, we have to write
at least part of our code in a kernel module. However, developing code for a
kernel module introduces certain restrictions in development workflows which
slows down the development. A way around this difficulty, at least in the
beginning, is to expose a small set of kernel functionality through a kernel
module and write the rest of the filesystem driver in the kernel.


So, the next step would be to first write a small kernel module.
