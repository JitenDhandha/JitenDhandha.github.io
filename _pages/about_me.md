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

<img class="image gallery fourth" src="/assets/images/about_me_img1.jpg"
title="PhD matriculation ceremony at Pembroke College, University of Cambridge, UK (October 2022)."/>
<img class="image gallery fourth" src="/assets/images/about_me_img2.jpg"
title="PhD cohort trip to Durham, UK (August 2023). Image credit: Erin Hayes"/>
<img class="image gallery fourth" src="/assets/images/about_me_img3.jpg"
title="REACH annual meeting 2023 at University of Malta, Valletta (September 2023). Image credit: unknown."/>
<img class="image gallery fourth" src="/assets/images/about_me_img4.jpg"
title="REACH annual meeting 2024 in Mahabaleshwar, India (September 2024). Image credit: Christian Kirkham."/>
<img class="image gallery fourth" src="/assets/images/about_me_img5.jpg"
title="7th Global 21-cm Workshop at Raman Research Institute, Bangalore, India (October 2024)."/>
<img class="image gallery fourth" src="/assets/images/about_me_img6.jpg"
title="Seminar at Institut d'Astrophysique Spatiale, Paris, France (November 2025). Image credit: Adélie Gorce."/>
<img class="image gallery fourth" src="/assets/images/about_me_img7.jpg"
title="Cosmology in the Alps 2026 in Les Diablerets, Switzerland (March 2026). Image credit: Nadia Cooper."/>


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
