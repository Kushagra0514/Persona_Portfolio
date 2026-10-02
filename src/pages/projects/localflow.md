---
layout: ../../layouts/Project.astro
title: LocalFlow
kind: localflow
order: 3
category: Speech AI / Productivity
summary: Push-to-talk dictation that turns spoken thoughts into text in the app you are already using.
stack: [Python, whisper.cpp, Groq API]
repo: https://github.com/Kushagra0514/LocalFlow
metric: 266 MiB
metricLabel: peak memory with the quantized speech model
highlight: "CPU-only speech recognition"
---

## The problem

Dictation is most useful when it fits into the application you are already using. I built LocalFlow as an open-source alternative to subscription transcription tools, with system-wide push-to-talk and direct text insertion.

## A small, local speech model

LocalFlow uses whisper.cpp with the base.en Q5 model on CPU-only hardware. Quantization reduced peak memory from roughly 1.1 GB to 266 MiB while retaining 94% transcription accuracy on the project's evaluation audio.

Inference optimization reduced transcription latency from 1.8 seconds to 650 ms. The reported transcription throughput was 145 words per minute, without a discrete GPU.

## From transcript to usable text

After local transcription, the text passes through the Groq API using gpt-oss-20b to correct grammar, fix capitalization, and remove filler words. Clipboard injection then pastes the cleaned text into the active application.

Speech recognition runs locally; transcript cleanup uses a cloud API. This distinction matters when deciding what to dictate.

## Explore or contribute

The repository provides the implementation. Model size, recognition quality, and latency are closely connected; understanding that tradeoff is a useful starting point for experimenting with the project.
