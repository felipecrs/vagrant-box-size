# Vagrant box size

Provides an endpoint for shields.io, to create a badge with the size of a Vagrant box hosted on Vagrant Cloud.

This project refers to [runkit.com/felipecassiors/vagrant-box-size](https://runkit.com/felipecassiors/vagrant-box-size).

## Usage

**Endpoint:** `https://runkit.io/felipecassiors/vagrant-box-size/branches/master/:organization/:boxName/:provider?`

> default provider is `virtualbox` if not provided

## Examples

- **box: [felipecassiors/ubuntu1804-4dev](https://app.vagrantup.com/felipecassiors/boxes/ubuntu1804-4dev)**
  - provider: default (`virtualbox`)
  - endpoint: `https://runkit.io/felipecassiors/vagrant-box-size/branches/master/felipecassiors/ubuntu1804-4dev`
  - [shields.io](https://shields.io/endpoint): `https://img.shields.io/endpoint?url=https://runkit.io/felipecassiors/vagrant-box-size/branches/master/felipecassiors/ubuntu1804-4dev`
  - preview: [![Vagrant box size](https://img.shields.io/endpoint?url=https://runkit.io/felipecassiors/vagrant-box-size/6.0.0/felipecassiors/ubuntu1804-4dev)](https://app.vagrantup.com/felipecassiors/boxes/ubuntu1804-4dev)

- **box: [bento/ubuntu-18.04](https://app.vagrantup.com/felipecassiors/bento/ubuntu-18.04)**
  - provider: `vmware_desktop`
  - endpoint: `https://runkit.io/felipecassiors/vagrant-box-size/branches/master/bento/ubuntu-18.04/vmware_desktop`
  - [shields.io](https://shields.io/endpoint): `https://img.shields.io/endpoint?url=https://runkit.io/felipecassiors/vagrant-box-size/branches/master/bento/ubuntu-18.04/vmware_desktop`
  - preview: [![Vagrant box size](https://img.shields.io/endpoint?url=https://runkit.io/felipecassiors/vagrant-box-size/branches/master/bento/ubuntu-18.04/vmware_desktop)](https://app.vagrantup.com/bento/boxes/ubuntu-18.04)
