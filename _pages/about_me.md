---
layout: page
title: About me
permalink: '/about-me'
description: 'A brief peek into my life</br> Who am I? What am I...? Why... am... I?'
image: assets/images/SE_img1.jpg
in_nav_menu: true
show_tile: true
tile_num: 1
---

![]({{ site.baseurl }}/assets/images/about_me_img1.png){: .image .gallery .fourth}
![]({{ site.baseurl }}/assets/images/about_me_img3.png){: .image .gallery .fourth}
![]({{ site.baseurl }}/assets/images/about_me_img2.jpg){: .image .gallery .fourth}
![]({{ site.baseurl }}/assets/images/about_me_img4.jpg){: .image .gallery .fourth}


## Who am I?
{: .underlined}

{% assign dateStart = "2000-03-02" | date: '%s' %}
{% assign nowTimestamp = 'now' | date: '%s' %}
{% assign diffSeconds = nowTimestamp | minus: dateStart %}
{% assign diffDays = diffSeconds | divided_by: 3600 | divided_by: 24 | divided_by: 365 %}

Hello! My name is Jiten Dhandha. I am {{ diffDays | round: 0 }} years old. I was born in Gujarat, India, but did my undergraduate and masters at the _University of Manchester_ in the UK. I am currently a PhD student at the _Institute of Astronomy_, University of Cambridge, studying the cosmological 21-cm signal and its observations through the REACH telescope. I love learning and talking about space, especially all things cosmology, i.e. the the large scale structures in our Universe and their evolution.

## Outside of work
{: .underlined}

When I am not raving about space, ranting about errors in my analysis codes or involving myself in too many projects, I find myself doing one or more of the following things (in no specific order):
- consuming unearthly amounts of masala chai;
- pretending to be a half-elephant, half-human (or other equally strange characters) in Dungeons & Dragons;
- solving math puzzles or competitive coding problems;
- playing assorted video-games (I love single-player story-driven games!);
- editing or doing gnomish work on Wikipedia articles;
- trying out game development on Unreal Engine, or 3D modelling on Blender;
- and last, but certainly not the least, learning about Indian cooking and trying out new dishes!
