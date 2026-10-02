---
layout: ../../layouts/Project.astro
title: UniFlow
kind: uniflow
order: 2
category: Browser tools / Education
summary: A degree audit, reimagined as an interactive map of what comes next.
stack: [JavaScript, Chrome Extension, D3.js, WebLLM, WebGPU]
repo: https://github.com/Kushagra0514/UniFlow
metric: 150+
metricLabel: academic requirements processed in roughly 400 ms
highlight: "150+ requirements, one clear map"
---

## The problem

A degree audit contains the information a student needs, but understanding how requirements fit together can still take work. I built UniFlow to turn DegreeWorks audit data into an interactive degree map.

## From audit data to a visual map

The Chrome extension captures DegreeWorks degree-audit JSON and transforms it for a D3.js visualization. The pipeline has four stages: a MAIN-world interceptor, an isolated-world content script, a service worker, and a data transformer.

The project processed more than 150 academic requirements in roughly 400 ms on page load. Parsing succeeded on more than 99% of a set of 50 test degree audits.

## Keeping advising in the browser

An AI advising layer uses WebLLM and WebGPU to process student records in the browser rather than sending them to an external AI service. Local processing is a deliberate architectural choice for handling sensitive academic information.

Browser support and available hardware matter for in-browser inference. The degree map and the AI advising layer have different runtime requirements.

## Beyond one campus

Domain pattern matching extends the approach to more than six Georgia universities using DegreeWorks. That is the project's implemented scope, rather than a claim of compatibility with every DegreeWorks deployment.

I also proposed UniFlow to a University of Georgia faculty member as a potential department-supported advising tool.

## Explore or contribute

The repository contains the extension implementation. Interesting areas to explore include interpreting different audit structures, making degree relationships clearer, and improving the usability of local AI advising.
