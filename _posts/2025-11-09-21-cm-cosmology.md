---
layout: post
title: "Part I: What is the 21-cm signal?"
permalink: '/21-cm-basics'
description: Hydrogen is the most abundant element in the Universe. How does this fact, and the fact that radio telescopes are just cheap metal poles and dishes, come together to tell us something crucial about the early Universe?
preview_image: assets/files/21-cm-cosmology/preview.png
---

### Whence come hydrogen?

To understand 21-cm cosmology, we first need to understand the hydrogen atom. It is the simplest element, consisting of just one proton and one electron. It is also the most abundant in the Universe, accounting for roughly $$74\%$$ of all baryonic matter (i.e. matter that we can see and detect easily) in the Universe. It fills up the space between galaxies, called the intergalactic medium, and also the space between stars inside those galaxies, called the interstellar medium.

In contrast with heavier elements like oxygen and carbon, which primarily come from stars through a process called ***stellar nucelosynthesis***, the hydrogen atoms come from a process in the very Early Universe called ***Big Bang Nucelosynthesis***. In the _Big Bang_ framework, the very early Universe went through a series of quick transitions. The very first moment ($$t_\mathrm{age} \lesssim 10^{-30}~\mathrm{seconds}$$) was a period of rapid expansion called ***inflation***, where quantum fluctuations turned into overdense and underdense clumps (or perturbations) in the medium$$^1$$. The inflationary epoch is followed by the era of the primordial soup (consisting of quarks and gluons). Although it sounds tasty, it is also very hot --- about a quadrillion Kelvin hot. Luckily for us, cosmic expansion continues to cool the Universe, and the particles in the soup turn into baryons (protons and neutrons, alongside a sea of electrons and neutrinos) through a process called ***Baryogenesis***. This all happens within the first $$t_\mathrm{age}<1~\text{second}$$. Eventually, about $$t_\mathrm{age}\sim 3-20~\text{mins}$$ after the Big Bang, the protons and neutrons aggregate to form hydrogen and helium, alongside a sparse amount of other light elements like lithium, through Big Bang Nucleosynthesis.

![]({{ site.baseurl }}/assets/files/21-cm-cosmology/CosmicTimeline.png){: .image .gallery}

Since they form so early on, we can rightly say that in addition to filling all of space, hydrogen has existed for all of time. If there was a way to detect them, it would prove to be one of the most powerful probes of our Universe through cosmic time. This question was answered by Hendrik van del Hulst, a Dutch astronomer, in 1944 whilst he was a student: he theorized the _21-cm spectral line_ of the hydrogen atom$$^2$$.

### The 21-cm line

![]({{ site.baseurl }}/assets/files/21-cm-cosmology/21cmSpinFlip.png){: .image .gallery}

The proton and electron inside a hydrogen atom have a property called its _spin_. In its usual ground energy state, the hydrogen atom is actually split into two 'hyperfine' states due to the interaction between both the spins. If their spins are aligned, their magnetic dipole moments are anti-aligned, and this is a less preferable energy state (i.e. higher energy). If their spins are anti-aligned, their magnetic dipole moments are aligned, and this is a more stable energy state (i.e. lower energy; for those familiar with electromagnetics, this is the equivalent of two parallel wires attracting each other). A transition, or rather a _spin flip_, from the higher energy state to the lower energy state corresponds to the release of a very tiny amount of energy: $$E_{21} \approx 5.9 \times 10^{-6}~\text{eV}$$m in the form of light (a photon) of wavelength $$\lambda_{21} \approx 21.1~\text{cm}$$ or equivalently frequency $$\nu_{21} \approx 1420~\text{MHz}$$. Compared to the photons from a light bulb, which are in the visible spectrum, $$\lambda_\text{bulb} \approx 500~\text{nm}$$ and $$\nu_\text{bulb} \approx 600~\text{THz}$$, the 21-cm line is in the radio spectrum. It is not too different from the radio waves that would be used to transmit your favourite radio station, or your WiFi, or bluetooth, or your microwave. They all belong to the $$\text{MHz}$$ to $$\text{GHz}$$ frequency range of the electromagnetic spectrum.
<!---
To put that energy scale to reference, a standard $$50~\text{W}$$ light bulb emits $$E_\text{bulb} \approx 3.1\times 10^{20}~\text{eV}$$ per second. Although that is an unfair comparison of a single photon from hydrogen and trillions/quadrillion photons from a light bulb.
!-->

### What comes after they form?

Once all the hydrogen in the Universe has formed, it does not become detectable immediately. The hydrogen atoms constantly ionize (i.e. the protons and electrons separate) and recombine due to the large energy of its surrounding. When the Universe has cooled enough (and indeed it continues cooling), the Universe becomes transparent and hydrogen atoms become stable in an event called ***Recombination*** at $$t_\text{age}\sim 300,000~\text{years}$$ after the Big Bang. This is linked to the ***Cosmic Microwave Background***, when light first starts to stream freely through the transparent Universe.

A single hydrogen atom left on its own in the higher energy state would take $$30~\text{million}$$ years to emit the 21-cm signal. If you have enough of them however, they would statistically be emitting this signal constantly. Hence, once _Recombination_ happens, we can: **a)** expect the stable hydrogen atoms to emit 21-cm photons, and **b)** expect the radio waves to reach us because the Universe is transparent.

### What happens after they emit the signal?

We have hydrogen atoms, and we expect them to emit the signal. What happens after they emit the signal? Let's say a hydrogen atom emitted the signal $$t_\text{age} \approx 1~\text{billion years}$$ after the Big Bang. The signal would travel through the  Universe, its wavelength stretching due to cosmic expansion (reducing its frequency), and reach us at $$t_\text{age} \approx 14~\text{billion years}$$. Thus the once emitted frequency $$\nu_{21} \approx 1420~\text{MHz}$$ reduces to $$\nu_\text{obs} \approx 200~\text{MHz}$$. A hydrogen atom emitting the signal even earlier, say $$t_\text{age} \approx 100~\text{million years}$$, would have its signal stretched to $$\nu_\text{obs} \approx 50~\text{MHz}$$.

There is a simple trick at play: the further we look, the earlier we look because light takes time to travel to us$$^3$$. And the earlier we want to look, the lower in frequency we have to go. So if we look at the whole frequency range, from $$\nu_\text{obs} \approx 50~\text{MHz}$$ to $$\nu_\text{obs} \approx 200~\text{MHz}$$, we are actually looking at the whole history of the Universe from $$t_\text{age} \approx 100~\text{million years}$$ to $$t_\text{age} \approx 1~\text{billion years}$$.

This is the time when the Universe transitions from its ***Dark Ages*** to its ***Cosmic Dawn***, when the first stars and galaxies form. The 21-cm signal is a direct probe of this era, and it is the only way to study this period of cosmic history in detail.

### How do we detect them?

For those who have seen or read about radio telescopes, you will notice they look either like metal poles sticking in the ground (radio antennas) or large dishes (like TV satellite dishes). These are the types of telescopes that are designed to detect the 21-cm line also. Below is an illustration of the Square Kilometer Array (SKA) telescope, currently under construction in South Africa and Western Australia, that will be the largest radio telescope in the world (in terms of its collecting area) and may be able to detect the 21-cm signal from the Cosmic Dawn and the Dark Ages.

![]({{ site.baseurl }}/assets/files/21-cm-cosmology/SKAtelescope.jpg){: .image .gallery}

### Footnotes

$$^1$$ These perturbations are seeds of what would form galaxies and voids later on, respectively. As surprising it may sound, this is what truly gives rise to all structures (the Galaxy, the Sun, the Earth and us).

$$^2$$ For the sake of historical accuracy, it was also independently derived by Iosif Shklovsky in 1949, who had heard of it but not read the paper due to a lack of journals crossing the Iron Curtain after the Second World War.

$$^3$$ Another simple way to imagine this is to think of the Universe around the Earth in terms of concentric shells, like an onion. The shells closest to us are closer in time, and the ones further away are further back in time. Hence, the further we look, the earlier we look. This isn't a complex cosmological phenomenon as such; it applies to any light that we see. The screen of your computer or phone is a fraction of a second in the past, the tree outside your windows are further in the past, and the Sun is about eight minutes in the past. The part that is unique to cosmology is that the Universe is expanding, and hence the light from the further shells is stretched in wavelength (or equivalently reduced in frequency) as it travels to us.
